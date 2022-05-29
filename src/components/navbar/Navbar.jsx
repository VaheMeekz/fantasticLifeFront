// styles
import "./navbar.scss";

import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

// custom imports

// import homeBottomIcon from "../../images/homeBottomIcon.svg"
import Burger from "../responsiveNavbar/Burger";
import Menu from "../responsiveNavbar/Menu";
import MessageSlice from "./MessageSlice";
import Notification from "./Notification";
import {settingsReducer} from "../../redux/reducers/settingReducer";
import {useSelector} from "react-redux";
// import {useEffect} from "@types/react";
import {getSingleUser} from "../../redux/actions/settingAction";
import default_avatar from "../../images/user.png"

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
  const user = useSelector(state => state.getUsers.userData)


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

          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

          <div className="item">
            <div className="item_language">
              <MessageSlice />
              <Notification />
              <div>{user.firstName}</div>
              <div className="user_avatar"><img src={user?.image == null ? default_avatar : user?.image} alt="user image"/></div>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
};

export default Navbar;