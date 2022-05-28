import React from 'react';
import "./TeamDetail.scss";
import user from "../../images/user.svg"
const TeamInfo = ({team}) => {
    return (
        <div className="infoBox">
            <div>
                <img src={team.image !== null ? team.image : user} alt="temImg" className="teamAvatar"/>
            </div>
            <div className="infoNameBox">
                <div>
                    <h4>{team.name}</h4>
                </div>
                <div>{team.Sport.sportName}</div>
                <hr className="line"/>
            </div>

        </div>
    );
};

export default TeamInfo;