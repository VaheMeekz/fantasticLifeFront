// styles
import "./Invitations.scss"

import React, {useEffect, useState} from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import teamImg from "../../images/teamimage.svg"
import {useDispatch, useSelector} from "react-redux";
import {userId} from "../../utils/keys";
import {
    getMyActivityInvites,
    getMyInvites,
    mySendActivityInvites,
    mySendInvites
} from "../../redux/actions/inviteAction";
import TeamComponent from "../../components/invitesComponent/TeamComponent";
import ActivityComponent from "../../components/invitesComponent/ActivityComponent";


const Invitations = () => {
    const id = userId
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    const loading = useSelector(state => state.InviteReducer.loading)
    //team
    const myInvitesTeam = useSelector(state => state.InviteReducer.invites)
    const sendedTeam = useSelector(state => state.InviteReducer.sended)
    //activity
    const myInvitesActive = useSelector(state => state.InviteReducer.activityInvites)
    const sendedActive = useSelector(state => state.InviteReducer.activitySend)

    useEffect(() => {
        dispatch(mySendInvites(id))
        dispatch(getMyInvites(id))
        dispatch(mySendActivityInvites(id))
        dispatch(getMyActivityInvites(id))
    }, [])

    const showActivity = () => {
        setShow(false)
    }

    const shotTeam = () => {
        setShow(true)
    }
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
                                                <h4 className={show ? "activeTab p-2 mt-1" : "p-2 mt-1"}
                                                    onClick={shotTeam}>Teams</h4>
                                                <h4 className={!show ? "activeTab p-2 mt-1" : " p-2 mt-1"}
                                                    onClick={showActivity}>Activities</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    !loading && show ?
                        <TeamComponent myInvitesTeam={myInvitesTeam} sendedTeam={sendedTeam}/>
                        :
                        <ActivityComponent myInvitesActive={myInvitesActive} sendedActive={sendedActive}/>
                }
            </div>
        </>
    );
};

export default Invitations;