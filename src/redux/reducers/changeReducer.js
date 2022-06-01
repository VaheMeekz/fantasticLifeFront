import { CHANGE_PASSWORD_SEND,CHANGE_PASSWORD } from "../types"

const initialState = {
    changePassword:[],
    sendEmail:[]
}

export const sendEmail = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_SEND:
            return {
                ...state,
                sendEmail:action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                changePassword:action.payload
            }
        default:
            return state
    }
}