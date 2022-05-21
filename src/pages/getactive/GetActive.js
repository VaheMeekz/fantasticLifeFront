// styles
import "./GetActive.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import skigirl from "../../images/dahuk.svg"
import runninggirl from "../../images/rungirl.svg"
import amnfootball from "../../images/usafootball.svg"

const GetActive = () => {
    return (
        <div className="get_active_section">
                <Navbar/>
            <div>
                <div className="get_active_text">
                    <h3>Let's Get Active</h3>
                    <h5>Lorem Ipsum Lorem Ipsum Lorem Ipsum </h5>
                </div>

                <div className="get_active_images">
                    <div className="image_one">
                        <div>
                            <h3>Plan An Activity</h3>
                            <p>Search And Join An Activity With People In</p>
                            <p>Your Community.</p>
                        </div>

                        <img src={skigirl} alt="image"/>

                    </div>
                    <div className="image_two">
                        <div>
                            <h3>Plan An Activity</h3>
                            <p>Search And Join An Activity With People</p>
                            <p>In Your Community.</p>
                        </div>
                        <img src={runninggirl} alt="image"/>
                       <p>Search Activities Around Me</p>
                    </div>
                    <div className="image_three">
                        <div>
                            <h3>Plan An Activity</h3>
                            <p>Search And Join An Activity With People In</p>
                            <p>Your Community.</p>
                        </div>
                        <img src={amnfootball} alt="image"/>
                       <p>Build  Your Team</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetActive;