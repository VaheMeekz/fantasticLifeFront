import React, {useEffect, useState} from 'react';
import "./teamInvite.scss"
//
import Navbar from "../../components/navbar/Navbar";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleTeam} from "../../redux/actions/teamAction";
import Skeleton from "@mui/material/Skeleton";
import TeamInfo from "../TeamDetail/TeamInfo";
import list from "../../images/contact_list.svg"
import email from "../../images/email_Icon.svg"
import search from "../../images/search.svg"
import {allUsersAC} from "../../redux/actions/authAction";
import closeIcon from "../../images/inbox.svg"
// poxelu entaka !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import userImage from "../../images/user.svg"
import add from "../../images/inbox.svg"
// poxelu entaka !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Swal from "sweetalert2";
import {createTeamInvite, inviteWithEmail} from "../../redux/actions/inviteAction";
import {userId} from "../../utils/keys";

const TeamInvite = () => {

    let {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const team = useSelector(state => state?.teamReducer.singleTeam)
    const loading = useSelector(state => state?.teamReducer.loadSingle)
    const allItems = useSelector(state => state?.authReducer.allUsers)
    // const count = useSelector(state => state?.authReducer.count)
    const userLoading = useSelector(state => state?.authReducer.loading)
    const [show, setShow] = useState(1)
    const [searchVal, setSearch] = useState("")
    const [favorites, setFavorites] = useState([])
    const [contacts, setContacts] = useState(allItems)
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [emailMessage, setEmailMessage] = useState("")

    useEffect(() => {
        dispatch(getSingleTeam(id))
        dispatch(allUsersAC(searchVal))
    }, [searchVal])
    const handleAddFavorites = (id) => {
        let newList = contacts?.filter(j => j.id !== id)
        setContacts(newList)
        contacts.filter(i => i.id == id && setFavorites([...favorites, i]))
    }

    const handleDeleteFavorite = (id) => {
        const newList = favorites.filter(i => i.id !== id)
        setFavorites(newList)
    }
    useEffect(() => {
        setContacts(allItems)
    }, [allItems])

    const handleAdd = () => {
        if (message !== "" && favorites.length !== 0) {
            dispatch(createTeamInvite(id, favorites[0].id, message, userId))
            navigate('/teams')
        } else {
            Swal.fire("Add message and Favorites")
        }
    }

    const handlerInviteEmail = () => {
        if(email !== "" && emailMessage !== ""){
            dispatch(inviteWithEmail(email, emailMessage))
            navigate('/teams')
        }else {
            Swal.fire("enter email and message")
        }
    }

    return (<div>
        <Navbar/>
        <div className="box">
            <h2>Send Invitation</h2>
            {loading ? ([...Array(15)].map((x, i) => <Skeleton variant="rectangular" width={500} height={30}
                                                               className="loader"
                                                               key={i}/>)) : <TeamInfo team={team}/>}
            <div className="inviteBox">
                <h6>Invite members by</h6>
                <div className="inviteTypesBox">
                    <div className={show === 1 ? "activeTab inviteTypeItem" : "inviteTypeItem"}
                         onClick={() => setShow(1)}>
                        <div className="listBox">
                            <img src={list}/>
                        </div>
                        <div>contact list</div>
                    </div>
                    <div className={show === 2 ? "activeTab inviteTypeItem" : "inviteTypeItem"}
                         onClick={() => setShow(2)}>
                        <div className="emailBox">
                            <img src={email}/>
                        </div>
                        <div>email</div>
                    </div>
                </div>
                {show === 1 ? (<div className="contentBox">
                    <div className="searchBox">
                        <input type="text" placeholder="Search" value={searchVal}
                               onChange={e => setSearch(e.target.value)}/>
                        <img src={search} alt="search" className="searchIcon"/>
                    </div>
                    <div className="contentSection">
                        {!userLoading ? contacts?.slice(0, 8).map(({id, firstName, image}) => {
                            return (<div key={id} className="userBox">
                                <div>
                                    <img src={image !== null ? image : userImage} alt="avatar" className="avatar"/>
                                </div>
                                <div className="nameBoxik">
                                    <h4>
                                        {firstName}
                                    </h4>
                                </div>
                                <img src={add} alt="close" className="closeBtn" onClick={() => handleAddFavorites(id)}/>
                            </div>)
                        }) : <h2>loading...</h2>}
                    </div>
                    <h3>Favorites</h3>
                    <div className="contentSection">

                        {favorites !== null ? favorites.map(({id, firstName, image}) => {
                            return (<div key={id} className="userBox">
                                <div>
                                    <img src={image !== null ? image : userImage} alt="avatar" className="avatar"/>
                                </div>
                                <div className="nameBoxik">
                                    <h4>
                                        {firstName}
                                    </h4>
                                </div>
                                <img src={closeIcon} alt="close" className="closeBtn"
                                     onClick={() => handleDeleteFavorite(id)}/>
                            </div>)
                        }) : <h2>Your Favorites</h2>}
                    </div>
                    <div className="messageTextsBox">
                        <textarea cols="72" rows="10" placeholder="write your message"
                                  className="messageTexts" value={message} onChange={e => setMessage(e.target.value)}/>
                        <button onClick={handleAdd}>Send</button>
                    </div>
                </div>) : <div className="sendInviteEmail">
                    <input type="email" placeholder="Enter email" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <br/>
                    <textarea name="" id="" cols="50" rows="10" placeholder="Message" value={emailMessage}
                              onChange={e => setEmailMessage(e.target.value)}/>
                    <br/>
                    <button onClick={handlerInviteEmail}>Send</button>
                </div>}

            </div>
        </div>
    </div>);
};

export default TeamInvite;