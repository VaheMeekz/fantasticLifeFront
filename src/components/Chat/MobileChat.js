import React, {useEffect, useState, useRef} from 'react';
import "./chatMedia.scss"
import searchIcon from "../../images/search.svg"
import Message from "./message/Message";
import telo from "../../images/telo.svg"
import {useDispatch, useSelector} from "react-redux";
import {
    getConversationMessagesAC, getNotificationsAC, getReceiversAction, getReceiversSearch
} from "../../redux/actions/chatAction";
import Skeleton from '@mui/material/Skeleton';
import Box from "@mui/material/Box";
import defaultAvatar from "../../images/defaultAvatar.svg"
import axios from "axios"
import {baseUrl} from "../../config/config";
import {io} from "socket.io-client";
import {userId} from "../../utils/keys";
import {getSingleUser} from "../../redux/actions/settingAction";
import goBackIcon from "../../images/arrowBack.svg"


const MobileChat = () => {
    const dispatch = useDispatch()
    const receivers = useSelector(state => state.chatReducer.receivers)
    const notificationsCount = useSelector(state => state.chatReducer.notificationsCount)
    const loading = useSelector(state => state.chatReducer.loading)
    const receiversSearchResult = useSelector(state => state.chatReducer.receiversSearchResult)
    const me = useSelector(state => state.settingsReducer.user)
    const socket = useRef();
    const messagesBox = useRef()
    const messages = useSelector(state => state.chatReducer.messages)
    const [allMessages, setAllMessages] = useState([])
    const [receiverId, setReceiverId] = useState(null)
    const id = userId;
    const [messagesLength, setMessageLength] = useState(0)
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState(null)
    const [openConversation, setOpenConversation] = useState(false)
    const [conversation, setConversation] = useState(null)
    const [receiver, setReceiver] = useState(null)
    useEffect(() => {
        dispatch(getReceiversAction(id, search))
        dispatch(getNotificationsAC(id))
        setAllMessages(messages)
        dispatch(getReceiversSearch(search))
        dispatch(getSingleUser())
        // setMessageLength(messages.length)
    }, [messages, search])

    useEffect(() => {
        setMessageLength(notificationsCount)
        setMessageLength(messagesLength + 1)
    }, [allMessages])

    useEffect(() => {
        messagesBox.current?.scrollIntoView({behavior: "smooth"})
    }, [allMessages])
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            let condidat = {
                sender: data.senderId, senderName: "Name", text: data.text, createdAt: Date.now(),
            }
            if (data.receiverId == id) {
                // setLength((prev) => parseInt(prev) + parseInt(1));
                console.log(allMessages, ".......")
                setAllMessages((prev) => [...prev, condidat])
                setMessageLength(messagesLength + 1)
            }
        });
    }, []);

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.emit("addUser", id);
    }, []);

    const getConversation = (id, item) => {
        setConversation(id)
        setReceiver(item)
        dispatch(getConversationMessagesAC(id))
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(getReceiversAction(id, search))
    }

    const createMessage = (e) => {
        e.preventDefault()
        if (message !== "") {
            const newMessage = {
                senderId: id,
                sender_id: id,
                receiverId: receiverId,
                text: message,
                senderImage: "image",
                senderName: "Vahe",
            };
            //broadcast
            socket.current.emit("sendMessage", newMessage);
            axios.post(`${baseUrl}/message`, {
                sender_id: id, receiver_id: receiverId, text: message
            })
                .then(function (response) {
                    // allMessages
                    setAllMessages((prev) => [...prev, newMessage])
                    setMessage("")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            createMessage();
        }
    };

    return (<div className="chatMain">
        {!openConversation && (<div className="receiversBox">
            <div className="inboxBox">
                <h2>Inbox</h2>
                <div className="notificationBox">
                    <p>
                        {messagesLength == 0 ? "new messages not found" : messagesLength} new
                    </p>
                </div>
            </div>
            <div className="searchBoxX">
                <input className="searchInpustX" placeholder="Search" value={search}
                       onChange={e => handleSearch(e)}/>
                {/*<img src={searchIcon} alt="search" className="searchIcon"/>*/}
            </div>
            <div className="receiversList" id="style-1">
                {!loading && receiversSearchResult.length !== 0 ? (receiversSearchResult.map(i => {
                            return (<div className={i.id == conversation ? "activeReceiver" : "receiver"}
                                         key={i.id}
                                         onClick={() => {
                                             getConversation(i.id, i);
                                             setReceiverId(i.id)
                                             setOpenConversation(true)
                                         }}>
                                {/*<div className="checkBox">*/}
                                {/*    <input type="checkbox"/>*/}
                                {/*</div>*/}
                                <div className="receiverImageBox">
                                    <img src={!i.image ? defaultAvatar : i?.image}
                                         alt="userAvatar"/>
                                </div>
                                <div className="receiverInfo">
                                    <div className="receiverCredentials">
                                        <div>
                                            <p>{i.firstName} {i.lastName} </p>
                                        </div>
                                        {/*<div>*/}
                                        {/*    <p className="dateCredentials">{i.Messages[i.Messages?.length - 1]?.createdAt.substr(5, 5)} {"  "}*/}
                                        {/*        {i?.Messages[i.Messages.length - 1]?.createdAt.substr(11, 5)}</p>*/}
                                        {/*</div>*/}
                                    </div>
                                    {/*<div className="shortMessageBox">*/}
                                    {/*    {i.Messages[i.Messages.length - 1]?.text}*/}
                                    {/*</div>*/}
                                </div>
                            </div>)
                        })

                    ) :

                    (receivers == null ? (<Box sx={{width: 500}}>
                        <Skeleton variant="rectangular" width={410} height={118} animation="wave"/>
                        <Skeleton variant="rectangular" width={410} height={118} animation="wave"/>
                    </Box>) : receivers.map(i => {
                        return (<div>
                            {i.Receiver.id == userId ? (<div
                                className={i.id == conversation ? "activeReceiver" : "receiver"}
                                key={i.id}
                                onClick={() => {
                                    getConversation(i.id, i.Sender);
                                    setReceiverId(i.sender_id);
                                    setOpenConversation(true)
                                }}>
                                {/*<div className="checkBox">*/}
                                {/*    <input type="checkbox"/>*/}
                                {/*</div>*/}
                                <div className="receiverImageBox">
                                    <img
                                        src={!i?.Sender?.image ? defaultAvatar : i?.Sender?.image}
                                        alt="userAvatar"/>
                                </div>
                                <div className="receiverInfo">
                                    <div className="receiverCredentials">
                                        <div>
                                            <p>{i.Sender?.firstName} {i.Sender?.lastName} </p>
                                        </div>
                                        <div>
                                            <p className="dateCredentials">{i.Messages[i.Messages?.length - 1]?.createdAt.substr(5, 5)} {"  "}
                                                {i?.Messages[i.Messages.length - 1]?.createdAt.substr(11, 5)}</p>
                                        </div>
                                    </div>
                                    <div className="shortMessageBox">
                                        {i.Messages[i.Messages.length - 1]?.text.substr(0, 5)}
                                    </div>
                                </div>
                            </div>) : (<div
                                className={i.id == conversation ? "activeReceiver" : "receiver"}
                                key={i.id}
                                onClick={() => {
                                    getConversation(i.id, i.Receiver);
                                    setReceiverId(i.receiver_id);
                                    setOpenConversation(true)
                                }}>
                                {/*<div className="checkBox">*/}
                                {/*    <input type="checkbox"/>*/}
                                {/*</div>*/}
                                <div className="receiverImageBox">
                                    <img
                                        src={!i?.Receiver?.image ? defaultAvatar : i?.Receiver?.image}
                                        alt="userAvatar"/>
                                </div>
                                <div className="receiverInfo">
                                    <div className="receiverCredentials">
                                        <div>
                                            <p>{i.Receiver?.firstName} {i.Receiver?.lastName} </p>
                                        </div>
                                        <div>
                                            <p className="dateCredentials">{i.Messages[i.Messages?.length - 1]?.createdAt.substr(5, 5)} {"  "}
                                                {i?.Messages[i.Messages.length - 1]?.createdAt.substr(11, 5)}</p>
                                        </div>
                                    </div>
                                    <div className="shortMessageBox">
                                        {i.Messages[i.Messages.length - 1]?.text.substr(0, 10)}...
                                    </div>
                                </div>
                            </div>)}
                        </div>)
                    }))}

            </div>
        </div>)}
        {openConversation && (<div className="dialogBox">
            {conversation !== null ? (<div className="receiverMessageInfo">
                <div className="goBackBox">
                    <button onClick={() => setOpenConversation(false)}>
                        <img src={goBackIcon} alt="goBack"/>
                    </button>
                </div>
                <div>
                    <img src={receiver !== null ? receiver.image : defaultAvatar} alt="receiverAvatar"
                         className="recImage"/>
                </div>
                <div className="receiverCredentialsDialog">
                    <h3>
                        {receiver !== null ? receiver.firstName : null}
                        {receiver !== null ? receiver.lastName : null}
                    </h3>
                    <p>  {receiver !== null ? receiver.email : null}</p>
                </div>
            </div>) : null}
            <hr/>
            <div className="messagesBox" id="style-1">
                {conversation == null ? <h1>Select Conversation</h1> : allMessages && allMessages.map(i => {
                    return (<Message own={id == i.sender_id ? true : false}
                                     key={i.id}
                                     message={i.text} image={receiver?.image}
                                     conversation={conversation}
                                     like={i.like}
                                     me={me}
                                     see={i.seen}
                                     id={i.id} receiver={i.receiver_id}
                    />)
                })}
                <div ref={messagesBox}/>
            </div>
            <hr/>
            <div className="messageWriteBox">
                <form>
                    <input value={message} onChange={e => setMessage(e.target.value)}
                           onKeyPress={handleKeypress}/>
                    <button onClick={createMessage} type="submit">
                        <img src={telo} alt="telo"/>
                    </button>
                </form>
            </div>
        </div>)}
    </div>);
};

export default MobileChat;