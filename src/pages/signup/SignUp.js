// styles
import "./SignUp.scss"


import React from 'react';
import {Box} from "@mui/material";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// custom imports



const SignUp = () => {
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

                            <form action="">
                                <ReactPhoneInput defaultCountry="no" excludeCountries={["us", "ca"]} />
                                <div className="form-group remember-forgot">
                                    <div className="remember">
                                        <input type="checkbox" id="yes"  value="yes"
                                               className="form-checkbox" />
                                            <label htmlFor="yes">Remeber me</label>
                                    </div>
                                    <div className="forgot">
                                        <a href="javascript:;" className="forgot-pass-link">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button>SIGN UP</button>
                                </div>
                                <div className="create-aacount">
                                    Do You Have An Account?   <a href="#" className="text-underline sign-up-form-btn">  Sign In</a>
                                </div>
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