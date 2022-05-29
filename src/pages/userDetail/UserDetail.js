import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailUserAC} from "../../redux/actions/authAction";

const UserDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state?.authReducer.otherUser)
    const loading = useSelector(state => state?.authReducer.otherLoading)

    useEffect(()=>{
        dispatch(detailUserAC(id))
    },[])
    return (
        <div>
            user
            {
                !loading ? <p>{user.firstName}</p> : <p>loading...</p>
            }
        </div>
    );
};

export default UserDetail;