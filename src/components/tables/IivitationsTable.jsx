// styles
import "./tables.scss"

import React from 'react';

// custom imports

import abela from "../../images/abela.svg"


const InvitationsTable = () => {

    const array = [
        {id:1,name:"Abela",status:"Accept",point:50},
        {id:2,name:"Test",status:"Accept",point:12},
        {id:3,name:"Vahe",status:"Accept",point:5},
        {id:4,name:"Stepan",status:"Accept",point:10},
        {id:5,name:"Moxrotik",status:"Accept",point:15},
    ]
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card_invitations_activity">
                    <div className="card-body">
                        <div className="d-flex justify-content-around">
                            <h4 className="card-title mb-4">View Sent Invitations</h4>
                            <span className="card_invitations_activity_see">See All</span>
                        </div>


                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <tbody>

                                {
                                    array.map((users) => {
                                        return(
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1"/>
                                                        <label className="form-check-label" htmlFor="customCheck1"></label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src={abela} alt="user"
                                                         className="avatar-xs rounded-circle"/>
                                                </td>
                                                <td>
                                                    <p className="mb-1 font-size-12">{users.name}</p>
                                                    <h5 className="font-size-15 mb-0">{users.status}</h5>
                                                </td>
                                                <td>({users.point})</td>
                                            </tr>
                                        )
                                    })
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default InvitationsTable;