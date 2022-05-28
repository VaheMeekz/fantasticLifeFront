import React from 'react';
import "./invites.scss";
import {useDispatch} from "react-redux";
import {inviteAcceptAC, inviteRejectAC} from "../../redux/actions/inviteAction";
import {userId} from "../../utils/keys";


const InvitesRequests = ({items}) => {
    const dispatch = useDispatch()
    const handlerAccept = (id) => {
        dispatch(inviteAcceptAC(userId, id))
    }

    const handlerReject = (id) => {
        dispatch(inviteRejectAC(id))
    }
    return (
        <div>
            <h4>Your Invites</h4>
            <div className="invitesBox">
                {
                    items?.map(i => {
                        return (
                            <div className="invite">
                                <div className="imageBox">
                                    <img src={i.Team?.image} alt="teamImage"/>
                                </div>
                                <div className="infoBox">
                                    <h5>{i.Team.name}</h5>
                                    <div>
                                        <p>{i.message}</p>
                                        <p>{i.Team?.Sport?.sportName}</p>
                                        <p>{i.createdAt.substr(0, 10)}</p>
                                    </div>
                                    <div>
                                        <button className="rejectBtn" onClick={() => handlerReject(i.id)}>Reject
                                        </button>
                                        <button className="acceptBtn" onClick={() => handlerAccept(i.Team.id)}>Accept
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InvitesRequests;