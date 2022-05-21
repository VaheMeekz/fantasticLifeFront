// styles
import "./navbar.scss";

import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

// custom imports

import homeBottomIcon from "../../images/homeBottomIcon.svg"
import Burger from "../responsiveNavbar/Burger";
import Menu from "../responsiveNavbar/Menu";
import MessageSlice from "./MessageSlice";
import Notification from "./Notification";

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};


const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          {/*<img src={homeBottomIcon} alt="icon"/>*/}
          Monday - 11 January
          <h4>եղանակ ---- <i className="fa-solid fa-cloud-bolt"></i></h4>
          <h4><i className="fa-solid fa-location-pin"></i>Location</h4>
        </div>
        <div className="items">

          <div className="item">
            <div className="item_language">
              <MessageSlice />
              <Notification />
              <div>John Joe + avatar IO</div>
            </div>

          </div>

          {/*<div ref={node}>*/}
          {/*  <Burger open={open} setOpen={setOpen} />*/}
          {/*  <Menu open={open} setOpen={setOpen} />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;