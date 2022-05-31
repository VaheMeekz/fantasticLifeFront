import {GET_MESSAGES, GET_RECEIVERS, GET_RECEIVERS_SEARCH} from "../types";
import {userId} from "../../utils/keys";

const initialState = {
    receivers: null,
    messages : null,
    receiversSearchResult:null,
    loading:true
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
        case GET_RECEIVERS_SEARCH:
            return {
                ...state,
                receiversSearchResult: action.payload.filter(i=>i.id !== userId),
                loading: false
            }
        default:
            return state;
    }
}