import "./Activities.scss"
import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import create_activity from "../../images/create_activity.svg"
import FormActivity from "../../components/forms/FormActivity";


const CreateActivities = () => {


    return (
        <div className="activity_section">
            <Navbar/>

            <div className="container-fluid">
                <div className="row activity_section_block d-flex justify-content-between">
                    <div className="col-xl-4 col-md-12 col-sm-12">
                        <div className="card_activities card_teams">
                            <div className="card-body card_activities_body_one">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <div>
                                            <img src={create_activity} alt="image"/>
                                        </div>
                                        <p className="text_activity_long_review text-truncate mb-0">
                                            Create An Activity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="card card_team">
                            <div className="card-body">
                                <div className="p-1 d-flex text-muted input_slice_absolute">
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

            <div className="container_form container-fluid px-5">
                <FormActivity />
            </div>


        </div>
    );
};

export default CreateActivities;