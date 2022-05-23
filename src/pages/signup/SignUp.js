// styles
import "./SignUp.scss"


import React,{useState} from 'react';
import {Box} from "@mui/material";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {goSignUp} from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

// custom imports



const SignUp = () => {
    const dispatch = useDispatch()
    const [openwhatsapp,setOpenwhatsapp] = useState(false)
    const [openmail,setOpenMail] = useState(false)

    const [error, setError] = useState(false)
    const [data, setData] = useState({
        number: '',
        type:'',
        email:''
    })

    const openwhatsappHandler = () => {
        setOpenwhatsapp(!openwhatsapp)
    }

    const openmailHandler = () => {
        setOpenMail(!openmail)
    }

    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        console.log(data,'data')
        setData(data)
    }

    const signUpHandler = e => {
        e.preventDefault()
        if (!data.type) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goSignUp(data))
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


                            {/*<form onChange={onChangeHandler} onSubmit={signUpHandler}>*/}
                            {/*    <div className="form-check">*/}
                            {/*        <input className="form-check-input" type="radio"*/}
                            {/*               id="exampleRadios1" value="option1" checked />*/}
                            {/*            <label onClick={openwhatsappHandler} className="form-check-label" htmlFor="exampleRadios1">*/}
                            {/*                signup with whatsapp*/}
                            {/*            </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="form-check">*/}
                            {/*        <input className="form-check-input" type="radio"*/}
                            {/*               id="exampleRadios2" value="option2" />*/}
                            {/*            <label onClick={openmailHandler} className="form-check-label" htmlFor="exampleRadios2">*/}
                            {/*                signup with email*/}
                            {/*            </label>*/}
                            {/*    </div>*/}

                            {/*    {openwhatsapp && <ReactPhoneInput name="number" defaultCountry="no" excludeCountries={["us", "ca"]} />}*/}
                            {/*    {openmail && <input name="mail" type="mail" placeholder="your mail address"/>}*/}
                            {/*    <div className="form-group remember-forgot">*/}
                            {/*        <div className="remember">*/}
                            {/*            <input type="checkbox" id="yes"  value="yes"*/}
                            {/*                   className="form-checkbox" />*/}
                            {/*                <label htmlFor="yes">Remeber me</label>*/}
                            {/*        </div>*/}
                            {/*        <div className="forgot">*/}
                            {/*            <a href="#" className="forgot-pass-link">Forgot Password?</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="form-group">*/}
                            {/*        <button type="submit">SIGN UP</button>*/}
                            {/*    </div>*/}
                            {/*    <div className="create-aacount">*/}
                            {/*        Do You Have An Account?   <a href="#" className="text-underline sign-up-form-btn">  Sign In</a>*/}
                            {/*    </div>*/}
                            {/*</form>*/}

                            <form onChange={onChangeHandler} onSubmit={signUpHandler}>
                                {/*<input name="number" type="text"/>*/}
                                <label htmlFor="">type</label>
                                <input name="type"  type="text"/>
                                <label htmlFor="">Email</label>
                                <input name="email"  type="text"/>
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

export default SignUp;