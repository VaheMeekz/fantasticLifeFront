import axios from "axios";
import Swal from "sweetalert2";
import { API_URI, myUrl } from "../../utils/keys";
import {SIGN_UP_POST, GET_AUTH} from "../types";

export const goSignUp = (data) => {
    alert('yaya')
    sessionStorage.setItem('dataUser',JSON.stringify(data))
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/checkNumber`, data)
            .then((res) => {
                dispatch({ type: SIGN_UP_POST, payload: res.data });
                localStorage.setItem("myTokenSport", res.data.token);
                console.log(res.data,'res')
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(res.data,'res.datares.datares.data')
                // axios.get(`${API_URI}/auth/me`, {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem('myToken')}`
                //     },
                // }).then(res => {
                //         dispatch({type: GET_AUTH, payload: res.data})
                // })
                //     .catch(e => console.log(e))
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
    alert('yaya')
    return (dispatch) => {
        axios
            .post(`${API_URI}/users/`, data)
            .then((res) => {
                // dispatch({ type: SIGN_UP_POST, payload: res.data });
                localStorage.setItem("myTokenSport", res.data.token);
                console.log(res.data,'res')
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(res.data,'res.datares.datares.data')
                // axios.get(`${API_URI}/auth/me`, {
                //     headers: {
                //         Authorization: `Bearer ${localStorage.getItem('myToken')}`
                //     },
                // }).then(res => {
                //         dispatch({type: GET_AUTH, payload: res.data})
                // })
                //     .catch(e => console.log(e))
                // window.location.href = `${myUrl}/signupCode`;
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
