// styles
import "./formsActivaty.scss"

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createActivityAC, getSportsThunk} from "../../redux/actions/activityAction";
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useNavigate} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {FormControl, InputLabel, Select} from "@mui/material";
import {userId} from "../../utils/keys";
// custom imports


const BasicForm = () => {
    let id = userId;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sports = useSelector(state => state.ActivityReducer.sports)
    //values
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [sport, setSport] = useState(null)
    const [curDate, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [count, setCount] = useState(null)


    useEffect(() => {
        dispatch(getSportsThunk())
    }, [])

    const handlerSend = (e) => {
        e.preventDefault()
        dispatch(createActivityAC(id, name, description, sport, curDate, endTime, time, count))
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
                <textarea className="form-control custom_styles_textarea" placeholder="Description" value={description}
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

            <div className="d-flex justify-content-start" style={{gridGap: "10px",margin:"0.5rem"}}>
                <div>
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

            </div>

            <div className="col-xl-12 col-md-12 col-sm-12">
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Start</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        autoWidth
                        label="Start"
                    >
                        <MenuItem value="null">
                            <em>Select start time</em>
                        </MenuItem>
                        <MenuItem value={"5"}>05:00</MenuItem>
                        <MenuItem value={"6"}>06:00</MenuItem>
                        <MenuItem value={"7"}>07:00</MenuItem>
                        <MenuItem value={"8"}>08:00</MenuItem>
                        <MenuItem value={"9"}>09:00</MenuItem>
                        <MenuItem value={"10"}>10:00</MenuItem>
                        <MenuItem value={"11"}>11:00</MenuItem>
                        <MenuItem value={"12"}>12:00</MenuItem>
                        <MenuItem value={"13"}>13:00</MenuItem>
                        <MenuItem value={"14"}>14:00</MenuItem>
                        <MenuItem value={"15"}>15:00</MenuItem>
                        <MenuItem value={"16"}>16:00</MenuItem>
                        <MenuItem value={"17"}>17:00</MenuItem>
                        <MenuItem value={"18"}>18:00</MenuItem>
                        <MenuItem value={"19"}>19:00</MenuItem>
                        <MenuItem value={"20"}>20:00</MenuItem>
                        <MenuItem value={"21"}>21:00</MenuItem>
                        <MenuItem value={"22"}>22:00</MenuItem>
                        <MenuItem value={"23"}>23:00</MenuItem>
                        <MenuItem value={"24"}>24:00</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-autowidth-label">End</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={endTime}
                        onChange={e => setEndTime(e.target.value)}
                        autoWidth
                        label="End"
                    >
                        <MenuItem value="null">
                            <em>Select start time</em>
                        </MenuItem>
                        <MenuItem value={"5"}>05:00</MenuItem>
                        <MenuItem value={"6"}>06:00</MenuItem>
                        <MenuItem value={"7"}>07:00</MenuItem>
                        <MenuItem value={"8"}>08:00</MenuItem>
                        <MenuItem value={"9"}>09:00</MenuItem>
                        <MenuItem value={"10"}>10:00</MenuItem>
                        <MenuItem value={"11"}>11:00</MenuItem>
                        <MenuItem value={"12"}>12:00</MenuItem>
                        <MenuItem value={"13"}>13:00</MenuItem>
                        <MenuItem value={"14"}>14:00</MenuItem>
                        <MenuItem value={"15"}>15:00</MenuItem>
                        <MenuItem value={"16"}>16:00</MenuItem>
                        <MenuItem value={"17"}>17:00</MenuItem>
                        <MenuItem value={"18"}>18:00</MenuItem>
                        <MenuItem value={"19"}>19:00</MenuItem>
                        <MenuItem value={"20"}>20:00</MenuItem>
                        <MenuItem value={"21"}>21:00</MenuItem>
                        <MenuItem value={"22"}>22:00</MenuItem>
                        <MenuItem value={"23"}>23:00</MenuItem>
                        <MenuItem value={"24"}>24:00</MenuItem>
                    </Select>
                </FormControl>
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