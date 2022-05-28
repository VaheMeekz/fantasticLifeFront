import React from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../pages/teams/Teams.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTeamAC} from "../../redux/actions/teamAction";
import {userId} from "../../utils/keys";



const TeamItem = ({members}) => {
    let id = userId;
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const deleteTeam = (teamId) => {
        dispatch(deleteTeamAC(id, teamId))
        setAnchorEl(null);
    }
    return (
        <div>
            <div className="card_card card_teams">
                <div className="card-body">
                    <div className="d-flex text-muted">
                        <div
                            className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                            <div className="team_img">
                                <img src={members.image} alt="team img"/>
                            </div>
                            <div>
                                <p className="mb-1">{members.name}</p>
                                <p className="text-truncate mb-0">{members.UserTeams?.length}<span
                                    className="text-success me-2"> <i
                                    className="ri-arrow-right-up-line align-bottom ms-1"></i></span> From
                                    previous
                                </p>
                            </div>
                            <div>
                                {/*<img src={dumbbells} alt="image"/>*/}
                                {members.Sport?.sportName}
                            </div>
                            <span className="absolute"><i
                                className="fa-solid fa-ellipsis-vertical" onClick={handleClick}></i></span>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={()=>navigate(`/teams/${members.id}`)}>View</MenuItem>
                                <MenuItem onClick={() => deleteTeam(members.id)}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamItem;