// styles
import "./Activities.scss"

import React, {useState} from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import location from "../../images/location.svg"
import LocationPickerExample from "../../components/map/LPicker";
import  location_adderss from "../../images/pin.svg"
import open from "../../images/open.svg"
import chopen from "../../images/chopen.svg"
import ActivatySlice from "../../components/activity/ActivatySlice";




export const CreateActivities = () => {
    const [openMap,setOpenMap] = useState(false)

    return (
        <div className="activity_section">
            <Navbar/>

            <div className="container-fluid">
                <div className="row activity_section_block d-flex justify-content-between">
                    <div className="col-xl-4 col-md-12 col-sm-12">
                        <div className="card_activities card_teams">
                            <div className="card-body card_activities_body_two">
                                <div className="d-flex text-muted">
                                    <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                        <div>
                                            <img src={location} alt="image"/>
                                        </div>
                                        <p className="text_activity_long_review text-truncate mb-0">
                                            Location
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card card_team">
                            <div className="card-body">
                                <div className="p-1 d-flex text-muted input_slice_absolute">
                                    <div className="flex-shrink-0 me-3 align-self-center">
                                    </div>
                                    <input id="Search" type="search" placeholder="Search For An Activity"/>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
            <div className="map_section_slice">
                Select your Address <img
                                        className="map_select_img"
                                        onClick={() => setOpenMap(!openMap)}
                                        src={location_adderss}
                                        alt="location"/>
            {
                openMap == true  ? <LocationPickerExample /> : null
            }
            </div>
            <div className="container-fluid this_activity">
                <div className="row pin_slice">
                    <div className="col-xl-5 col-md-12 col-sm-12">
                        <h4>This Activity Is</h4>
                        <br/>
                        <div className="form-check form_check_custom">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1" />
                            <img src={open} alt="img"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Visible Only To Invited Users
                                </label>
                        </div>
                        <div className="form-check form_check_custom">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault2" checked />
                            <img src={chopen} alt="img"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Visible To Everyone & Searchable On The Map
                                </label>
                        </div>
                    </div>

                </div>
                <br/>
                <button className="pin_slice_btn">
                    Next
                </button>

                <br/> <br/>
                <p>You Can Join Similar Activities Created By Other Users In This Area</p>
                <br/>
                <h4>Suggestions For You</h4>
            </div>

            <div className="container-fluid">
                <ActivatySlice />
            </div>
        </div>
    );
};

export default CreateActivities;