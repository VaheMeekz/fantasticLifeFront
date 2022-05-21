// styles
import "./dashboard.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import ActivatesStatistic from "../../components/activatesStatistic/activatesStatistic";
import MyActivities from "../../components/myActivities/myActivities";

// custom imports

const Dashboard = () => {
    return (
        <>
            <Navbar/>
        <div className="admin_dashboard">
            <ActivatesStatistic />
            <MyActivities />
        </div>

        </>
    );
};

export default Dashboard;