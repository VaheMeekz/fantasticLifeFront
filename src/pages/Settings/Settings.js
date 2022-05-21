// styles
import "./Settings.scss"

import React from 'react';
import Navbar from "../../components/navbar/Navbar";

// custom imports
import upload_img from "../../images/upload_img.svg"

const Settings = () => {
    return (
        <div className="settings_section">
            <Navbar />

            <div className="settings_section_slice">
                <h4 className="settings_section_name">Welcome $`name`</h4>
                <div className="d-flex settings_section_main">
                    <div className="upload_image_slice">
                        <h5>Upload Or Select Photo</h5>
                        <br/>
                        <div className="upload_image_block">
                            <img src={upload_img} alt="image"/>
                        </div>
                    </div>


                    <div className="form_settings">
                        <h4>Add All The Information About You</h4>
                        <br/>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone <sup>*</sup></label>
                                <input type="phone" className="form-control" id="exampleFormControlInput1"
                                       placeholder="+374 99556633" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email <sup>*</sup></label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Birth <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="07/03/1999" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Gender <sup>*</sup></label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Address 1 <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Address 2 <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">City <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">State <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">County <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Postal Code <sup>*</sup></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                       placeholder="" />
                            </div>
                            <br/>
                            <button className="settings_btn" type="submit">
                                Save
                            </button>
                        </form>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;