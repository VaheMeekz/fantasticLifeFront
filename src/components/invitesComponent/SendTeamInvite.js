import React from 'react';
import "./invites.scss"
const SendTeamInvite = ({items}) => {
    return (
        <div className="sendersBox">
            {
                items?.map(i=>{
                    return(
                        <div key={i.id} className="senderBox">
                            <div className="senderImgBox">
                                <img src={i.User?.image} alt="avatar"/>
                            </div>
                            <div className="senderInfoBox">
                                <h5>{i.User?.firstName}</h5>
                                <p>{i.User?.email}</p>
                                <p>{i.createdAt.substr(0,10)}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SendTeamInvite;