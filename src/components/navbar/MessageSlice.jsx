// styles
import "./navbar.scss";
import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {showNotification} from "../../redux/actions/chatAction";
import {useNavigate} from "react-router-dom";


export default function MessageSlice() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const show = useSelector(state => state.chatReducer.message)
    setTimeout(()=>{
        dispatch(showNotification(false))
    },50000)
    return (
        <div className="message_slice">
            <i className="fa-brands fa-facebook-messenger" onClick={()=>navigate('/inbox')}/>
            {
                show ? <small></small> : null
            }

        </div>
    );
}
