import React, { useState } from 'react';
import './customAccordion.scss'
import {Link} from "react-router-dom";

const AccordionCustom = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
            </div>
            {isActive && <div className="accordion-content">
                <Link to="activities" style={{ textDecoration: "none" }}>
                    <span  className="accordion_link">my activity</span>
                </Link><br/>
                <Link to="activityMap" style={{ textDecoration: "none" }}>
                    <span className="accordion_link">Search For Activity</span>
                </Link>
            </div>}
        </div>
    );
};

export default AccordionCustom;