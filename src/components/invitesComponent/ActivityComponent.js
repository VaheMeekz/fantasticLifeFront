import React, {useState} from 'react';
import "../../pages/Invitations/Invitations.scss"
import sendInvation from "../../images/sentInvation.svg";
import requestInvation from "../../images/requestInvation.svg";
import {useDispatch} from "react-redux";
import {activityAcceptC, activityRejectAC} from "../../redux/actions/inviteAction";
import {userId} from "../../utils/keys";
import {useNavigate} from "react-router-dom";

const ActivityComponent = ({myInvitesActive, sendedActive}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    const showSend = () => {
        setShow(true)
    }
    const showMy = () => {
        setShow(false)
    }

    const handlerAccept = (sender, activity) => {
        dispatch(activityAcceptC(sender, activity, userId))
    }

    const handlerReject = (sender, activity) => {
        dispatch(activityRejectAC(sender, activity, userId))
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
                show ? (
                    <div style={{
                        marginTop: "10px"
                    }}>
                        {
                            sendedActive?.map(i => {
                                return (
                                    <div key={i.id} className="inviteBox" onClick={()=>navigate(`/user/${i.Receiver?.id}`)}>
                                        <div className="infoBox">
                                            <div>
                                                <img src={i.Receiver?.image} alt="avatar" style={{
                                                    width: "50px",
                                                    height: "50px"
                                                }}/>
                                            </div>
                                            <div className="nameBox">
                                                <h6>{i.Receiver?.firstName}</h6>
                                                <p>{i.message}</p>
                                                <p>{i.createdAt.substr(0, 10)}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div style={{
                        marginTop: "10px"
                    }} >
                        {
                            myInvitesActive?.map(i => {
                                return (
                                    <div key={i.id} className="inviteBox">
                                        <div className="infoBox">
                                            <div>
                                                <img src={i.Activity?.Creator?.image} alt="avatar" style={{
                                                    width: "50px",
                                                    height: "50px"
                                                }}/>
                                            </div>
                                            <div className="nameBox">
                                                <h6>{i.Activity?.Creator?.firstName}</h6>
                                                <p>{i.message}</p>
                                                <p>{i.createdAt.substr(0, 10)}</p>
                                            </div>
                                        </div>
                                        <div className="buttonsBox">
                                            <button className="reject"
                                                    onClick={() => handlerReject(i.sender_id, i.activity_id)}>Reject
                                            </button>
                                            <button className="accept"
                                                    onClick={() => handlerAccept(i.sender_id, i.activity_id)}>Accept
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ActivityComponent;