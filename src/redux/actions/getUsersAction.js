import axios from "axios";
import {API_URI, token,userId} from "../../utils/keys";
import {GET_USER} from "../types";

export function getUsers() {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/users/single`,
            {
                params:{
                    id:userId
                }
            })
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }
}