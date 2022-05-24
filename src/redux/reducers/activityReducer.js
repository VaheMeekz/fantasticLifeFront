import {GET_ACTIVITY_MAP, GET_SPORTS} from "../types";

const initialState = {
    activity:null,
    sports:null
}

export const ActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_MAP:
            return {
                ...state,activity: action.payload
            }
        case GET_SPORTS:
            return {
                ...state,
                sports: action.payload
            }
        default:
            return state
    }
}