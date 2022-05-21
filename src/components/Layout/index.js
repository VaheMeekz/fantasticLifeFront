// styles
import "./index.scss"

import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
    return (
        <div style={{
            display: "flex"
        }}>
            <Sidebar/>
            <main className="all_routes_style">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;