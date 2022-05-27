import {GET_USER, GET_USERS} from "../types"

const initialState = {
    users:[],
    userData:[]
}

export const getUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER:
            return {
                ...state,
                userData:action.payload
            }
        default:
            return state
    }
}