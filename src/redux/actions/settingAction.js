import {CHANGE_AVATAR, GET_USER_SINGLE} from "../types"
import axios from "axios";
import {baseUrl} from "../../config/config";
import Swal from "sweetalert2";

export const getSingleUser = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/users/single`, {
            params: {
                id
            }});
        dispatch({
            type: GET_USER_SINGLE,
            payload: response.data,
        });
    };
};

export const changeAvatar = (image) => {
    return {
        type:CHANGE_AVATAR,
        payload:image
    }
}

export const changeCredentials = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/users/edit`,data)
        if(!response.data.err){
            dispatch({
                type:GET_USER_SINGLE,
                payload:response.data
            })
        }
    }
}

export const changePasswordAc = (id,oldPass,newPass) => {
    return async (dispatch) => {
        const response =await axios.post(`${baseUrl}/users/changePassword`,{
            id,
            oldPassword:oldPass,
            newPassword:newPass
        })
        console.log(response)
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
        const response = await axios.post(`${baseUrl}/users/deactivate`,{
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
