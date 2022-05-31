import React, {useEffect} from 'react';
import Navbar from "../../components/navbar/Navbar";
import "./ActivityMap.scss"
import {useDispatch, useSelector} from "react-redux";
import {getActivityThunk} from "../../redux/actions/activityAction";
import pin from "../../images/pin.svg"
import GoogleMapReact from "google-map-react";
import {Link} from "react-router-dom";

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
};

const defaultProps = {
    center: {
        lat: 60.192059,
        lng: 24.945831
    },
    zoom: 11
};

const AnyReactComponent = ({text}) => <div>{text}</div>;
const ActivityMap = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.ActivityReducer.activity)

    useEffect(() => {
        dispatch(getActivityThunk())
    }, [])
    console.log(data);
    return (
        <div>
            <Navbar/>
            <div className="container">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCoNrtASAhs_wBH1KySbGvwTzUl1kjPVfk"
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    {/*{data && data?.map(i => {*/}
                    {/*    return (*/}
                    {/*        <Link to={"/" + i.name} key={i.id} lat={i.lat} lng={i.lng}>*/}
                    {/*            <img style={markerStyle} src={pin} alt="pin"/>*/}
                    {/*        </Link>*/}
                    {/*    );*/}
                    {/*})}*/}
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default ActivityMap;