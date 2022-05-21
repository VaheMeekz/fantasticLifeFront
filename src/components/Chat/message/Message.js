import React, {useEffect, useRef, useState} from 'react';
import "../Chat.scss"
import minin from "../../../images/boyMessage.svg"
import smile from "../../../images/smile.svg"
import sirt from "../../../images/sirt.svg"
import disSirt from "../../../images/disSirt.svg"
import lampushka from "../../../images/lapushka.svg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import del from "../../../images/delete.svg"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import {baseUrl} from "../../../config/config";
import check from "../../../images/boal.svg"
import dubleCheck from "../../../images/boal.svg"
import {io} from "socket.io-client";

const Message = ({message, own, id, image, like, see}) => {
    const userId = localStorage.getItem("id")
    const socket = useRef();
    const [seen, setSeen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentSmile, setSmile] = useState(null)
    const [openDel, setOPenDel] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const smiles = [{id: 1, icon: sirt}, {id: 2, icon: disSirt}, {id: 3, icon: lampushka},]
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        see && setSeen(true)
        socket.current = io("ws://localhost:8900");
        let sendetData = {messageId: id}
        id !== undefined && socket.current.emit("seen", sendetData);
        socket.current.on("getSeen", (data) => {
            if (data.messageId == id) {
                setSeen(true)
            }
        })
    }, []);

    const handleSmile = (id) => {
        axios.post(`${baseUrl}/message/like`, {
            message_id: id, user_id: userId, like: id
        })
            .then(function (response) {
                setSmile(id)
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleDeleteSmil = () => {
        axios.post(`${baseUrl}/message/unlike`, {
            message_id: id, user_id: userId
        })
            .then(function (response) {
                setSmile(null)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleDelete = () => {
        axios.post(`${baseUrl}/message/unset`, {
            sender_id: userId, message_id: id
        })
            .then(function (response) {
                setDeleted(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        message == "Message deleted ..." && setDeleted(true)
        setSmile(like)
    }, [like])

    return (<div className={own ? "message own" : "message"}>
        <div className="imgBox">
            {
                own ? <img src={minin} alt="avatar"/> : <img src={image} alt="image"/>
            }
        </div>
        {!deleted ? (<div className={own ? "ownMessageTextBox" : "messageTextBox"}>
            {message}
            <hr className="hr"/>
            <div className="dateBox">
                <div>13.06 10:27</div>
                {!own ? (<div>
                    {
                        currentSmile == null ?
                            <img src={smile} alt="smile" className="like" onClick={handleClick}
                                 style={{marginLeft: "5px"}}/> :
                            <img src={smiles.filter(i => i.id == currentSmile)[0]?.icon} className="like" alt="smile"
                                 onClick={handleDeleteSmil} style={{marginLeft: "5px"}}/>}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {smiles.map(i => {
                            return (<MenuItem key={i.id} onClick={() => handleSmile(i.id)}><img
                                src={i.icon}
                                alt="smile"/></MenuItem>)
                        })}
                    </Menu>
                </div>) : (<div>
                    <img src={del} alt="delete" className="like" onClick={() => {
                        setOPenDel(true);
                    }} style={{marginLeft: "5px"}}/>
                    {
                        like == null &&
                        <img src={smiles.filter(i => i.id == like)[0]?.icon} className="like" alt="smile"
                             style={{marginLeft: "5px"}}/>
                    }
                </div>)
                }
                <Dialog
                    open={openDel}
                    onClose={() => setOPenDel(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <h2>
                            Delete Message ?
                        </h2>
                    </DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={() => setOPenDel(false)} className="cancelBtn">Cancel</button>
                        <button onClick={handleDelete} className="messageDeleteBtn">
                            Yes
                        </button>
                    </DialogActions>
                </Dialog>
                <div>
                    {own && seen ? <img src={dubleCheck} alt="duble"/> : <img src={check} alt="check"/>}
                </div>
            </div>
        </div>) : <div className="unsetBox">Message deleted ...</div>}
    </div>);
};

export default Message;