// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Box} from "@mui/material";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useParams,useNavigate} from "react-router-dom";
import {enterPassword, goSendCode, goSignUp} from "../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {authReducer} from "../../redux/reducers/authReducer";

// custom imports


const SendPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams();
    const enter_password_data = useSelector(state => state.authReducer.enterPassword)
    console.log(enter_password_data,'enter_password_data')
    const [userData,setUserData] = useState()

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email:'',
        password:''
    })



    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        console.log(data,'data9999999999999999999')
        data.id = id
        setData(data)
    }

    const sendCodeHandlerPassword = e => {
        e.preventDefault()
        if (!data.email.trim() || !data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
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
                            <div className="social-buttons">
                                <a href="#" title="Sign in via Google">
                                    <i className="fa-brands fa-google"></i>
                                </a>

                                <a href="#" title="Sign in via Facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" title="Sign in via Linkedin">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>

                            <div className="seperator" >
                                <span>or</span>
                            </div>


                            <form onChange={onChangeHandler} onSubmit={sendCodeHandlerPassword}>
                                <label htmlFor="">Your mail address</label>
                                <input name="email" type="email" required/>

                                <label htmlFor="">Enter your password</label>
                                <input name="password" type="password" required/>
                                <br/><br/>
                                <button type="submit">Send</button>
                            </form>
                        </div>

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