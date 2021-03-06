import {combineReducers} from "redux";
// import {postReducer} from "./reducers/postReducer";
import {authReducer} from "./reducers/authReducer"
import {sendEmail} from "./reducers/changeReducer";
import {appReducer} from "./reducers/loaderReducer";
import {getUsers} from "./reducers/getUsersReducer";
import {addTechnicianReducer} from "./reducers/addTechnicianReducer";
import {ActivityReducer} from "./reducers/activityReducer";
import {chatReducer} from "./reducers/chatReducer";
import {settingsReducer} from "./reducers/settingReducer";
import {teamReducer} from "./reducers/teamReducer";
import {InviteReducer} from "./reducers/inviteReducer";



export const rootReducer = combineReducers({
    // posts: postReducer,
    authReducer,
    sendEmail,
    appReducer,
    getUsers,
    addTechnicianReducer,
    ActivityReducer,
    chatReducer,
    settingsReducer,
    teamReducer,
    InviteReducer
});