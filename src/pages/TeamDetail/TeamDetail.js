// styles
import "./TeamDetail.scss"

import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteTeam, deleteTeamMateAC, editTeamCredentials, getSingleTeam, getSingleTeamHistory
} from "../../redux/actions/teamAction";
import Skeleton from "@mui/material/Skeleton";
// custom imports
import Navbar from "../../components/navbar/Navbar";
import new_members from "../../images/invite_new_members.png"
import {userId} from "../../utils/keys";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";
import deleteIcon from "../../images/delete.svg"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #19A49C',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};
const TeamDetailMain = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [statusValue, setStatusValue] = useState()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [openDel, setOpenDel] = useState(false)
    const [currentId, setCurrentId] = useState(null)
    const team = useSelector(state => state?.teamReducer.singleTeam)
    const loading = useSelector(state => state?.teamReducer.loadSingle)
    const history = useSelector(state => state?.teamReducer.singleHistory)
    const [teamImage, setTeamImage] = useState(team?.image)

    const handleClose = () => setOpen(false);
    useEffect(() => {
        if (statusValue == "null") {
            dispatch(getSingleTeam(id))
            dispatch(getSingleTeamHistory(id))
        } else {
            dispatch(getSingleTeam(id, statusValue))
            dispatch(getSingleTeamHistory(id))
        }
    }, [statusValue])

    const handleFile = (e) => {
        let files = [];
        Object.keys(e.target.files).map((f) => {
            if (f === "Length") return;
            files.push(e.target.files[0]);
        });
        uploadImage(files);
    };

    let arrOfImages = [];
    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "armcodingImage");
        formData.append("cloud_name", "armcoding");
        axios
            .post(`https://api.cloudinary.com/v1_1/armcoding/image/upload`, formData)
            .then((res) => {
                arrOfImages.push(res.data.url);
                setTeamImage(res.data.url)
            });
    };

    const handlerEdit = () => {
        dispatch(editTeamCredentials(id, name, teamImage))
        setOpen(false)
    }

    const handlerDelete = () => {
        dispatch(deleteTeam(id))
    }

    const handlerDeleteTeamMate = () => {
        if (currentId !== null) {
            dispatch(deleteTeamMateAC(id, currentId))
            setOpenDel(false)
        }
    }

    const SingleTeam = () => {
        return (<div className="team_slice">

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
                                    {
                                        team?.creator_id == userId ? (<span><i className="fa-solid fa-pen-to-square"
                                                                               onClick={() => {
                                                                                   setOpen(true);
                                                                                   setTeamImage(team?.image)
                                                                               }}/></span>) : null
                                    }

                                </div>
                                <br/>
                                <span>{team?.Sport.sportName}</span>
                                <hr/>
                                <div className="">
                                    <h4>Status</h4>
                                    <div className="d-flex invited_count">
                                        <div><span
                                            className="invited_count_num">{history?.accepted}</span><span>Accepted</span>
                                        </div>
                                        <div><span
                                            className="invited_count_num">{history?.rejected}</span><span>Declined</span>
                                        </div>
                                        <div><span
                                            className="invited_count_num">{history?.pending}</span><span>Pending</span>
                                        </div>
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
                        <select className="form-select" onChange={e => setStatusValue(e.target.value)}>
                            <option value={"null"}>All</option>
                            <option value={true}>Online</option>
                            <option value={false}>Offline</option>
                        </select>
                    </div>
                    <div className="members_slice_img">
                        {
                            team?.creator_id == userId ? (<img src={new_members} alt="members" onClick={() => navigate(`/teamInvite/${id}`)}/>) : null
                        }

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
                        <th scope="col">Status</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">View</th>
                        {team?.creator_id == userId ? (<th scope="col">
                            <img src={deleteIcon} alt="delete"/>
                        </th>) : null}

                    </tr>
                    </thead>
                    <tbody>
                    {team?.UserTeams.map((i, index) => {
                        return (i.User.firstName == null ? null : (<tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <th scope="row">{i.User.id == userId || i.User?.status ?
                                <div className="online"></div> : <div className="ofline"></div>}</th>
                            <td><img src={i.User.image} alt="avatar" style={{
                                width: "50px", height: "50px"
                            }}/></td>
                            <td>{i.User.firstName}</td>
                            <td>{i.User.lastName}</td>
                            <td>{i.User.email}</td>
                            <td>
                                {(i.User.id != userId && team?.creator_id == userId) ? (<td>
                                    <button className="delBtn" onClick={() => navigate(`/user/${id}`) }>View
                                    </button>
                                </td>) : null}
                            </td>
                            {(i.User.id != userId && team?.creator_id == userId) ? (<td>
                                <button className="delBtn" onClick={() => {
                                    setCurrentId(i.User.id);
                                    setOpenDel(true)
                                }}>Delete
                                </button>
                            </td>) : null}

                        </tr>))
                    })}
                    </tbody>
                </table>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Edit</h3>
                    <div>
                        <img src={teamImage} alt="teamImage" style={{
                            width: "150px", height: "150px", margin: "10px 0"
                        }}/>
                    </div>
                    <div>
                        <button className="editBtn">
                            Edit Image
                            <input id="file-input" type="file" onChange={handleFile}/>
                        </button>
                    </div>
                    <div>
                        <input type="text" defaultValue={team.name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <button className="editBtn" onClick={handlerEdit}>Edit</button>
                    </div>
                    <hr/>
                    <div>
                        <h3 className="danger">Danger zone</h3>
                    </div>
                    <div>
                        <button className="DelBtn" onClick={handlerDelete}>Delete Team</button>
                    </div>
                </Box>
            </Modal>
            {/*team table end*/}
            <Modal
                open={openDel}
                onClose={() => setOpenDel(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <h3>Delete ?</h3>
                    </div>
                    <div>
                        <button className="editBtn" onClick={() => setOpenDel(false)}>Cancel</button>
                        <button className="DelBtn" style={{
                            marginLeft: "10px"
                        }} onClick={handlerDeleteTeamMate}>Delete
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>)
    }


    return (<div>
        <Navbar/>
        {loading ? ([...Array(15)].map((x, i) => <Skeleton variant="rectangular" width={500} height={30}
                                                           className="loader"
                                                           key={i}/>)) : SingleTeam()}
    </div>);
};

export default TeamDetailMain;