import {
    SIGN_UP_POST,
    GET_AUTH,
    GO_SEND_CODE,
    ENTER_PASSWORD,
    LOGIN_DATA,
    GET_ALL_USERS,
    GET_USER_DETAIL, GET_USER_DETAIL_HOURS
} from "../types"

const initialState = {
    auth: false,
    token: null,
    getAuth: [],
    role: null,
    info: [],
    sendCode: [],
    enterPassword: [],
    loginData: [],
    allUsers: null,
    count: null,
    loading: true,
    otherUser:null,
    otherLoading:true,
    detailHowrs:null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_POST:
            return {
                ...state,
                auth: true,
                token: action.payload.token,
                role: action.payload.role,
                info: action.payload
            }
        case GET_AUTH:
            return {
                ...state,
                getAuth: action.payload
            }
        case GO_SEND_CODE:
            return {
                ...state,
                sendCode: action.payload
            }
        case ENTER_PASSWORD:
            return {
                ...state,
                enterPassword: action.payload
            }
        case LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload.data.paginateUsers,
                count: action.payload.data.count,
                loading: false
            }
        case GET_USER_DETAIL:
        return {
            ...state,
            otherUser: action.payload,
            otherLoading: false
        }
        case GET_USER_DETAIL_HOURS:
            return {
                ...state,
                detailHowrs: action.payload
            }
        default:
            return state
    }
}