// styles
import "./style/App.scss"

import {  Routes, Route } from "react-router-dom";

// custom imports

import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Layout from "./components/Layout";
import DashboardAdmin from "./pages/Dashboard/Dashboard";
import Welcome from "./pages/Welcome/Welcome";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SignUp from "./pages/auth/SignUp";
import Signin from "./pages/signin/Signin";
import SelectActivity from "./pages/selectActivity/SelectActivity";
import GetActive from "./pages/getactive/GetActive";
import ActivityMap from "./pages/activityMap/ActivityMap";
import Teams from "./pages/teams/Teams";
import Invitations from "./pages/Invitations/Invitations";
import ChatMain from "./pages/Chat/ChatMain";
import Activities from "./pages/Activities/Activities";
import CreateActivities from "./pages/Activities/CreateActivities";
import CreateActivityNext from "./pages/Activities/CreateActivityNext";
import Settings from "./pages/Settings/Settings";
import Schedule from "./pages/Schedule/Schedule";
import SignUpCode from "./pages/auth/SignUpCode";
import SendPassword from "./pages/auth/SendPassword";
import Login from "./pages/auth/Login"
import { token,API_URI,userId } from "./utils/keys";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getUsers} from "./redux/actions/getUsersAction";
import TeamDetail from "./pages/TeamDetail/TeamDetail";
import TeamInvite from "./pages/teamInvite/TeamInvite";

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.getUsers.userData)
    const [submitting, setSubmitting] = useState(true)
    const [data,setData] = useState()
    const [query, setQuery] = useState("react hooks")
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const notAuth = () => {
        return (
            <Routes>

                {/*home slider start*/}
                <Route path="/" element={<Welcome />} />
                {/*home slider end*/}

                {/*sign_in and auth start*/}
                {/*<Route path="/signin" element={<Signin />} />*/}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signupCode" element={<SignUpCode />} />
                <Route path="/sendPassword/:id" element={<SendPassword />} />
                <Route path="/login" element={<Login />} />
                {/*sign_in and auth start*/}


                {/*not found page start*/}
                <Route path="*" element={<PageNotFound />} />
                {/*not found page start*/}
            </Routes>
        )
    }

    const userDashboard = () => {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<DashboardAdmin />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/products" element={<List />} />

                    <Route path="/users/new" element={<Single />} />
                    <Route path="/dashboard" element={<DashboardAdmin />} />

                    <Route path="/getActive" element={<GetActive />} />

                    {/*map start*/}
                    <Route path="/activityMap" element={<ActivityMap />} />
                    {/*map end*/}
                    <Route path={'/inbox'} element={<ChatMain/>}/>
                    {/*activities start*/}
                    <Route path={'/activities'} element={<Activities/>}/>
                    {/*activities end*/}
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/teams/:id" element={<TeamDetail/>}/>
                    <Route path="/teamInvite/:id" element={<TeamInvite/>}/>
                    <Route path="/invitations" element={<Invitations />} />

                    {/*create activity*/}
                    <Route path="/createActivity" element={<CreateActivities />} />
                    <Route path="/createActivityNext" element={<CreateActivityNext />} />

                    {/*settings*/}
                    <Route path="/settings" element={<Settings />} />

                    {/* Schedule */}
                    <Route path="/schedule" element={<Schedule />} />
                </Route>

                {/*home slider start*/}
                <Route path="/home" element={<Welcome />} />
                {/*home slider end*/}

                {/*sign_in and auth start*/}
                {/*<Route path="/signin" element={<Signin />} />*/}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signupCode" element={<SignUpCode />} />
                <Route path="/sendPassword/:id" element={<SendPassword />} />
                <Route path="/login" element={<Login />} />
                {/*sign_in and auth start*/}

                {/*activity start*/}
                <Route path="/select_activity" element={<SelectActivity />} />
                {/*activity end*/}

                {/*not found page start*/}
                <Route path="*" element={<PageNotFound />} />
                {/*not found page start*/}
            </Routes>
        )
    }

  return (
    <div>
        {(token && token !== undefined ) ? userDashboard() : notAuth()}
    </div>
  );
}

export default App;
