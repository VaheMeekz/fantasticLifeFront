// styles
import "./navbar.scss";

import React from "react";

// custom imports

import Burger from "../responsiveNavbar/Burger";
import Menu from "../responsiveNavbar/Menu";
import MessageSlice from "./MessageSlice";
import Notification from "./Notification";
import {useSelector} from "react-redux";
import default_avatar from "../../images/user.png"
import image from "../../images/Partly Cloudy.svg"
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate()
    useOnClickOutside(node, () => setOpen(false));
    const user = useSelector(state => state.getUsers.userData)


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    Wednesday - 01 June
                    <h4>Yerevan 30°C <img src={image} alt="image"/></h4>
                    <h4><i className="fa-solid fa-location-pin"></i>Yerevan Armenia</h4>
                </div>
                <div className="items">

                    <div ref={node}>
                        <Burger open={open} setOpen={setOpen}/>
                        <Menu open={open} setOpen={setOpen}/>
                    </div>

                    <div className="item">
                        <div className="item_language">
                            <MessageSlice/>
                            <Notification/>
                            <div>{user.firstName}</div>
                            <div className="user_avatar" style={{
                                cursor: "pointer"
                            }}><img src={user?.image == null ? default_avatar : user?.image}
                                    alt="user image" onClick={() => navigate('/settings')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;