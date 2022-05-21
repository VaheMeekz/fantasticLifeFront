import {GET_ACTIVITY_MAP} from "../types"
import axios from "axios";
import {baseUrl} from "../../config/config";
export const getActivityThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activity`);
        dispatch({
            type: GET_ACTIVITY_MAP,
            payload: response.data,
        });
    };
}