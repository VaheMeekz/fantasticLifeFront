import React, {useState} from 'react';
import "../../pages/Invitations/Invitations.scss"
import sendInvation from "../../images/sentInvation.svg";
import requestInvation from "../../images/requestInvation.svg";

const ActivityComponent = ({myInvitesActive, sendedActive}) => {
    const [show, setShow] = useState(true)
    const showSend = () => {
        setShow(true)
    }
    const showMy = () => {
        setShow(false)
    }
    return (
        <div>
            <div className="container-fluid">
                <h2>Activity Invites</h2>
                <div className="row">
                    <div className={show ? "col-xl-2 col-md-6 col-sm-12 active_card" : "col-xl-2 col-md-6 col-sm-12"}
                         onClick={showSend}>
                        <div className="card_card card_invitations">
                            <div className="card-body">
                                <div className="text-muted">
                                    <div className="p-2  d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img src={sendInvation} alt="send"/>
                                    </div>
                                    <h5 className="text-center">{sendedActive?.length}</h5>
                                    <h5 className="text-center">Send</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={!show ? "col-xl-2 col-md-6 col-sm-12 active_card" : "col-xl-2 col-md-6 col-sm-12"}
                         onClick={showMy}>
                        <div className="card_card card_invitations">
                            <div className="card-body">
                                <div className=" text-muted">
                                    <div className="p-2 d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <img src={requestInvation} alt="request"/>
                                    </div>
                                    <h5 className="text-center">{myInvitesActive?.length}</h5>
                                    <h5 className="text-center">Request</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                show ? "active send" : "active my"
            }
        </div>
    );
};

export default ActivityComponent;