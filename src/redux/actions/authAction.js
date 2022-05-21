import axios from "axios";
import Swal from "sweetalert2";
import { API_URI, myUrl } from "../../utils/keys";
import {SIGN_IN_POST, GET_AUTH} from "../types";

export const goSignIn = (data) => {
    return (dispatch) => {
        axios
            .post(`${API_URI}/login`, data)
            .then((res) => {
                dispatch({ type: SIGN_IN_POST, payload: res.data });
                localStorage.setItem("myToken", res.data.token);
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
                window.location.href = myUrl;
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


// export function getAuth() {
//     return async dispatch => {
//         const response = await axios.get(`${API_URI}/auth/me`)
//         console.log(response,'8888888888888888888888888888888')
//         setTimeout(() => {
//             dispatch({
//                 type: GET_AUTH,
//                 payload: response.data
//             })
//         },500)
//
//     }
// }

// export function getAuth() {
//     return dispatch => {
//         axios.get(`${API_URI}/auth/me`, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('myToken')}`
//             },
//         })
//             .then(res => {
//                 setTimeout(() => {
//                     dispatch({type: GET_AUTH, payload: res.data})
//                     console.log(res.data,'7777777777777777777777777')
//                 },500)
//
//             })
//             .catch(e => console.log(e))
//     }
// }