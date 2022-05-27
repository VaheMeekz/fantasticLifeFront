import {GET_MY_TEAMS} from "../types";

const initialState = {
    myTeams: null,
    loading: true
}

export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_TEAMS:
            return {
                ...state,
                myTeams: action.payload,
                loading: false
            }
        default:
            return state;
    }
}