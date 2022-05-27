import axios from "axios";
import Swal from "sweetalert2";
import { API_URI, myUrl } from "../../utils/keys";
import {SIGN_UP_POST, GO_SEND_CODE, ENTER_PASSWORD, LOGIN_DATA} from "../types";

export const goSignUp = (data) => {
    sessionStorage.setItem('dataUser',JSON.stringify(data))
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/checkNumber`, data)
            .then((res) => {
                dispatch({ type: SIGN_UP_POST, payload: res.data });
                localStorage.setItem("myTokenSport", res.data.token);
                localStorage.setItem("userId",res.data.id)
                console.log(res.data,'res')
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
                dispatch({ type: GO_SEND_CODE, payload: res.data });
                localStorage.setItem("myTokenSport", res.data.token);
                localStorage.setItem("userId",res.data.id)
                console.log(res.data,'res')
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
                        text: "Something went wrong!",
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