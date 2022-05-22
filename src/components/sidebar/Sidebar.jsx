import "./sidebar.scss";
import {Link, Route} from "react-router-dom";
import {useEffect, useState} from "react";

import homeIcon from "../../images/homeImage.svg"
import invitationsIcon from "../../images/invitationsIcon.svg"
import activities from "../../images/Activities.svg"
import teams from "../../images/teams.svg"
import logOutIcon from "../../images/logout.svg"
import schedule from "../../images/Schedule .svg"
import inbox from "../../images/inbox.svg"
import settings from "../../images/settings.svg"
// import Layout from "../Layout";
// import Dashboard from "../../pages/Dashboard/Dashboard";
// import List from "../../pages/list/List";
// import ChangePassword from "../../pages/changePassword/ChangePassword";
// import SendCode from "../../pages/sendCode/SendCode";
// import EnterCode from "../../pages/enterCode/EnterCode";
// import FinishChange from "../../pages/finishChange/FinishChange";
// import Single from "../../pages/single/Single";
// import UserDashboard from "../../pages/UserDashboard/UserDashboard";
// import NestedModal from "../modals/Modal";
import * as React from "react";
import LogoutModal from "../modals/logoutModal";
// import {useSelector} from "react-redux";
import axios from "axios";
import {API_URI, token} from "../../utils/keys";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LOGO</span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <img src={homeIcon} />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/invitations" style={{ textDecoration: "none" }}>
            <li>
              <img src={invitationsIcon} />
              <span>Invitations</span>
            </li>
          </Link>
          <Link to="/activities" style={{ textDecoration: "none" }}>
            <li>
              <img src={activities} />
              <span>Activities</span>
            </li>
          </Link>

          <Link to="teams" style={{ textDecoration: "none" }}>
            <li>
              <img src={teams} />
              <span>Teams</span>
            </li>
          </Link>
          <Link to="schedule" style={{ textDecoration: "none" }}>
            <li>
              <img src={schedule} />
              <span>Schedule</span>
            </li>
          </Link>
          <Link to="inbox" style={{ textDecoration: "none" }}>
            <li>
              <img src={inbox} />
              <span>Inbox</span>
            </li>
          </Link>
          <Link to="settings" style={{ textDecoration: "none" }}>
            <li>
              <img src={settings} />
              <span>Settings</span>
            </li>
          </Link>


          <a to="#" style={{ textDecoration: "none" }}>
            <li>
              <img src={logOutIcon} />
              <span><LogoutModal /></span>
            </li>
          </a>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;