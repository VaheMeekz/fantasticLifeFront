import React, {useState} from 'react';
import sendInvation from "../../images/sentInvation.svg";
import requestInvation from "../../images/requestInvation.svg";
import "../../pages/Invitations/Invitations.scss"
import InvitesRequests from "./InvitesRequests";
import SendTeamInvite from "./SendTeamInvite";

const TeamComponent = ({sendedTeam,myInvitesTeam}) => {
    const [show,setShow] = useState(true)
    const showSend = () => {
        setShow(true)
    }
    const showMy = () => {
        setShow(false)
    }

    return (
        <div>
            <h2>Team Invites</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className={show ? "col-xl-2 col-md-6 col-sm-12 active_card" : "col-xl-2 col-md-6 col-sm-12"} onClick={showSend}>
                        <div className="card_card card_invitations ">
                            <div className="card-body">
                                <div className="text-muted">
                                    <div className="p-2  d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img src={sendInvation} alt="send"/>
                                    </div>
                                    <h5 className="text-center">{sendedTeam?.length}</h5>
                                    <h5 className="text-center">Send</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={!show ? "col-xl-2 col-md-6 col-sm-12 active_card" : "col-xl-2 col-md-6 col-sm-12"} onClick={showMy}>
                        <div className="card_card card_invitations">
                            <div className="card-body">
                                <div className=" text-muted">
                                    <div className="p-2 d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img src={requestInvation} alt="request"/>
                                    </div>
                                    <h5 className="text-center">{myInvitesTeam?.length}</h5>
                                    <h5 className="text-center">Request</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                show ? <SendTeamInvite items={sendedTeam}/> : <InvitesRequests items={myInvitesTeam}/>
            }
        </div>
    );
};

export default TeamComponent;