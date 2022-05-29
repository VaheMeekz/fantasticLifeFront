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
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(() => {
            window.location.reload(false);
        }, 1500);
    }
}

export const inviteRejectAC = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/invite/reject`, {
            id
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(() => {
            window.location.reload(false);
        }, 1500);
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

export const createActivityInvite = (activity_id, sender_id, message, recivier_id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/activityInvite`, {
            activity_id, sender_id, message, recivier_id
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

export const activityAcceptC = (sender_id, activity_id, recivier_id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/activityInvite/accept`, {
            sender_id, activity_id, recivier_id
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

export const activityRejectAC = (sender_id, activity_id, recivier_id) => {
    console.log(sender_id, activity_id, recivier_id);
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/activityInvite/reject`, {
            sender_id, activity_id, recivier_id
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}