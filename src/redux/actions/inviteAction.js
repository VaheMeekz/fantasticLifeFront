import axios from "axios";
import {baseUrl} from "../../config/config";
import {ACTIVITY_INVITES, ACTIVITY_SENDED, GET_MY_INVITES, SENDEDT_INVITE} from "../types";
import Swal from "sweetalert2";

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

export const createTeamInvite = (team_id, receiver_id, message, sender_id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/invite`, {
            team_id, receiver_id, message, sender_id
        })
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
    }
}

export const inviteAcceptAC = (id, teamId) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/invite/accept`, {
            id, teamId
        })
    }
}

export const inviteRejectAC = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/invite/reject`, {
            id
        })
    }
}

export const inviteWithEmail = (email, message) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/invite/withEmail`, {
            email, message
        })
        if (response.data.answer == true) {
            Swal.fire({
                icon: "success",
                title: "Success",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }
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