// the imports
import React, {useEffect} from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import Navbar from '../../components/navbar/Navbar';
import {useDispatch, useSelector} from "react-redux";
import {ActivityReducer} from "../../redux/reducers/activityReducer";
import {myActivityAC} from "../../redux/actions/activityAction";
const localizer = momentLocalizer(moment)
// import {test} from './events';

const myEventsList = [
    { start:new Date(2022, 4, 25), end: new Date(2022, 4, 25), title: "Դիպլոմային" }
  ];

export default function Schedule() {
    const dispatch = useDispatch()
    const myCreatedActivity = useSelector(state => state.ActivityReducer.myCreatedActivity)
    const myActivity = useSelector(state => state.ActivityReducer.myActivity)
    const loading = useSelector(state => state.ActivityReducer.loading)

    useEffect(()=>{
        dispatch(myActivityAC())
    },[])


  return (
    <div>
        
        <Navbar />
        
         <Calendar
         events={myEventsList}
         localizer={localizer}
         style={{ height: 500 }}
     /></div>
  )
}
