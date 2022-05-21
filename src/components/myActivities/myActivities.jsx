// styles
import "./myActivities.scss"

import React from 'react';

// custom imports
import miniLocation from "../../images/miniSvg.svg"
import bool from "../../images/boal.svg"
import secret from "../../images/secret.svg"
import user from "../../images/user.svg"
import BasicTabs from "../../tabs/TabPanel";

const MyActivities = () => {
    return (
        <div className="my_activities_slice">
            <main>
                <section className="card-row">
                    <div>
                        <h5>Up Coming Activity</h5>
                    <article className="card_activities">
                            <div className="coming_hours">
                                <i className="fa-solid fa-arrow-right-long"
                                style={{color:"#03C83E"}}></i>
                                <span className="up_coming">Up Coming</span>
                                <i className="fa-solid fa-clock"></i>
                                <span className="up_hours">6 Days</span>
                                <span className="up_hours">5Hours</span>
                            </div>
                        <br/>

                            <div className="saturday">
                                <p className="saturday_text">Saturday Morning Hike In Kicking Horse Park</p>
                            </div>
                        <br/>
                        <div className="mini_location">
                            <span>27 Min</span>
                            <span>6.30 Km</span>
                            <img src={miniLocation} alt="image"/>
                        </div>
                        <br/>

                        <div className="bool_slice">
                            <div className="bool_slice_image">
                                <img src={bool} alt="image"/>
                                <div className="bool_text">
                                    <span>Dec</span>
                                    <span className="bool_text_day">24</span>
                                </div>
                            </div>
                            <div className="boll_day">
                                <span>
                                    Monday
                                </span>
                                <span className="boll_day_hour">
                                    08.00 pm
                                </span>
                            </div>

                            <div className="secret_slice">
                                <img src={secret} alt="secret"/>
                                <span>Private</span>
                            </div>

                            <div className="user_slice">
                                <img src={user} alt="image"/>
                                <span>5</span>
                            </div>
                        </div>

                    </article>
                    </div>
                    <div>
                        <h5>Up Coming Activity <span>9 Received Requests</span></h5>
                        <article className="card_activities">
                            <BasicTabs />
                        </article>
                    </div>


                    <div className="activity_two">
                        <h5>Up Coming Activity</h5>
                        <article className="card_activities card_activities_two">
                            <h3>Saturday Morning Hike In Kicking Horse Park</h3>
                            <br/>
                            <div className="card_active_last">
                                <div className="bool_slice">
                                    <div className="bool_slice_image">
                                        <img src={bool} alt="image"/>
                                        <div className="bool_text">
                                            <span>Dec</span>
                                            <span className="bool_text_day">24</span>
                                        </div>
                                    </div>
                                    <div className="boll_day">
                                <span>
                                    Monday
                                </span>
                                        <span className="boll_day_hour">
                                    08.00 pm
                                </span>
                                    </div>

                                    <div className="secret_slice">
                                        <img src={secret} alt="secret"/>
                                        <span>Private</span>
                                    </div>

                                    <div className="user_slice">
                                        <img src={user} alt="image"/>
                                        <span>5</span>
                                    </div>
                                </div>
                                <div className="bool_slice">
                                    <div className="bool_slice_image">
                                        <img src={bool} alt="image"/>
                                        <div className="bool_text">
                                            <span>Dec</span>
                                            <span className="bool_text_day">24</span>
                                        </div>
                                    </div>
                                    <div className="boll_day">
                                <span>
                                    Monday
                                </span>
                                        <span className="boll_day_hour">
                                    08.00 pm
                                </span>
                                    </div>

                                    <div className="secret_slice">
                                        <img src={secret} alt="secret"/>
                                        <span>Private</span>
                                    </div>

                                    <div className="user_slice">
                                        <img src={user} alt="image"/>
                                        <span>5</span>
                                    </div>
                                </div>

                            </div>
                        </article>
                    </div>
                </section>


            </main>

        </div>
    );
};

export default MyActivities;