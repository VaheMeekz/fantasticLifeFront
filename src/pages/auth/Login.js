// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import {Box} from "@mui/material";
// import MaterialUiPhoneNumber from "material-ui-phone-number";
// import ReactPhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import {goLogin, goSendCode, goSignUp} from "../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";

// custom imports


const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [userData,setUserData] = useState()
    const loginData = useSelector(state => state.authReducer.loginData)

    console.log(loginData,'loginData')
    if(loginData.lastName == null || loginData.firstName == null) {
        navigate('/settings')
    }

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email:'',
        password: '',
    })



    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const sendCodeHandler = e => {
        e.preventDefault()
        if (!data.email.trim() || !data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goLogin(data))
        }
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


                            <form onChange={onChangeHandler} onSubmit={sendCodeHandler}>
                                {/*<input name="number" type="text"/>*/}
                                <label htmlFor="">Email or Phone Number</label>
                                <input name="email" type="email"/>

                                <label htmlFor="">password</label>
                                <input name="password"  type="password"/>

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

export default Login;