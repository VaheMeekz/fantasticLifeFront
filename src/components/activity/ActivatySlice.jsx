// styes
import "./ActivityitySlice.scss"

import React from 'react';

// custom impots
import red_clock from "../../images/red_clock.svg"
import ball from "../../images/boal.svg"
import abela from "../../images/abela.svg"
import map from "../../images/miniSvg.svg"


const ActivatySlice = () => {

    return (
        <div>
            <div className="container p-5">
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-4">
                    {/*1*/}
                                <div className="col col-xl-4 col-md-12 col-sm-12">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <div className="my-2 text-center">
                                                <div className="d-flex justify-content-end card_activity_gaping">
                                                    <img src={red_clock} alt="clock"/>
                                                    <span>6 Days</span>
                                                    <span>5 Hours</span>
                                                </div>

                                            </div>
                                            <div className="info_section_ball d-flex mb-3">
                                                <img src={ball} alt="ball"/>
                                                <div>
                                                    <h2 className="ball_text role">
                                                        Saturday Morning Hike In Kicking
                                                        Horse
                                                    </h2>
                                                    <p className="ball_text_paragraph ">Saturday Morning Hike In Kicking
                                                        Horse
                                                        Park Saturday Morning Hike In Kicking
                                                        Horse Park</p>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="d-flex organization_info">
                                                    <img className="org_img" src={abela} alt="iamge"/>
                                                    <span>Name Of Organizer</span>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="d-flex activity_date_slice">
                                                    <div className="activity_date">
                                                        <span>Dec</span>
                                                        <span>24</span>
                                                    </div>

                                                    <div className="activity_date_hour">
                                                        <span>Monday</span>
                                                        <span>08.00 Pm</span>
                                                    </div>
                                                    <div className="d-flex activity_date_km_min">
                                                        <span>6.30 Km </span>
                                                        <span>27 min</span>
                                                        <img src={map} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                </div>
            </div>


        </div>
    );
};

export default ActivatySlice;