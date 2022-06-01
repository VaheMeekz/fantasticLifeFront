import axios from "axios";
import Swal from "sweetalert2";
import {API_URI, myUrl, userId} from "../../utils/keys";
import {
    SIGN_UP_POST,
    GO_SEND_CODE,
    ENTER_PASSWORD,
    LOGIN_DATA,
    GET_ALL_USERS,
    GET_USER_DETAIL, GET_USER_DETAIL_HOURS
} from "../types";
import {baseUrl} from "../../config/config";
export const goSignUp = (data) => {
    sessionStorage.setItem('dataUser',JSON.stringify(data))
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/checkNumber`, data)
            .then((res) => {
                dispatch({ type: SIGN_UP_POST, payload: res.data });
                // localStorage.setItem("myTokenSport", res.data.token);
                // localStorage.setItem("userId",res.data.id)
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                window.location.href = `${myUrl}/signupCode`;
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};

export const goSendCode = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/`, data)
            .then((res) => {
                if(res.data.message == "Something went wrong") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500,
                    });

                    return
                }
                dispatch({ type: GO_SEND_CODE, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};

export const enterPassword = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/credentials`, data)
            .then((res) => {
                if(res.data.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500,
                    });
                    return
                }
                dispatch({ type: ENTER_PASSWORD, payload: res.data });
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};

export const goLogin = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/login`, data)
            .then((res) => {
                if(res.data.error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "user whit this email already exist !!",
                        timer: 1500,
                    });
                    return
                }
                dispatch({ type: LOGIN_DATA, payload: res.data });
                localStorage.setItem("myTokenSport", res.data.token);
                localStorage.setItem("userId",res.data.id)
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });

                window.location.href = `${myUrl}`;
            })
            .catch((e) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    timer: 1500,
                });
            });
    };
};

export const logoutAC = (id) => {
    return async (dispatch)=>{
        const response = await axios.post(`${baseUrl}/users/logout`, {
            id
        })
    }
}

export const allUsersAC = (search) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/users`,{
            params:{
                search
            }
        })
        dispatch({
            type:GET_ALL_USERS,
            payload:response
        })
    }
}

export const detailUserAC = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/users/single`, {
            params: {
                id
            }
        });
        dispatch({
            type: GET_USER_DETAIL,
            payload: response.data,
        });
    };
}

export const detailUserHourAC = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/activity/myActivity`, {
            params: {
                id:userId
            }
        });
        dispatch({
            type: GET_USER_DETAIL_HOURS,
            payload: response.data,
        });
    };
}