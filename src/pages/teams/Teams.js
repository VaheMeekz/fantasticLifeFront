// styles
import "./Teams.scss"

import React, {useEffect} from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import teamImg from "../../images/teamimage.svg"
import creteImage from "../../images/createImage.svg"
import {useDispatch, useSelector} from "react-redux";
import {createTeam, deleteTeamAC, getSingleUser} from "../../redux/actions/teamAction";
import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {getSportsThunk} from "../../redux/actions/activityAction";
import {useState} from "react";
import axios from "axios";
import {userId} from "../../utils/keys";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import TeamItem from "../../components/teamItem/TeamItem";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #19A49C',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};


const Teams = () => {
    let id = userId;
    const dispatch = useDispatch();
    const sports = useSelector(state => state.ActivityReducer.sports)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [sport, setSport] = useState(null);
    const [image, setImage] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const teams = useSelector(state => state?.teamReducer.myTeams)
    const loading = useSelector(state => state?.teamReducer.loading)

    useEffect(() => {
        dispatch(getSingleUser(id))
        dispatch(getSportsThunk())
    }, [])


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
                setImage(res.data.url)
            });
    };

    const handleCreateTeam = () => {
        if (name !== "" && image !== null && sport !== null) {
            dispatch(createTeam(name, image, sport, id))
            setOpen(false)
            setName("")
            setImage("")
            setSport("")
        }
    }



    return (<div>
        <Navbar/>

        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card_card card_team">
                        <div className="card-body">
                            <div className="d-flex text-muted">
                                <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                    <img className="team_slice_image" src={teamImg} alt="team"/>
                                    <p className="text-truncate mb-0 team_title">
                                        My Teams
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card_card card_team">
                        <div className="card-body">
                            <div className="d-flex text-muted">
                                <div className="flex-shrink-0 me-3 align-self-center">
                                </div>
                                <div className="p-2 flex-grow-1 overflow-hidden">
                                    <p className="text-truncate mb-0">
                                        Sort by
                                    </p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card_card card_team">
                        <div className="card-body">
                            <div className="p-4 d-flex text-muted">
                                <div className="flex-shrink-0 me-3 align-self-center">
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <img className="card_team_create" src={creteImage} alt="image" onClick={handleOpen}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                {loading ? ([...Array(15)].map((x, i) => <Skeleton variant="rectangular" width={500} height={30}
                                                                   className="loader"
                                                                   key={i}/>)) : teams?.map((members) => {
                    return (<div key={members.id} className="col-xl-4 col-md-6 col-sm-12">
                       <TeamItem members={members}/>
                    </div>)
                })}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            CreateNewTeam
                        </Typography>
                        <Box>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Team name</label>
                                <input type="text" className="form-control" value={name}
                                       onChange={e => setName(e.target.value)}
                                       placeholder="Name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Team sport</label>
                                <select className="form-select" aria-label="Default select example"
                                        onChange={e => setSport(e.target.value)}>
                                    <option value={null}>Open this select menu</option>
                                    {sports && sports?.map(i => {
                                        return (<option value={i.id} key={i.id}>{i.sportName}</option>)
                                    })}
                                </select>
                            </div>
                            <div className="uploadBox">
                                <div className="first">
                                    <button color="secondary" variant="contained" component="label">
                                        Upload
                                        <input type="file" onChange={handleFile}/>
                                    </button>
                                </div>
                                <div className="second">
                                    <img src={image !== null ? image : null}/>
                                </div>
                            </div>
                            <div>
                                <button className="settings_btn" onClick={handleCreateTeam}>Create</button>
                            </div>

                        </Box>
                    </Box>
                </Modal>
            </div>
        </div>

    </div>);
};

export default Teams;