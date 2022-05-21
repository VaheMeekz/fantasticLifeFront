// styles
import "./Invitations.scss"

import React from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import teamImg from "../../images/teamimage.svg"
import dumbbells from "../../images/dumbbells.svg";
import sendInvation from "../../images/sentInvation.svg"
import requestInvation from "../../images/requestInvation.svg"
import InvitationsTable from "../../components/tables/IivitationsTable";


const Invitations = () => {

    const arr = [
        {id:1,teamName:"test",members:"1"},
        {id:2,teamName:"test",members:"9"},
        {id:3,teamName:"test",members:"80"},
        {id:4,teamName:"test",members:"18"},
        {id:5,teamName:"test",members:"5"},
        {id:6,teamName:"test",members:"3"},
        {id:7,teamName:"test",members:"10"},
        {id:8,teamName:"test",members:"9"},
        {id:9,teamName:"test",members:"8"},

    ]
    return (
        <>
            <Navbar/>
        <div className="invitations_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_card card_team">
                            <div className="card-body">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img className="team_slice_image" src={teamImg} alt="team"/>
                                        <p className="text-truncate mb-0 team_title">
                                            Invitations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-md-6 col-sm-12">
                        <div className="card_card card_team">
                            <div className="card-body">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <div className="d-flex teams_activities">
                                            <h4 className="p-2 mt-1">Teams</h4>
                                            <h4 className="p-2 mt-1">Activities</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                   <div  className="col-xl-2 col-md-6 col-sm-12">
                     <div className="card_card card_invitations">
                       <div className="card-body">
                         <div className="text-muted">
                          <div className="p-2  d-flex justify-content-around flex-grow-1 overflow-hidden">
                              <img src={sendInvation} alt="send"/>
                          </div>
                             <h5 className="text-center">15</h5>
                             <h5 className="text-center">Send</h5>
                         </div>
                       </div>
                     </div>
                   </div>

                    <div  className="col-xl-2 col-md-6 col-sm-12">
                        <div className="card_card card_invitations">
                            <div className="card-body">
                                <div className=" text-muted">
                                    <div className="p-2 d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img src={requestInvation} alt="request"/>
                                    </div>
                                    <h5 className="text-center">3</h5>
                                    <h5 className="text-center">Request</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <InvitationsTable />
            </div>
        </div>
        </>
    );
};

export default Invitations;