// styles
import "./SignUp.scss"


import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Box} from "@mui/material";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {goSendCode, goSignUp} from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

// custom imports



const SignUpCode = () => {
    // console.log(email,type,'Hakobik')
    const dispatch = useDispatch()
    const [openwhatsapp,setOpenwhatsapp] = useState(false)
    const [openmail,setOpenMail] = useState(false)
    const [userData,setUserData] = useState()
    console.log(userData,'Arjuk')

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        email:'',
        number: '',
        type:'',
        code:''
    })

    let data_user = sessionStorage.getItem('dataUser')
    let parse_data = JSON.parse(data_user)
    console.log(parse_data,'parse_data')


    const openwhatsappHandler = () => {
        setOpenwhatsapp(!openwhatsapp)
    }

    const openmailHandler = () => {
        setOpenMail(!openmail)
    }

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        console.log(data,'data9999999999999999999')
        setData(data)
    }

    const sendCodeHandler = e => {
        e.preventDefault()
        if (data.code) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSendCode(data))
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
                                <label htmlFor="">Code</label>
                                <input name="type"  type="code"/>


                                <input name="email" value={parse_data.email} defaultValue={parse_data.email} type="hidden"/>
                                <input name="type" value={parse_data.type}  defaultValue={parse_data.type} type="hidden"/>
                                <input name="number" value={parse_data.number}  defaultValue={parse_data.number} type="hidden"/>
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