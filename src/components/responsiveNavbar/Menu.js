import "./navbarStyle.scss"


import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import MessageSlice from "../navbar/MessageSlice";
import Notification from "../navbar/Notification";
import {useSelector} from "react-redux";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  background: #050A25;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  grid-gap: 35px;
  text-align: left;
  padding: 1.5rem;
  display: none;
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 1250px) {
    display: flex;
  }
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-family: 'Poppins';
    font-style: normal;
    margin: 0 auto;
    font-weight: 500;
    font-size: 27px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #46F5CA;
      transition: 0.4s;
    }
  }
  span {
    font-size: 20px;
    color: red;
    margin: 0 auto;
  }
  i {
    color: darkred;
    font-size: 40px;
  }
`;

const NameUser = styled.div`
    float: right;

`

const StyledDiv = styled.div`
  position: relative;

  i {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

const Menu = ({ open ,setOpen}) => {

    // const user = useSelector(state => state.getUsers.userData)
    return (
        <StyledMenu className="styled_menu_nav" open={open}>
            <StyledDiv>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-rectangle-xmark"></i>
            </StyledDiv>
            {/*<div>*/}
            {/*    <MessageSlice />*/}
            {/*    <Notification className="notification_mobile" />*/}
            {/*    <NameUser>{user.firstName}</NameUser>*/}
            {/*    <div className="responsive_navbar_image"><img src={user.image} alt=""/></div>*/}
            {/*</div>*/}
            <Link to="/">
                Dashboard
            </Link>
            <Link to="/invitations">
                Invitations
            </Link>
            <Link to="/activities">
               My activities
            </Link>
            <Link to="/activityMap">
                search for Activity
            </Link>
            <Link to="/teams">
                Teams
            </Link>
            <Link to="/schedule">
                Schedule
            </Link>
            <Link to="/inbox">
                Inbox
            </Link>
            <Link to="/settings">
                Settings
            </Link>
            <Link to="/settings">
                Settings
            </Link>


        </StyledMenu>
    );
};

export default Menu;
