import axios from "axios"
import {GET_MESSAGES, GET_NOTIFICATIONS, GET_RECEIVERS, GET_RECEIVERS_SEARCH, SHOW_NOTIFIACATION} from "../types"
import {baseUrl} from "../../config/config";
import Swal from "sweetalert2";
import {userId} from "../../utils/keys";


export const getReceiversAction = (id, search) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/message`, {
            params: {
                id, search
            }
        });
        dispatch({
            type: GET_RECEIVERS,
            payload: response.data,
        });
    };
}

export const getConversationMessagesAC = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/message/my`, {
            params: {
                conversation_id: id
            }
        })
        dispatch({
            type: GET_MESSAGES,
            payload: response.data
        })
    }
}

export const getNotificationsAC = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/message/notifications`, {
            params: {
                id: id
            }
        })
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: response.data
        })
    }
}

export const createConversationAc = (sender_id, receiver_id, text) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/message`,{
            sender_id, receiver_id, text
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Something went wrong!",
            timer: 1500,
        });
    }
}

export const getReceiversSearch = (search) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/users/receiversSearch`,{
            params:{
                search,id:userId
            }
        })
        dispatch({
            type:GET_RECEIVERS_SEARCH,
            payload:response.data
        })
    }
}

export const showNotification = (value) => {
    return {
        type:SHOW_NOTIFIACATION,
        payload:value
    }
}