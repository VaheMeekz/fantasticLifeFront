// styles

import "./activatesStatistic.scss"

import React from 'react';

// custom imports

import skiboy from "../../images/skiboy.svg"
import completed from "../../images/complited.png"
import completed_other from "../../images/check_done.svg"
import activity_minutes from "../../images/activity_minutes.svg"

const ActivatesStatistic = () => {
    return (
        <div className="wrapper_activity">

            <section className="activity">

                <div className="column" style={{position:"relative"}}>
                    <img className="skiboy_img" src={skiboy} alt="image"/>
                    <div className="activity_image_left">
                        <h2>Welcome Back!</h2>
                        <p>Start A New Activity And Improve</p>
                        <p>Your Result</p>
                        <button>
                            get Started
                        </button>
                    </div>
                </div>

                <div className="column right_slice">
                    <h2>2nd Content Area</h2>
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