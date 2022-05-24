import {CHANGE_AVATAR, GET_USER_SINGLE} from "../types";

const initialState = {
    user: null,
    loading: true,
    avatar:null,
    message:null
}


export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SINGLE :
            return {
                ...state,
                user: action.payload,
                avatar: action.payload.image,
                loading: false
            }
        case CHANGE_AVATAR:
            return {
                ...state,
                avatar: action.payload
            }
        default:
            return state;
    }
}