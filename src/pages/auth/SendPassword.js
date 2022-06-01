// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Box} from "@mui/material";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useParams, useNavigate, Link} from "react-router-dom";
import {enterPassword, goSendCode, goSignUp} from "../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {authReducer} from "../../redux/reducers/authReducer";
import Swal from "sweetalert2";

// custom imports


const SendPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams();
    const enter_password_data = useSelector(state => state.authReducer.enterPassword)
    const [userData,setUserData] = useState()

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email:'',
        password:''
    })



    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        data.id = localStorage.getItem('sendRegisterData')
        setData(data)
    }

    const sendCodeHandlerPassword = e => {
        e.preventDefault()

        if(data.password.trim().length < 8) {

        }

        if (!data.email.trim() || !data.password.trim() || data.password.trim().length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password of minimum length 8 characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }else {
            dispatch(enterPassword(data))
        }
    }

    if(!enter_password_data == 0) {
        navigate('/login')
    }


    return (
        <div className="signup_section">
            <div className="wrapper">
                <div className="left">
                    <div className="left-inner">

                        <div className="sign-in-form active">
                            <h1>Sign Up</h1>
                            <br/>
                            <form onChange={onChangeHandler} onSubmit={sendCodeHandlerPassword}>
                                <label htmlFor="">Your mail address</label>
                                <input name="email" type="email" required/>

                                <label htmlFor="">Enter your password</label>
                                <input name="password" type="password" required/>
                                <br/><br/>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                        <br/>
                        <span>Do You Have An Account? <Link to="/login">Sign In</Link></span>

                        <div className="forgot-pass-form">
                            <h1>Forgot Password?</h1>
                        </div>
                    </div>
                </div>
                <div className="right"></div>

            </div>
            <div className="effect-wrap">
                <div className="effect effect-3">

                </div>
            </div>

        </div>
    );
};

export default SendPassword;