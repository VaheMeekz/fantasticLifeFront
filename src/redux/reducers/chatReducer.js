import {GET_MESSAGES, GET_RECEIVERS} from "../types";

const initialState = {
    receivers: null,
    messages : null
}


export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECEIVERS:
            return {
                ...state,
                receivers: action.payload
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state;
    }
}