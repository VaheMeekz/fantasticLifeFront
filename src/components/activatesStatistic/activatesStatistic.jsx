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


const ActivatesStatistic = () => {

    const [user, setUser] = useState();

    const fetchPost = async () => {
        try {
            const response = await axios(`${API_URI}/users/single`,
                {params:{id:userId}});
            setUser(response.data);
        } catch (err) {console.error(err);}
    };
    useEffect(()=> {
        fetchPost();
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
                        <button>
                            get Started
                        </button>
                    </div>
                </div>

                <div className="column right_slice">
                    <h2>2nd Content Area</h2><br/>
                    <div className="dashboard_right_slice">
                        <div>
                            <img src={completed} alt="completed"/>
                            <span>15</span>
                            <span>Completed</span>
                        </div>
                        <div>
                            <img src={completed_other} alt="completed"/>
                            <span>20</span>
                            <span>Completed</span>
                        </div>
                        <div>
                            <img src={activity_minutes} alt="completed"/>
                            <span>2H 15M</span>
                            <span>Activty Minutes</span>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default ActivatesStatistic;