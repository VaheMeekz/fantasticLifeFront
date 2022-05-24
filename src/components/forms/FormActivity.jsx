// styles
import "./formsActivaty.scss"

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createActivityAC, getSportsThunk} from "../../redux/actions/activityAction";
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {useNavigate} from "react-router-dom";
// custom imports


const BasicForm = () => {
    let id = 1;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sports = useSelector(state => state.ActivityReducer.sports)
    //values
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [sport, setSport] = useState(null)
    const [curDate, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [count, setCount] = useState(null)


    useEffect(() => {
        dispatch(getSportsThunk())
    }, [])

    const handlerSend = (e) => {
        e.preventDefault()
        console.log(time, "...")
        dispatch(createActivityAC(id,name,description,sport,curDate,time,count))
        navigate('/createActivityNext')
    }
    return (
        <form className="validate_form activity_form" autoComplete="off">
            <label htmlFor="email"> Activity Name</label>
            <input
                id="email"
                type="text"
                placeholder="Enter activity name"
                className={`form-control`}
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label htmlFor="floatingTextarea">Description</label>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Description" value={description}
                          onChange={e => setDescription(e.target.value)}/>
            </div>
            <label htmlFor="age">I Want To ...</label>
            <select className="form-select" aria-label="Default select example"
                    onChange={e => setSport(e.target.value)}>
                <option value={null}>Open this select menu</option>
                {
                    sports && sports?.map(i => {
                        return (
                            <option value={i.id} key={i.id}>{i.sportName}</option>
                        )
                    })
                }
            </select>

            <div className="d-flex" style={{gridGap: "10px"}}>
                <div className="col-xl-6 col-md-6 col-sm-12">
                    {/*<label htmlFor="age">Date</label>*/}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={curDate}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                    <label htmlFor="age">Time</label>
                    {/*<select className="form-select" aria-label="Default select example" style={{width: "92%"}}>*/}
                    {/*    <option selected>Open this select menu</option>*/}
                    {/*    <option value="1">One</option>*/}
                    {/*    <option value="2">Two</option>*/}
                    {/*    <option value="3">Three</option>*/}
                    {/*</select>*/}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label="Basic example"
                            value={time}
                            onChange={(newValue) => {
                                setTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>


            <label>With # Of People</label>
            <input
                id="text"
                type="number"
                placeholder="Enter"
                className={`form-control`}
                value={count}
                onChange={e => setCount(e.target.value)}
            />

            <button className="form_activity_btn" onClick={handlerSend}>
                Submit
            </button>
        </form>
    );
};
export default BasicForm;