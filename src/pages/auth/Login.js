// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import {Box} from "@mui/material";
// import ReactPhoneInput from "react-phone-input-2";
import {Link, useNavigate} from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import {goLogin, goSendCode, goSignUp} from "../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";

// custom imports


const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [userData,setUserData] = useState()
    const loginData = useSelector(state => state.authReducer.loginData)

    if(!loginData.length == 0 && (loginData.lastName == null || loginData.firstName == null)) {
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
                            <h1>Sign In</h1>

                            <form className="login_form_media" onChange={onChangeHandler} onSubmit={sendCodeHandler}>
                                <label htmlFor="">your Email</label>
                                <input required name="email" className="form-control" type="email"/>

                                <label htmlFor="">password</label>
                                <input name="password" required  className="form-control" type="password"/><br/>
                                <button type="submit">Send</button>
                            </form>
                                <br/>
                            <div className="forgot-pass-form-slice">
                                <h1>Forgot Password?</h1>
                            </div>
                            <div className="register_slice">
                                <Link to="/signup" className="forgot-pass-link">Register</Link>
                            </div>
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