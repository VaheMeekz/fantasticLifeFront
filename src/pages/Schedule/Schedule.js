// the imports
import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import Navbar from '../../components/navbar/Navbar';
import {useDispatch, useSelector} from "react-redux";
import {ActivityReducer} from "../../redux/reducers/activityReducer";
import {myActivityAC} from "../../redux/actions/activityAction";

const localizer = momentLocalizer(moment)
// import {test} from './events';

const myEventsList = [
    {start: new Date(2022, 4, 25), end: new Date(2022, 4, 25), title: "Դիպլոմային"},
    {start: new Date(2022, 4, 26)}
];

export default function Schedule() {
    const dispatch = useDispatch()
    const myCreatedActivity = useSelector(state => state.ActivityReducer.myCreatedActivity)
    const myActivity = useSelector(state => state.ActivityReducer.myActivity)
    console.log(myActivity);
    const loading = useSelector(state => state.ActivityReducer.loading)
    let [events, setEvents] = useState([])

    useEffect(() => {
        dispatch(myActivityAC())
    }, [])


    useEffect(() => {
        let allActivity = myActivity?.concat(myCreatedActivity)
        allActivity?.map(i => {
            events.push({start: new Date(i.date.substr(0, 4), i.date.substr(5, 2), i.date.substr(8, 2)), end: new Date(i.date.substr(0, 4), i.date.substr(5, 2), i.date.substr(8, 2)),title: i.name})
        })
    }, [loading])

    return (
        <div>

            <Navbar/>

            <Calendar
                events={events}
                localizer={localizer}
                style={{height: 500}}
            /></div>
    )
}
