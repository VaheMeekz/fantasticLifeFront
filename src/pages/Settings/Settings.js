// styles
import "./Settings.scss"

import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAvatar,
    changeCredentials,
    changePasswordAc,
    deactiveteAccount,
    getSingleUser
} from "../../redux/actions/settingAction";
import Skeleton from "@mui/material/Skeleton";

// custom imports
import upload_img from "../../images/upload_img.svg"
import Navbar from "../../components/navbar/Navbar";
import upload from "../../images/upload.svg"
import eye from "../../images/eye.svg"
import top from "../../images/arrowTop.svg"
import bottom from "../../images/arrowBottom.svg"


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
const Settings = () => {
    let id = 1
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.settingsReducer.user)
    const loading = useSelector(state => state.settingsReducer.loading)
    const avatar = useSelector(state => state.settingsReducer.avatar)
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmNew, setConfirmNew] = useState("")
    const [openOld, setOpenOld] = useState(false)
    const [openNew, setOPenNew] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [openChange, setOpenChange] = useState(false)

    //changed values
    const [data, setData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        gender: user?.gender,
        address1: user?.address1,
        address2: user?.address2,
        telegram: user?.telegram,
        whatsapp: user?.whatsapp,
        facebook: user?.facebook,
        tiktok: user?.tiktok,
        instagram: user?.instagram,
        linkedin: user?.linkedin,
        youtube: user?.youtube,
        birth: user?.birth,
        city: user?.city,
        country: user?.country,
        state: user?.state,
        postalCode: user?.postalCode
    })

    useEffect(() => {
        dispatch(getSingleUser(id))
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
                dispatch(changeAvatar(res.data.url))
            });
    };

    const changeValues = (e) => {
        data[e.target.name] = e.target.value
        setData(data)
    }
    const handleSend = (e) => {
        e.preventDefault()
        dispatch(changeCredentials({...data, id, image: avatar}))
    }

    const handlerOpenOld = () => {
        setOpenOld(!openOld)
    }

    const handlerOpenNew = () => {
        setOPenNew(!openNew)
    }

    const handlerOpenConfirm = () => {
        setOpenConfirm(!openConfirm)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const changePass = () => {
        if (newPass == confirmNew) {
            dispatch(changePasswordAc(id, oldPass, newPass))
        }
    }

    const handlerDeactiveteAccount = () => {
        dispatch(deactiveteAccount(id))
        setOpen(false)
        navigate('/')
    }


    const handlerOpenChange = () => {
        setOpenChange(!openChange)
    }
    return (
        <div className="settings_section">
            <Navbar/>
            <div className="settings_section_slice">
                <h4 className="settings_section_name">Welcome {user?.firstName}</h4>
                <div className="d-flex settings_section_main">
                    <div className="upload_image_slice">
                        <h5>Upload Or Select Photo</h5>
                        <br/>
                        <div className="upload_image_block">
                            {
                                loading ? <Skeleton variant="circular" width={150} height={150}/> :
                                    (<div className="avatarBox">
                                            <img src={avatar !== null ? avatar : upload_img} alt="image"/>
                                            <div className="uploadBtn">
                                                <label htmlFor="file-input">
                                                    <img src={upload} alt="upload"/>
                                                </label>
                                                <input id="file-input" type="file" onChange={handleFile}/>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>

                    <div className="form_settings">
                        <h4>Add All The Information About You</h4>
                        <br/>
                        {
                            loading ? (
                                [...Array(15)].map((x, i) =>
                                    <Skeleton variant="rectangular" width={500} height={30} className="loader" key={i}/>
                                )
                            ) : (
                                <form onChange={changeValues} onSubmit={handleSend}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">First
                                            name<sup>*</sup></label>
                                        <input type="text" className="form-control" name="firstName"
                                               placeholder="first name" defaultValue={user.firstName}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Last
                                            name<sup>*</sup></label>
                                        <input required type="last name" className="form-control"
                                               id="exampleFormControlInput1"
                                               placeholder="last name" name="lastName" defaultValue={user.lastName}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Email <sup>*</sup></label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                               placeholder="name@example.com" name="email" defaultValue={user.email}/>
                                    </div>
                                    <div className="mb-3">
                                        {/*communication*/}
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Date Of
                                            Birth <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="07/03/1999" name="birth" defaultValue={user.birth}/>
                                    </div>
                                    <div className="mb-3">
                                        {/*skype*/}
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Gender <sup>*</sup></label>
                                        <select className="form-select" aria-label="Default select example"
                                                name="gender">
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Address
                                            1 <sup>*</sup></label>
                                        <input type="text" className="form-control" name="address1"
                                               placeholder="address" defaultValue={user.address1}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Address
                                            2 <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="" defaultValue={user.address2} name="address2"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">City <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="city" name="city" defaultValue={user.city}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">State <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="state" name="state" value={user.state}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">County <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="country" name="country" defaultValue={user.country}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Postal
                                            Code <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="postal code" name="postalCode"
                                               defaultValue={user.postalCode}/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="telegram" name="telegram"
                                               defaultValue={user.telegram}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="whatsapp" name="whatsapp"
                                               defaultValue={user.whatsapp}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="facebook" name="facebook"
                                               defaultValue={user.facebook}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="tiktok" name="tiktok"
                                               defaultValue={user.tiktok}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="instagram" name="instagram"
                                               defaultValue={user.instagram}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="linkedin" name="linkedin"
                                               defaultValue={user.linkedin}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1"
                                               className="form-label">Telegram <sup>*</sup></label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="youtube" name="youtube"
                                               defaultValue={user.youtube}/>
                                    </div>
                                    <br/>
                                    <button className="settings_btn" type="submit">
                                        Save
                                    </button>
                                </form>
                            )
                        }
                        <div className="mt-3">
                            <hr/>
                            <div className="openBox">
                                <h4>Change Password</h4>
                                <div>
                                    {
                                        openChange ? <img src={top} alt="top" onClick={handlerOpenChange}/> :
                                            <img src={bottom} alt="bottom" onClick={handlerOpenChange}/>

                                    }
                                </div>
                            </div>

                            {
                                openChange ? (
                                    <div>
                                        <div className="mb-3 passBox">
                                            <label htmlFor="exampleFormControlInput1"
                                                   className="form-label">Current password <sup>*</sup></label>
                                            <input className="form-control" placeholder="password"
                                                   type={openOld ? "text" : "password"} value={oldPass}
                                                   onChange={e => setOldPass(e.target.value)}/>
                                            <img src={eye} alt="eye" className="eye" onClick={handlerOpenOld}/>
                                        </div>
                                        <div className="mb-3 passBox">
                                            <label htmlFor="exampleFormControlInput1"
                                                   className="form-label">New password <sup>*</sup></label>
                                            <input type={openNew ? "text" : "password"} className="form-control"
                                                   placeholder="password"
                                                   value={newPass} onChange={e => setNewPass(e.target.value)}
                                            />
                                            <img src={eye} alt="eye" className="eye" onClick={handlerOpenNew}/>
                                        </div>
                                        <div className="mb-3 passBox">
                                            <label htmlFor="exampleFormControlInput1"
                                                   className="form-label">Confirm new password <sup>*</sup></label>
                                            <input type={openConfirm ? "text" : "password"} className="form-control"
                                                   placeholder="password"
                                                   value={confirmNew} onChange={e => setConfirmNew(e.target.value)}
                                            />
                                            <img src={eye} alt="eye" className="eye" onClick={handlerOpenConfirm}/>
                                        </div>
                                        <div className="mb-3">
                                            <button className="settings_btn" onClick={changePass}>Change password
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            }

                        </div>
                        <hr/>
                        <div className="mt-3">
                            <h4>Danger zone</h4>
                            <button className="deactivateBtn" onClick={handleOpen}>Deactivate account</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h2>
                            Deactivate account ?
                        </h2>
                    </Typography>
                    <DialogActions>
                        <button className="deactivateBtn" onClick={handlerDeactiveteAccount}>Yes</button>
                        <button className="cancleBtn" onClick={handleClose}>No</button>
                    </DialogActions>
                </Box>
            </Modal>
        </div>
    );
};

export default Settings;