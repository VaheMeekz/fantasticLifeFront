// styles
import "./dashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import ActivatesStatistic from "../../components/activatesStatistic/activatesStatistic";
import MyActivities from "../../components/myActivities/myActivities";

// custom imports
import Calendar from "../../components/calendar/calendar"
import {Link, useNavigate} from "react-router-dom";
// import TeamItem from "../../components/teamItem/TeamItem";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import img_test from "../../images/abela.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import dumbl from "../../images/dumbbells.svg"
import weather from "../../images/Partly Cloudy.svg"
import {API_URI, userId} from "../../utils/keys";

const Dashboard = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState();
    const [getActivity,setGetActivity] = useState()
    console.log(getActivity,'getActivity')

    // get single user info
    const fetchPost = async () => {
        try {
            const response = await axios(`${API_URI}/users/single`,
                {params:{id:userId}});
                setUser(response.data);
            console.log(typeof response.data.firstName === 'string' && typeof response.data.lastName === 'string')
            console.log(typeof response.data.firstName,response.data.lastName,"Vazgenchik")
            if(typeof response.data.firstName === 'string' && typeof response.data.lastName === 'string') {
                return "ok"
            } else {
                navigate(`/settings`);
            }
        } catch (err) {console.error(err);}
    };



    // get my activity
    const getMyActivity = async () => {
        try {
            const response = await axios(`${API_URI}/activity/myActivity`,
                {params:{id:userId}});
            setGetActivity(response.data);

        } catch (err) {console.error(err);}
    };

    useEffect(()=> {
        fetchPost();
    }, [0])

    useEffect(()=> {
        getMyActivity();
    }, [0])



    return (
        <>
            <Navbar/>
            <div className="responsive_weather">
                <div className="responsive_weather_and_day">
                    <h5>Today</h5>
                    <h6>Monday - 11 January</h6>
                </div>

                <div className="weather_block">
                    <img src={weather} alt="image"/>
                    <span>15  C*</span>
                </div>
            </div>
        <div className="admin_dashboard">
            <ActivatesStatistic />
            <MyActivities />
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body">
                       <div className="my_teams_slice">
                           <h5>My Teams</h5>
                           <span>5 members</span>
                           <Link to="/teams">See</Link>
                       </div><br/>

                        <div className="team_slice_dashboard">
                            <div className="image_and_members">
                                <img src={img_test} alt="image"/>
                                <div className="team_slice_members">
                                    <span>Team Name</span><br/>
                                    <span>members</span>
                                </div>
                            </div>

                            <div>
                                <img src={dumbl} alt="image"/>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                       <Link to="/schedule"><h5 className="calendar_title">My Activity Calendar</h5></Link><br/>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Dashboard;