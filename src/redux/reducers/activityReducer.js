import {GET_ACTIVITY_MAP, GET_SPORTS, GET_USER_ACTIVITY} from "../types";

const initialState = {
    activity:null,
    sports:null,
    myCreatedActivity:null,
    myActivity:null,
    loading:true
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
        case GET_USER_ACTIVITY:{
            return {
                myActivity: action.payload.myActivity,
                myCreatedActivity: action.payload.myCreatedActivity,
                loading: false
            }
        }
        default:
            return state
    }
}