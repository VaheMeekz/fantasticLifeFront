import axios from "axios";
import {API_URI, token} from "../../utils/keys";
import {GET_USERS} from "../types";

export function getUsers() {
    return async dispatch => {
        const response = await axios.get(`${API_URI}/users/`,{
            headers: {'Authorization': `Bearer ${token}`}
        })
        dispatch({
            type: GET_USERS,
            payload: response.data.users
        })
    }
}