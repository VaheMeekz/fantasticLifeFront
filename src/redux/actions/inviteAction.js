import axios from "axios";
import {baseUrl} from "../../config/config";
import {ACTIVITY_INVITES, ACTIVITY_SENDED, GET_MY_INVITES, SENDEDT_INVITE} from "../types";

//---------------------------------------------------team
export const getMyInvites = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/invite/myInvites`, {
            params: {
                id
            }
        });
        dispatch({
            type: GET_MY_INVITES,
            payload: response.data,
        });
    };
};

export const mySendInvites = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/invite/my`, {
            params: {
                id
            }
        });
        dispatch({
            type: SENDEDT_INVITE,
            payload: response.data,
        });
    };
}
//------------------------------------------acivity

export const getMyActivityInvites = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activityInvite/my`, {
            params: {
                id
            }
        });
        dispatch({
            type: ACTIVITY_INVITES,
            payload: response.data,
        });
    };
};

export const mySendActivityInvites = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activityInvite`, {
            params: {
                id
            }
        });
        dispatch({
            type: ACTIVITY_SENDED,
            payload: response.data,
        });
    };
}