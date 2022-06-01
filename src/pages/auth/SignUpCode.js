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

    console.log(sendRegisterData,'sendRegisterData')


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

    localStorage.setItem('sendRegisterData',sendRegisterData.id)


        if(sendRegisterData.length !== 0) {
            navigate(`/sendPassword`);
        }





    return (
        <div className="signup_section">
            <div className="wrapper">
                <div className="left_left">
                    <div className="left-inner_left">

                        <div className="sign-in-form_left active">
                            <h1>Sign Up</h1>
                            <p className="signup_code_text">A code has been sent to your email address</p>
                            <br/>


                            <form className="form_signCode" onChange={onChangeHandler} onSubmit={sendCodeHandler}>
                                {/*<input name="number" type="text"/>*/}
                                <label htmlFor="">Code</label>
                                <input required name="code" className="code_send_input"  type="text"/><br/>
                                <button className="send_code_btn" type="submit">Send</button>
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