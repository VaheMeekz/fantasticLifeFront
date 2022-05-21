// styles
import "./Activities.scss"

import React from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import teamImg from "../../images/Grand slam-bro.svg"
import create_activity from "../../images/create_activity.svg"
import location from "../../images/location.svg"
import invite_and_review from "../../images/invite_and_review.svg"
import {Link} from "react-router-dom";



const Activities = () => {


    return (
        <div className="activity_section">
            <Navbar/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="card card_team">
                            <div className="card-body">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img className="team_slice_image" src={teamImg} alt="team"/>
                                        <div className="activity_text_slice">
                                        <p className="text-truncate mb-0 team_title">
                                            Create An Activity
                                        </p>
                                        <p className="activity_text">Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="card card_team">
                            <div className="card-body">
                                <div className="p-4 d-flex text-muted input_slice_absolute">
                                    <div className="flex-shrink-0 me-3 align-self-center">
                                    </div>
                                    <input id="Search" type="search" placeholder="Search For An Activity"/>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>

            <div className="container-fluid">
                <h5 className="simple_steps_text">Create An Activity In 3 Simple Steps</h5>
            </div><br/><br/>

            <div className="container-fluid">
                <div className="row">

                    {/*Create An Activity*/}

                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="card_activities card_activaties">
                                        <div className="card-body card_activities_body_one">
                                            <div className="d-flex text-muted">
                                                <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                                    <div>
                                                        <img src={create_activity} alt="image"/>
                                                        <p className="text_activity_long text-truncate mb-0">
                                                            Create An Activity
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    {/*Location*/}
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_activities card_teams">
                            <div className="card-body card_activities_body_two">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <div>
                                            <img src={location} alt="image"/>
                                            <p className="text_activity_smoles text-truncate mb-0">
                                                Location
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Invite And Review Interests*/}
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_activities card_teams">
                            <div className="card-body card_activities_body_three">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <div>
                                            <img src={invite_and_review} alt="image"/>

                                        </div>
                                        <p className="text_activity_long_review text-truncate mb-0">
                                            Invite And Review Interests
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                      <Link to="/createActivity"><h5 className="simple_steps_text lets_go">Lets Go</h5></Link>
                    </div><br/><br/>


                </div>
            </div>

        </div>
    );
};

export default Activities;