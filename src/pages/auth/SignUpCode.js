// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import {Box} from "@mui/material";
// import MaterialUiPhoneNumber from "material-ui-phone-number";
// import ReactPhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import {goSendCode, goSignUp} from "../../redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";

// custom imports


const SignUpCode = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [userData,setUserData] = useState()
    const sendRegisterData = useSelector(state => state.authReducer.sendCode)


    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email:'',
        number: '',
        type:'',
        code:''
    })

    let data_user = sessionStorage.getItem('dataUser')
    let parse_data = JSON.parse(data_user)


    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        data.type = parse_data.type
        data.email = parse_data.email
        setData(data)
    }

    const sendCodeHandler = e => {
        e.preventDefault()
        if (!data.code) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSendCode(data))
        }
    }

    if(!sendRegisterData == 0) {
        navigate(`/sendPassword/${sendRegisterData.id}`);
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
                                <label htmlFor="">Code</label>
                                <input name="code"  type="text"/>

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

export default SignUpCode;