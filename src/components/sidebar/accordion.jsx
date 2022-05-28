// styles
import "./sidebar.scss"

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import activities from "../../images/Activities.svg";

export default function AccordionSidebar() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Activities</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Link to="activities" style={{ textDecoration: "none" }}>
                            <span  className="accordion_link">my activity</span>
                    </Link><br/>
                    <Link to="activityMap" style={{ textDecoration: "none" }}>
                        <span className="accordion_link">Search For Activity</span>
                    </Link>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}