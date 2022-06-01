// styles

import "./activatesStatistic.scss"

import React, {useEffect, useState} from 'react';
import axios from "axios";

// custom imports

import skiboy from "../../images/skiboy.svg"
import completed from "../../images/complited.png"
import completed_other from "../../images/check_done.svg"
import activity_minutes from "../../images/activity_minutes.svg"
import {API_URI, userId,} from "../../utils/keys";
import {settingsReducer} from "../../redux/reducers/settingReducer";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const ActivatesStatistic = () => {
    const [user, setUser] = useState();
    const [myActivityHour,setMyActivityHour] = useState()
    const [activityMy,setActivityMy] = useState()

    const fetchPost = async () => {
        try {
            const response = await axios(`${API_URI}/users/single`,
                {params:{id:userId}});
            setUser(response.data);
        } catch (err) {console.error(err);}
    };

    const fetchPostActivityMy = async () => {
        try {
            const response = await axios(`${API_URI}/activity/myActivity`,
                {params:{id:userId}});
            setMyActivityHour(response.data);
        } catch (err) {console.error(err);}
    };


    const fetchPostMyActivityTime = async () => {
        try {
            const response = await axios(`${API_URI}/activity/my`,
                {params:{id:userId}});
            setActivityMy(Object.keys(response.data).length)
        } catch (err) {console.error(err);}
    };



    useEffect(()=> {
        fetchPost();
    }, [0])

    useEffect(()=> {
        fetchPostActivityMy();
    }, [0])

    useEffect(()=> {
        fetchPostMyActivityTime();
    }, [0])


    return (
        <div className="wrapper_activity">

            <section className="activity">

                <div className="column" style={{position:"relative"}}>
                    <img className="skiboy_img" src={skiboy} alt="image"/>
                    <div className="activity_image_left">
                        <h2>Welcome {user?.firstName}</h2>
                        <p>Start A New Activity And Improve</p>
                        <p>Your Result</p>
                        <Link to="/activities">
                        <button>
                            get Started
                        </button>
                        </Link>
                    </div>
                </div>

                <div className="column right_slice">
                    <h2>2nd Content Area</h2><br/>
                    <div className="dashboard_right_slice">
                        <div>
                            <img src={completed} alt="completed"/>
                            <span>{activityMy}</span>
                            <span>Completed</span>
                        </div>
                        <div>
                            <img src={completed_other} alt="completed"/>
                            <span>{activityMy}</span>
                            <span>Completed</span>
                        </div>
                        <div>
                            <img src={activity_minutes} alt="completed"/>
                            <span>{myActivityHour}H</span>
                            <span>Activty Minutes</span>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default ActivatesStatistic;