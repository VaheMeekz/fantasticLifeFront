// styles
import "./TeamDetail.scss"

import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleTeam} from "../../redux/actions/teamAction";
import Skeleton from "@mui/material/Skeleton";

// custom imports
import Navbar from "../../components/navbar/Navbar";
import new_members from "../../images/invite_new_members.png"

const TeamDetailMain = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const team = useSelector(state => state?.teamReducer.singleTeam)
    const loading = useSelector(state => state?.teamReducer.loadSingle)

    useEffect(() => {
        dispatch(getSingleTeam(id))
    }, [])

    console.log(team, "+++++++++++++++++")
    const SingleTeam = () => {
        return (
            <div className="team_slice">

                <div className="row">
                    <div className="col-md-6">
                        <div className="card-body">
                            <div className="d-flex justify-content-around status_slice">
                                <div className="card-title image_slice">
                                    <img src={team?.image} alt="image"/>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-around team_info_slice">
                                        <h3>{team?.name}</h3>
                                        <span><i className="fa-solid fa-pen-to-square"></i></span>
                                    </div>
                                    <br/>
                                    <span>{team?.Sport.sportName}</span>
                                    <hr/>
                                    <div className="">
                                        <h4>Status</h4>
                                        <div className="d-flex invited_count">
                                            <div><span className="invited_count_num">15</span><span>Invited</span></div>
                                            <div><span className="invited_count_num">60</span><span>Accepted</span>
                                            </div>
                                            <div><span className="invited_count_num">1</span><span>Declined</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="members_slice">
                        <div><span>Members </span><span
                            className="members_count"> {team?.UserTeams.length} members</span></div>
                        <div>
                            {/*<select className="form-select" aria-label="Default select example">*/}
                            {/*    <option selected>Sort By</option>*/}
                            {/*    <option value="1">One</option>*/}
                            {/*    <option value="2">Two</option>*/}
                            {/*    <option value="3">Three</option>*/}
                            {/*</select>*/}
                        </div>
                        <div className="members_slice_img">
                            <img src={new_members} alt="members" onClick={() => navigate(`/teamInvite/${id}`)}/>
                        </div>
                    </div>
                </div>
                <br/>

                {/*team table start*/}
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark thead_table">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            team?.UserTeams.map((i, index) => {
                                return (
                                    i.User.firstName == null ? null : (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td><img src={i.User.image} alt="avatar" style={{
                                                width: "50px",
                                                height: "50px"
                                            }}/></td>
                                            <td>{i.User.firstName}</td>
                                            <td>{i.User.lastName}</td>
                                            <td>{i.User.email}</td>
                                        </tr>)
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                {/*team table end*/}
            </div>
        )
    }


    return (
        <div>
            <Navbar/>
            {
                loading ? ([...Array(15)].map((x, i) => <Skeleton variant="rectangular" width={500} height={30}
                                                                  className="loader"
                                                                  key={i}/>)) : SingleTeam()
            }
        </div>
    );
};

export default TeamDetailMain;