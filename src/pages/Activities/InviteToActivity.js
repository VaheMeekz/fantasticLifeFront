// styles
import "./SelectActivities.scss"

import React from 'react';

// custom styles
import Navbar from "../../components/navbar/Navbar";
import inviteToActivity from "../../images/inviteToActivity.svg";
import {Link} from "react-router-dom";
// import creteImage from "../../images/createImage.svg";
import InviteToActivityTabs from "../../components/inviteTabs/inviteToActivityTabs";


const InviteToActivity = () => {
    return (
        <div className="invite_to_activity">
            <Navbar /><br/>
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_card card_team card_invite_to_activity">
                            <div className="card-body">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden invite_to_activity_img_block">
                                        <img className="team_slice_image" src={inviteToActivity} alt="team"/>
                                        <p className="text-truncate mb-0 invite_title">
                                            Invite And Review Interests
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_card card_team">

                                <div className="p-4 d-flex text-muted">
                                    <Link to="/activityMap">
                                    <button className="invite_to_activity_btn">Search For An Activity</button>
                                    </Link>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <InviteToActivityTabs />
        </div>
    );
};

export default InviteToActivity;