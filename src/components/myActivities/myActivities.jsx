// styles
import "./myActivities.scss"

import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

// custom imports
import miniLocation from "../../images/miniSvg.svg"
import CounterWidgetOne from "../chart/PieChartOne";
import axios from "axios";
import {API_URI, userId} from "../../utils/keys";


const MyActivities = () => {
    const user = useSelector(state => state.getUsers.userData)
    let dateTimeUTC = new Date(user?.updatedAt)
    let thisDate = new Date()
    let milliseconds = thisDate - dateTimeUTC
    let seconds = Number(milliseconds) / 1000


    function seconds_to_days(seconds) { // day, h, m and s
        var days = Math.floor(seconds / (24 * 60 * 60));
        seconds -= days * (24 * 60 * 60);
        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * (60 * 60);
        var minutes = Math.floor(seconds / (60));
        seconds -= minutes * (60);
        return ((0 < days) ? (days + " day, ") : "") + hours + "h, " + minutes + "min"
    }


    const [my, setMy] = useState()
    // get my activity statistic

    const fetchPostMy = async () => {
        try {
            const response = await axios(`${API_URI}/activity/my`, {params: {id: userId}});
            setMy(response.data);
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchPostMy();
    }, [])


    return (<div className="my_activities_slice">
        <main>
            <section className="card-row">
                <div>
                    <h5>Up Coming Activity</h5>
                    <article className="card_activities"><br/>
                        <div className="coming_hours">
                            <i className="fa-solid fa-arrow-right-long"
                               style={{color: "#03C83E"}}></i>
                            <span className="up_coming">Up Coming</span>
                            <i className="fa-solid fa-clock"></i>
                            <span className="up_hours">{seconds_to_days(seconds)}</span>
                        </div>
                        <br/>

                        <div className="saturday">
                            <p className="saturday_text">Saturday Morning Hike In Kicking Horse Park</p>
                        </div>
                        <br/>
                        <div className="mini_location">
                            <span>{my?.myActivity[my?.myActivity.length - 1]?.time} Hour</span>
                            <img src={miniLocation} alt="image"/>
                        </div>
                        <br/>

                        <div className="bool_slice">
                            <div className="bool_slice_image">
                                {my?.myActivity[my?.myActivity.length - 1]?.Sport.sportName}
                                <div className="bool_text">

                                    <span>Dec</span>
                                    <span
                                        className="bool_text_day">{my?.myActivity[my?.myActivity.length - 1]?.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <div className="boll_day">
                                <span>
                                    Monday
                                </span>
                                <span className="boll_day_hour">
                                    {my?.myActivity[my?.myActivity.length - 1]?.startTime} pm
                                </span>
                            </div>
                        </div>

                    </article>
                </div>
                <div>
                    <h5>Up Coming Activity <span>Received Requests</span></h5>
                    <article className="card_activities">
                        <CounterWidgetOne/>
                    </article>
                </div>


                <div className="activity_two">
                    <h5>Up Coming Activity</h5>
                    <article className="card_activities card_activities_two">
                        <h3>Saturday Morning Hike In Kicking Horse Park</h3>
                        <br/>
                        <div className="card_active_last">
                            {my?.myActivity?.slice(0,3).map((i,index) => {
                                return (<div key={index}>
                                    <div className="bool_slice">
                                        <div className="bool_slice_image">
                                            {/*<img src={bool} alt="image"/>*/}
                                            {i.Sport?.sportName}
                                            <div className="stolb"></div>  <div className="bool_text">
                                            {/*<span>Dec</span>*/}
                                            <span className="bool_text_day">{i.date.substring(0,10)}</span>
                                        </div>
                                        </div>
                                        <div className="stolb"></div>
                                        <div className="boll_day">
                                                    <span>
                                                        {i.time} Hour
                                                    </span>
                                        </div><div className="stolb"></div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </article>
                </div>
            </section>


        </main>

    </div>);
};

export default MyActivities;