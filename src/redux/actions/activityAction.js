import {GET_ACTIVITY_MAP, GET_SPORTS, GET_USER_ACTIVITY} from "../types"
import axios from "axios";
import {baseUrl} from "../../config/config";
import Swal from "sweetalert2";
import {userId} from "../../utils/keys";

export const getActivityThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activity`);
        dispatch({
            type: GET_ACTIVITY_MAP,
            payload: response.data,
        });
    };
}

export const createActivityAC = (creator, name, description, sport, curDate, endTime, time, count) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/activity`, {
            creator_id: creator,
            name,
            description,
            sport_id: sport,
            date: curDate,
            startTime: time,
            endTime: endTime,
            peoplesCount: count,
        })
        localStorage.setItem("activityId", response.data[0].id)
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
    }
}

export const addActivityCredentials = ( visible) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/activity/credentials`,{
            id:localStorage.getItem("activityId"), lat:0, lng:0, visible
        })
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
        // localStorage.removeItem("activityId")
    }
}

export const getSportsThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/sports`);
        dispatch({
            type: GET_SPORTS,
            payload: response.data
        })
    }
}

export const myActivityAC = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activity/my`,{
            params:{
                id:userId
            }
        })
        dispatch({
            type:GET_USER_ACTIVITY,
            payload:response.data
        })
    }
}