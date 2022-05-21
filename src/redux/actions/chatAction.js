import axios from "axios"
import {GET_MESSAGES, GET_NOTIFICATIONS, GET_RECEIVERS} from "../types"
import {baseUrl} from "../../config/config";


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