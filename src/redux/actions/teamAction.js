import axios from "axios";
import {baseUrl} from "../../config/config";
import {GET_DETAIL_TEAM_HISTORY, GET_MY_TEAMS, GET_SINGLE_TEAM} from "../types";
import Swal from "sweetalert2";
import {userId} from "../../utils/keys";


export const getSingleUser = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/team/myTeams`, {
            params: {
                id
            }
        });
        dispatch({
            type: GET_MY_TEAMS,
            payload: response.data,
        });
    };
};

export const createTeam = (name, image, sport_id, creator_id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team`, {
            name, image, sport_id, creator_id
        })
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
        dispatch({
            type: GET_MY_TEAMS,
            payload: response.data,
        });
    }
}


export const getSingleTeam = (id, status) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/team/single`, {
            params: {id, status}
        })
        dispatch({
            type: GET_SINGLE_TEAM,
            payload: response.data
        })
    }
}

export const deleteTeamAC = (creator, team) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team/deleteTeam`, {
            id: team, creatorId: creator
        })
        dispatch({
            type: GET_MY_TEAMS,
            payload: response.data,
        });
    }
}

export const getSingleTeamHistory = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/invite/teamInviteHistory`, {
            params: {
                id
            }
        })
        dispatch({
            type: GET_DETAIL_TEAM_HISTORY,
            payload: response.data
        })
    }
}

export const editTeamCredentials = (id, name, image) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team/edit`, {
            id, name, image
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
        setTimeout(() => {
            window.location.reload(false);
        }, 1000)
    }
}

export const deleteTeam = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team/deleteTeam`, {
            id, creatorId: userId
        })
        Swal.fire({
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

export const deleteTeamMateAC = (teamId, teamMeteId) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team/deleteTeammate`, {
            id: teamId, creator_id: userId, teamMeteId
        })
        console.log(response,"++++++++++++++++++")
        if(!response.message) {
            dispatch({
                type: GET_SINGLE_TEAM,
                payload: response.data
            })
        }}
}