import React, {useEffect} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleTeam} from "../../redux/actions/teamAction";
import Skeleton from "@mui/material/Skeleton";

const TeamDetailMain = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const team = useSelector(state => state?.teamReducer.singleTeam)
    const loading = useSelector(state => state?.teamReducer.loadSingle)

    useEffect(() => {
        dispatch(getSingleTeam(id))
    }, [])
    return (
        <div>
            <Navbar/>
            {
                loading ? ([...Array(15)].map((x, i) => <Skeleton variant="rectangular" width={500} height={30}
                                                                  className="loader"
                                                                  key={i}/>)) : <h2>go</h2>
            }
        </div>
    );
};

export default TeamDetailMain;