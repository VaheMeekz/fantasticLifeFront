// styles
import "./SelectActivity.scss"

import React from 'react';

// custom styles

import select from "../../images/select_activity.png"

const SelectActivity = () => {
    return (
        <div className="select_activity">
            <div className="wrapper">
                <div className="title">
                    Select Your Favourite  Activities
                </div>

                <div className="container">
                    <label className="option_item">
                        <input type="checkbox" className="checkbox" />
                            <div className="option_inner activity">
                                <div className="tickmark"><i
                                    className="fa-solid fa-circle-check"
                                    style={{color:"green",fontSize:"35px"}}
                                ></i></div>
                                <div className="icon"><i className="fab fa-facebook-f"></i></div>
                            </div>
                    </label>
                </div>
                <button className="btn">
                    Next
                </button>

            </div>
            <div className="image_slice">
                <img src={select} alt="image"/>
            </div>

            <div className="effect-wrap">
                <div className="effect effect-3">

                </div>
            </div>
        </div>
    );
};

export default SelectActivity;