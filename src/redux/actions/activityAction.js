import {GET_ACTIVITY_MAP, GET_SPORTS} from "../types"
import axios from "axios";
import {baseUrl} from "../../config/config";
import Swal from "sweetalert2";

export const getActivityThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activity`);
        dispatch({
            type: GET_ACTIVITY_MAP,
            payload: response.data,
        });
    };
}

export const createActivityAC = (creator,name,description,sport,curDate,time,count) => {
    return async (dispatch) => {
        const response =await axios.post(`${baseUrl}/activity`,{
            creator_id:creator,
            name,
            description,
            sport_id:sport,
            date:curDate,
            startTime:time,
            endTime:time,
            peoplesCount:count,
        })
        localStorage.setItem("activityId",response.data.id)
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
    }
}

export const getSportsThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/sports`);
        dispatch({
            type:GET_SPORTS,
            payload:response.data
        })
    }
}