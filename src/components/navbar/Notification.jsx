// styles
import "./navbar.scss"

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showInviteNotifications} from "../../redux/actions/inviteAction";
import {useNavigate} from "react-router-dom";

const Notification = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const show = useSelector(state => state.InviteReducer.showNotification)

    setTimeout(()=>{
        dispatch(showInviteNotifications(false))
    },50000)
    return (
        <div className="notification_section">
            <i className="fa-solid fa-bell" onClick={()=>navigate('/invitations')}/>
            {
                show ? <small></small> : null
            }

        </div>
    );
};

export default Notification;