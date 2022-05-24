import {SIGN_UP_POST, GET_AUTH, GO_SEND_CODE, ENTER_PASSWORD, LOGIN_DATA} from "../types"

const initialState = {
    auth: false,
    token:null,
    getAuth:[],
    role:null,
    info:[],
    sendCode:[],
    enterPassword:[],
    loginData:[]
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_POST:
            return {
                ...state,
                auth:true,
                token:action.payload.token,
                role:action.payload.role,
                info: action.payload
            }
        case GET_AUTH:
            return {
                ...state,
                getAuth:action.payload
            }
        case GO_SEND_CODE:
            return {
                ...state,
                sendCode:action.payload
            }
        case ENTER_PASSWORD:
            return {
                ...state,
                enterPassword:action.payload
            }
        case LOGIN_DATA:
            return {
                ...state,
                loginData:action.payload
            }
        default:
            return state
    }
}