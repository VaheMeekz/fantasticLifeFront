import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-family: 'Poppins';
    font-style: normal;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
  span {
    font-size: 20px;
    color: red;
    margin: 0 auto;
  }
  i {
    color: darkred;
  }
`;

const StyledDiv = styled.div`
  position: relative;

  i {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

const Menu = ({ open ,setOpen}) => {
    return (
        <StyledMenu open={open}>
            <StyledDiv>
            <span>LOGO</span>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-rectangle-xmark"></i>
            </StyledDiv>
            <Link to="/">
                Dashboard
            </Link>
            <Link to="/list">
                Technics list
            </Link>
            <Link to="/products">
                Washing Machins
            </Link>
            <Link to="/change">
                change password
            </Link>
            <Link to="/dashboard">
                dashboard admin
            </Link>


        </StyledMenu>
    );
};

export default Menu;
