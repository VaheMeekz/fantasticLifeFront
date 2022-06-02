// styles
import "./SignUp.scss"


import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import MaterialUiPhoneNumber from "material-ui-phone-number";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {goSignUp} from "../../redux/actions/authAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

// custom imports


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const SignUp = () => {
    const dispatch = useDispatch()

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [number, setNumber] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    // const [openwhatsapp,setOpenwhatsapp] = useState(false)
    // const [openmail,setOpenMail] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        number: '',
        type: '',
        email: ''
    })


    const onChangeHandlerEmail = event => {
        data[event.target.name] = event.target.value;
        data.type = "2"
        setData(data)
    }

    const onChangeNumber = e => {
        e.preventDefault()
        setNumber(e.target.value)
    }

    const handleSubmitNumber = (e) => {
        e.preventDefault()
        // if (number !== "null") {
        //     setError(true)
        //     setTimeout(() => {
        //         setError(false)
        //     }, 3000)
        // } else {
            dispatch(goSignUp({
                number,
                type:"1",
                email:""
            }))
        // }

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
                            <Box sx={{bgcolor: 'background.paper', width: 500}}>
                                <AppBar position="static">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="fullWidth"
                                        aria-label="full width tabs example"
                                    >
                                        <Tab label="sign up with whatsapp" {...a11yProps(0)} />
                                        <Tab label="sign up with Mail" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabPanel value={value} index={0} dir={theme.direction}>
                                        <form onSubmit={handleSubmitNumber} onChange={onChangeNumber}>

                                            <ReactPhoneInput
                                                name="number"
                                                defaultCountry="no"
                                                inputStyle={{
                                                    borderRadius: "3px",
                                                    height: "44px",
                                                    width: "100%"
                                                }}
                                                copyNumbersOnly={false}
                                                enableSearch={true}
                                                disableSearchIcon={true}
                                                excludeCountries={["us", "ca"]}
                                            />
                                            <br/>
                                            <div className="form-group">
                                                <button type="submit">SIGN UP</button>
                                            </div>
                                            <div className="create-aacount">
                                                Do You Have An Account?
                                                <Link to="/login" className="text-underline sign-up-form-btn">Sign
                                                    In</Link>
                                            </div>
                                        </form>
                                    </TabPanel>

                                    <TabPanel value={value} index={1} dir={theme.direction}>
                                        <form onChange={onChangeHandlerEmail} onSubmit={signUpHandler}>
                                            <input name="type" defaultValue="2" value='2' type="hidden"/>
                                            <label htmlFor="">Your Email</label>
                                            <input className="form-control mt-2" name="email" type="email" required/>
                                            <br/>
                                            <button className="email_signup_button" type="submit">Sign Up</button>
                                        </form>
                                    </TabPanel>
                                </SwipeableViews>
                            </Box>


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