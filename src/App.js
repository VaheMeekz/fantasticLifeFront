// styles
import "./style/App.scss"

import {Routes, Route} from "react-router-dom";
// custom imports
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Layout from "./components/Layout";
import DashboardAdmin from "./pages/Dashboard/Dashboard";
import Welcome from "./pages/Welcome/Welcome";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SignUp from "./pages/auth/SignUp";
import GetActive from "./pages/getactive/GetActive";
import ActivityMap from "./pages/activityMap/ActivityMap";
import Teams from "./pages/teams/Teams";
import Invitations from "./pages/Invitations/Invitations";
import Activities from "./pages/Activities/Activities";
import CreateActivities from "./pages/Activities/CreateActivities";
import CreateActivityNext from "./pages/Activities/CreateActivityNext";
import Settings from "./pages/Settings/Settings";
import Schedule from "./pages/Schedule/Schedule";
import SignUpCode from "./pages/auth/SignUpCode";
import SendPassword from "./pages/auth/SendPassword";
import Login from "./pages/auth/Login"
import {token, userId} from "./utils/keys";
import {useDispatch} from "react-redux";
import {useEffect, useRef} from "react";
import TeamDetail from "./pages/TeamDetail/TeamDetail";
import InviteToActivity from "./pages/Activities/InviteToActivity";
import TeamInvite from "./pages/teamInvite/TeamInvite";
import ChatMain from "./pages/Chat/ChatMain";
import UserDetail from "./pages/userDetail/UserDetail";
import {io} from "socket.io-client";
import {showInviteNotifications} from "./redux/actions/inviteAction";

function App() {
    const dispatch = useDispatch()
    const socket = useRef()
    useEffect(() => {
        if (token) {
            //online
            socket.current = io("ws://localhost:8900")
            socket.current.emit("addUser", userId)
            //teamInvites
            socket.current.on("getInvitions", data => {
                if (data.receiverId == userId) {
                    dispatch(showInviteNotifications(true))
                }
            })
            socket.current.on("getActivityInvite", data => {
                if (data.receiverId == userId) {
                    dispatch(showInviteNotifications(true))
                }
            })
            console.clear()
        }
    }, [])

    const notAuth = () => {
        return (
            <Routes>

                {/*home slider start*/}
                <Route path="/" element={<Welcome/>}/>
                {/*home slider end*/}

                {/*sign_in and auth start*/}
                {/*<Route path="/signin" element={<Signin />} />*/}
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signupCode" element={<SignUpCode/>}/>
                <Route path="/sendPassword" element={<SendPassword/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*sign_in and auth start*/}


                {/*not found page start*/}
                <Route path="*" element={<PageNotFound/>}/>
                {/*not found page start*/}
            </Routes>
        )
    }

    const userDashboard = () => {
        return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<DashboardAdmin/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/products" element={<List/>}/>

                    <Route path="/users/new" element={<Single/>}/>
                    <Route path="/dashboard" element={<DashboardAdmin/>}/>

                    <Route path="/getActive" element={<GetActive/>}/>

                    {/*map start*/}
                    <Route path="/activityMap" element={<ActivityMap/>}/>
                    {/*map end*/}
                    <Route path={'/inbox'} element={<ChatMain/>}/>
                    {/*activities start*/}
                    <Route path={'/activities'} element={<Activities/>}/>
                    <Route path={'/inviteToActivity/:id'} element={<InviteToActivity/>}/>
                    {/*activities end*/}
                    <Route path="/teams" element={<Teams/>}/>
                    <Route path="/teams/:id" element={<TeamDetail/>}/>
                    <Route path="/teamInvite/:id" element={<TeamInvite/>}/>
                    <Route path="/invitations" element={<Invitations/>}/>

                    {/*create activity*/}
                    <Route path="/createActivity" element={<CreateActivities/>}/>
                    <Route path="/createActivityNext" element={<CreateActivityNext/>}/>

                    {/*settings*/}
                    <Route path="/settings" element={<Settings/>}/>

                    {/* Schedule */}
                    <Route path="/schedule" element={<Schedule/>}/>

                    {/*    user detail*/}
                    <Route path="/user/:id" element={<UserDetail/>}/>
                </Route>

                {/*home slider start*/}
                <Route path="/home" element={<Welcome/>}/>
                {/*home slider end*/}

                {/*sign_in and auth start*/}
                {/*<Route path="/signin" element={<Signin />} />*/}
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signupCode" element={<SignUpCode/>}/>
                <Route path="/sendPassword/:id" element={<SendPassword/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*sign_in and auth start*/}

                {/*activity start*/}
                {/*<Route path="/select_activity" element={<SelectActivity />} />*/}
                {/*activity end*/}

                {/*not found page start*/}
                <Route path="*" element={<PageNotFound/>}/>
                {/*not found page start*/}
            </Routes>
        )
    }

    // const storage_token = localStorage.getItem("myTokenSport")
    // useEffect(() => {
    //     if (storage_token == 'undefined') {
    //         navigate("/signup")
    //     }
    // },[])

    return (
        <div>
            {(token && token !== undefined) ? userDashboard() : notAuth()}
        </div>
    );
}

export default App;
