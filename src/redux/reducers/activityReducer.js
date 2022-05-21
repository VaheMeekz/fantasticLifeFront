import {GET_ACTIVITY_MAP} from "../types";

const initialState = {
    activity:null,
}

export const ActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_MAP:
            return {
                ...state,activity: action.payload
            }
        default:
            return state
    }
}