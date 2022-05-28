// styles
import "./dashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import ActivatesStatistic from "../../components/activatesStatistic/activatesStatistic";
import MyActivities from "../../components/myActivities/myActivities";

// custom imports
import Calendar from "../../components/calendar/calendar"
import {Link} from "react-router-dom";
// import TeamItem from "../../components/teamItem/TeamItem";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import img_test from "../../images/abela.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import dumbl from "../../images/dumbbells.svg"
import {API_URI, userId} from "../../utils/keys";

const Dashboard = () => {
    const [user, setUser] = useState();

    const fetchPost = async () => {
        try {
            const response = await axios(`${API_URI}/users/single`,
                {params:{id:userId}});
            setUser(response.data);
        } catch (err) {console.error(err);}
    };
    useEffect(()=> {
        fetchPost();
    }, [0])


    return (
        <>
            <Navbar/>
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