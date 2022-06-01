import React, {useEffect} from 'react';
import Navbar from "../../components/navbar/Navbar";
import "./ActivityMap.scss"
import {useDispatch, useSelector} from "react-redux";
import {getActivityThunk} from "../../redux/actions/activityAction";
import GoogleMapReact from "google-map-react";

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