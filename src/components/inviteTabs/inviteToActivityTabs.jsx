// styles

import "./inviteToActivityTabs.scss"
import * as React from 'react';
import {useState} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// custom imports
import contact_list from "../../images/contact_list.svg"
import email_logo from "../../images/email_Icon.svg"
import search from "../../images/search.svg";
import userImage from "../../images/user.svg";
import add from "../../images/add.svg";
import closeIcon from "../../images/close.svg";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getSingleTeam} from "../../redux/actions/teamAction";
import {createActivityInvite, createTeamInvite, inviteWithEmail} from "../../redux/actions/inviteAction";
import {userId} from "../../utils/keys";
import Swal from "sweetalert2";
import {allUsersAC} from "../../redux/actions/authAction";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function InviteToActivityTabs() {
    let {id} = useParams();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [email, setEmail] = useState("0")
    const [contactList, setContactList] = useState("0")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allItems = useSelector(state => state?.authReducer.allUsers)
    // const count = useSelector(state => state?.authReducer.count)
    const userLoading = useSelector(state => state?.authReducer.loading)
    const [show, setShow] = useState(1)
    const [searchVal, setSearch] = useState("")
    const [favorites, setFavorites] = useState([])
    const [contacts, setContacts] = useState(allItems)
    const [message, setMessage] = useState("")
    // const [email, setEmail] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [favoritesList, setFavoritesList] = useState([])
    console.log(favoritesList,"[][]");

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
            dispatch(createActivityInvite(id, userId, message, favoritesList))
            // navigate('/teams')
        } else {
            Swal.fire("Add message and Favorites")
        }
    }

    const handlerInviteEmail = () => {
        if (email !== "" && emailMessage !== "") {
            dispatch(inviteWithEmail(email, emailMessage))
            navigate('/teams')
        } else {
            Swal.fire("enter email and message")
        }
    }

    useEffect(() => {
        let list = []
        favorites?.map(i => list.push(i.id))
        setFavoritesList(list)
    }, [favorites])

    return (
        <Box className="tabs_slice" sx={{bgcolor: 'background.paper', width: 500}}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Invite" {...a11yProps(0)} />
                    <Tab label="View Response(25)" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <h6>Invite Members By</h6>
                    <div className="invite_members_block">
                        <div onClick={() => {
                            setContactList('1')
                            setEmail("0")
                        }
                        } className={`block_one ${contactList == "1" && 'block_active_class'}`}
                        >
                            <div className="block_one_contact">
                                <img src={contact_list} alt="image"/>
                            </div>
                            <span>Contact List</span>
                        </div>
                        <div onClick={() => {
                            setEmail("2")
                            setContactList("0")
                        }} className={`block_two ${email == "2" && 'block_active_class'}`}>
                            <div className="block_two_email">
                                <img src={email_logo} alt="image"/>
                            </div>
                            <span>Email</span>
                        </div>
                    </div>
                    <br/>
                    {contactList == "1" && (
                        <div className="contentBox content_box_invite">
                            <div className="searchBox">
                                <input type="text" placeholder="Search" value={searchVal}
                                       onChange={e => setSearch(e.target.value)}/>
                                <img src={search} alt="search" className="searchIcon"/>
                            </div>
                            <div className="contentSection">
                                {!userLoading ? contacts?.slice(0, 8).map(({id, firstName, image}) => {
                                    return (<div key={id} className="userBox">
                                        <div>
                                            <img src={image !== null ? image : userImage} alt="avatar"
                                                 className="avatar"/>
                                        </div>
                                        <div className="nameBoxik">
                                            <h4>
                                                {firstName}
                                            </h4>
                                        </div>
                                        <img src={add} alt="close" className="closeBtn"
                                             onClick={() => handleAddFavorites(id)}/>
                                    </div>)
                                }) : <h2>loading...</h2>}
                            </div>
                            <h3>Favorites</h3>
                            <div className="contentSection">

                                {favorites !== null ? favorites.map(({id, firstName, image}) => {
                                    return (<div key={id} className="userBox">
                                        <div>
                                            <img src={image !== null ? image : userImage} alt="avatar"
                                                 className="avatar"/>
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
                        </div>
                    )}
                    {email == "2" && <span>email list</span>}
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <h6>View Interested People In Your Activity</h6><br/>
                </TabPanel>

            </SwipeableViews>
        </Box>
    );
}