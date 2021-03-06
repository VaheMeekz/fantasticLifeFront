import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media only screen and (min-width:1250px) {
    display: none;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    //background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: 65%;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: 75%;
    }
  }
`;

// const Notification = styled.i

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div style={{color:"white"}} />
            <div style={{color:"white"}} />
            <div style={{color:"white"}} />
        </StyledBurger>
    );
};

export default Burger;
