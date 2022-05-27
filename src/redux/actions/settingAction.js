import {CHANGE_AVATAR, GET_USER_SINGLE} from "../types"
import axios from "axios";
import {baseUrl} from "../../config/config";
import Swal from "sweetalert2";
import {userId} from "../../utils/keys";

export const getSingleUser = () => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/users/single`, {
            params: {
                id:userId
            }
        });
        dispatch({
            type: GET_USER_SINGLE,
            payload: response.data,
        });
    };
};

export const changeAvatar = (id, image) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/users/changeAvatar`, {
            id,
            image
        })
        dispatch({
            type: CHANGE_AVATAR,
            payload: image
        })
    }
}

export const changeCredentials = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/users/edit`, data)
        if (!response.data.err) {
            Swal.fire({
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
            });
            dispatch({
                type: GET_USER_SINGLE,
                payload: response.data
            })
        }
    }
}

export const changePasswordAc = (id, oldPass, newPass) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/users/changePassword`, {
            id,
            oldPassword: oldPass,
            newPassword: newPass
        })
        Swal.fire({
            // icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
}

export const deactiveteAccount = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/users/deactivate`, {
            id
        })
        Swal.fire({
            // icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
}