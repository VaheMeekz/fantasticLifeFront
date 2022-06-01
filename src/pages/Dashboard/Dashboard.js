// styles
import "./dashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import ActivatesStatistic from "../../components/activatesStatistic/activatesStatistic";
import MyActivities from "../../components/myActivities/myActivities";

// custom imports
import Calendar from "../../components/calendar/calendar"
import {Link, useNavigate} from "react-router-dom";

import {useEffect, useState} from "react";
import axios from "axios";
import weather from "../../images/Partly Cloudy.svg"
import {API_URI, userId} from "../../utils/keys";
import {useDispatch, useSelector} from "react-redux";
import {getSingleUser} from "../../redux/actions/teamAction";

const Dashboard = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [user, setUser] = useState();
    const [getActivity,setGetActivity] = useState()
    const [getHistory, setGetHistory] = useState();
    const [my,setMy] = useState()
    const [memberCount,setMemberCount] = useState(null)
    const teams = useSelector(state => state?.teamReducer.myTeams)


    useEffect(() => {
        dispatch(getSingleUser(userId))
    }, [])

    useEffect(()=>{
        let count = 0;
        if(teams !==null){
            for(let i=0;i<teams.length;i++){
                count = Number(count) + Number(teams[i].UserTeams.length)
            }
        }
        setMemberCount(count)
    },[teams])


    // get single user info
    const fetchPost = async () => {
        try {
            const response = await axios(`${API_URI}/users/single`,
                {params:{id:userId}});
            setUser(response.data);
            if(typeof response.data.firstName === 'string' && typeof response.data.lastName === 'string') {
                return "ok"
            } else {
                navigate(`/settings`);
            }
        } catch (err) {console.error(err);}
    };

    // get my activity statistic

    const fetchPostMy = async () => {
        try {
            const response = await axios(`${API_URI}/activity/my`,
                {params:{id:userId}});
            setMy(response.data?.myActivity);
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


    const getHistoryFetch = async () => {
        try {
            const response = await axios(`${API_URI}/activityInvite/singleHistory`,
                {params:{id:userId,activity_id:userId}});
            setGetHistory(response.data);
        } catch (err) {console.error(err);}
    };

    // useEffects
    useEffect(()=> {
        fetchPost();
        fetchPostMy();
        getMyActivity();
        getHistoryFetch();
        console.clear()
    }, [])
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
                                <span>{memberCount !== null && memberCount} members</span>
                                <Link to="/teams">See</Link>
                            </div><br/>

                            {
                                teams !== null && teams?.slice(0,3).map(i=>{
                                    return (
                                        <div className="team_slice_dashboard" key={i.id}>
                                        <div className="image_and_members">
                                            <img src={i.image} alt="image"/>
                                            <div className="team_slice_members">
                                                <span>{i.name.toLowerCase()}</span><br/>
                                                <span> {i.UserTeams.length} members</span>
                                            </div>
                                        </div>

                                        <div>
                                            {/*<img src={dumbl} alt="image"/>*/}
                                            {i.Sport.sportName}
                                        </div>
                                    </div>
                                    )
                                })
                            }



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