// the imports
import React from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import Navbar from '../../components/navbar/Navbar';
const localizer = momentLocalizer(moment)
// import {test} from './events';

const myEventsList = [
    { start:new Date(2022, 4, 25), end: new Date(2022, 4, 25), title: "Դիպլոմային" }
  ];

export default function Schedule() {


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
