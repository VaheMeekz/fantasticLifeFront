import "./sidebar.scss";
import {Link} from "react-router-dom";
import homeIcon from "../../images/homeImage.svg"
import invitationsIcon from "../../images/invitationsIcon.svg"
import activities from "../../images/Activities.svg"
import teams from "../../images/teams.svg"
import logOutIcon from "../../images/logout.svg"
import schedule from "../../images/Schedule .svg"
import inbox from "../../images/inbox.svg"
import settings from "../../images/settings.svg"
import * as React from "react";
import LogoutModal from "../modals/logoutModal";
import AccordionCustom from "../customAccordion/AccordionCustom";
import {accordionData} from "../../utils/content";


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

              <li>
                <img src={activities} />
                {accordionData.map(({ title, content, }) => (
                    <AccordionCustom title={title} content={content} key={title.toString()}/>
                ))}

              </li>

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


            {/*<a to="#" style={{ textDecoration: "none" }}>*/}
              <li>
                <img src={logOutIcon} />
                <span><LogoutModal /></span>
              </li>
            {/*</a>*/}
          </ul>
        </div>

      </div>
  );
};

export default Sidebar;