import {combineReducers} from "redux";
// import {postReducer} from "./reducers/postReducer";
import {authReducer} from "./reducers/authReducer"
import {sendEmail} from "./reducers/changeReducer";
import {appReducer} from "./reducers/loaderReducer";
import {getUsers} from "./reducers/getUsersReducer";
import {addTechnicianReducer} from "./reducers/addTechnicianReducer";
import {ActivityReducer} from "./reducers/activityReducer";
import {chatReducer} from "./reducers/chatReducer";



export const rootReducer = combineReducers({
    // posts: postReducer,
    authReducer,
    sendEmail,
    appReducer,
    getUsers,
    addTechnicianReducer,
    ActivityReducer,
    chatReducer
});