import React, {useEffect, useState} from 'react';
import "./userDetail.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailUserAC, detailUserHourAC} from "../../redux/actions/authAction";
import Skeleton from "@mui/material/Skeleton";
import {createConversationAc} from "../../redux/actions/chatAction";
import {userId} from "../../utils/keys";
import Navbar from "../../components/navbar/Navbar";

const UserDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state?.authReducer.otherUser)
    const loading = useSelector(state => state?.authReducer.otherLoading)
    const time = useSelector(state => state?.authReducer.detailHowrs)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    useEffect(() => {
        dispatch(detailUserAC(id))
        dispatch(detailUserHourAC(id))
    }, [])

    const handlerCancel = () => {
        setOpen(false)
        setMessage("")
    }

    const handlerSendMessage = () => {
        if (message !== "") {
            dispatch(createConversationAc(userId, id, message))
            setOpen(false)
            setMessage("")
        }
    }
    return (
        <div>
            <Navbar/>

            <div className="detailBox">

                <h4>User Profile</h4>
                <div className="infoBox">
                    {loading ? <Skeleton variant="circular" width={40} height={40}/> :
                        <div><img src={user.image} alt="avatar"/></div>}
                    {loading ? (<div>
                        <Skeleton variant="rectangular" width={210} height={118}/>
                        <Skeleton variant="rectangular" width={210} height={118}/>
                        <Skeleton variant="rectangular" width={210} height={118}/>
                    </div>) : (<div>
                        <small>First name, Last name</small>
                        <h2>{user.firstName} {"  "} {user.lastName}</h2>
                        <p>{user.email}</p>
                        <p>{user.whatsapp}</p>
                    </div>)

                    }
                </div>
                <div>
                    <h5>Personal Information</h5>
                    <hr/>
                    <p>User activity hours - {time !== null && time} hours</p>
                </div>
                <div>
                    <button className={open ? "cancelBtn" : "messageButton"}
                            onClick={() => open ? handlerCancel() : setOpen(true)}>
                        {open ? "Cancel" : "Send Message"}
                    </button>
                    {open ? (<div>
                            <textarea cols="30" rows="10" className={"messageTextarea"} value={message}
                                      onChange={e => setMessage(e.target.value)}/><br/>
                        <button className="messageButton" onClick={handlerSendMessage}>Send</button>
                    </div>) : null}
                </div>
            </div>
        </div>);
};

export default UserDetail;