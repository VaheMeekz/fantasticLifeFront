import {GET_DETAIL_TEAM_HISTORY, GET_MY_TEAMS, GET_SINGLE_TEAM} from "../types";

const initialState = {
    myTeams: null,
    loading: true,
    singleTeam:null,
    loadSingle:true,
    singleHistory:null
}

export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_TEAMS:
            return {
                ...state,
                myTeams: action.payload,
                loading: false
            }
        case GET_SINGLE_TEAM:
            return {
                ...state,
                singleTeam: action.payload,
                loadSingle:false
            }
        case GET_DETAIL_TEAM_HISTORY:
            return {
                ...state,
                singleHistory:action.payload
            }
        default:
            return state;
    }
}