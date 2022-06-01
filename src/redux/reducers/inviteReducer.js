import {ACTIVITY_INVITES, ACTIVITY_SENDED, GET_MY_INVITES, SENDEDT_INVITE, SHOW_INVITE_NOTIFICATIONS} from "../types";

const initialState = {
    invites: null,
    loading: true,
    sended: null,
    activitySend:null,
    activityInvites:null,
    showNotification:false
}

export const InviteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MY_INVITES:
            return {
                ...state,
                invites: action.payload,
                loading: false
            }
        case SENDEDT_INVITE:
            return {
                ...state,
                sended: action.payload,
                loading: false
            }
        case ACTIVITY_SENDED:
            return {
                ...state,
                activitySend: action.payload
            }
        case ACTIVITY_INVITES:
            return {
                ...state,
                activityInvites: action.payload
            }
        case SHOW_INVITE_NOTIFICATIONS:
            return {
                ...state,
                showNotification: action.payload
            }
        default:
            return state;
    }
}