// styles
import "./Teams.scss"

import React from 'react';

// custom imports
import Navbar from "../../components/navbar/Navbar";
import teamImg from "../../images/teamimage.svg"
import creteImage from "../../images/createImage.svg"
import dumbbells from "../../images/dumbbells.svg"


const Teams = () => {

    const arr = [
        {id:1,teamName:"test",members:"1"},
        {id:2,teamName:"test",members:"9"},
        {id:3,teamName:"test",members:"80"},
        {id:4,teamName:"test",members:"18"},
        {id:5,teamName:"test",members:"5"},
        {id:6,teamName:"test",members:"3"},
        {id:7,teamName:"test",members:"10"},
        {id:8,teamName:"test",members:"9"},
        {id:9,teamName:"test",members:"8"},

    ]
    return (
        <div>
            <Navbar/>

            <div className="container-fluid">
                <div className="row">
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="card_card card_team">
                                        <div className="card-body">
                                            <div className="d-flex text-muted">
                                                <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                                    <img className="team_slice_image" src={teamImg} alt="team"/>
                                                    <p className="text-truncate mb-0 team_title">
                                                        My Teams
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_card card_team">
                            <div className="card-body">
                                <div className="d-flex text-muted">
                                    <div className="flex-shrink-0 me-3 align-self-center">
                                    </div>
                                    <div className="p-2 flex-grow-1 overflow-hidden">
                                        <p className="text-truncate mb-0">
                                            Sort by
                                        </p>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="card_card card_team">
                            <div className="card-body">
                                <div className="p-4 d-flex text-muted">
                                    <div className="flex-shrink-0 me-3 align-self-center">
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <img src={creteImage} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          <div className="container-fluid">
              <div className="row">
                  {
                      arr.map((members) => {
                          return (
                              <div key={members.id} className="col-xl-4 col-md-6 col-sm-12">
                                  <div className="card_card card_teams">
                                      <div className="card-body">
                                          <div className="d-flex text-muted">
                                              <div className="d-flex justify-content-around flex-grow-1 overflow-hidden">
                                                  <div>
                                                  <p className="mb-1">{members.teamName}</p>
                                                  <p className="text-truncate mb-0"><span className="text-success me-2"> {members.members}<i
                                                      className="ri-arrow-right-up-line align-bottom ms-1"></i></span> From previous
                                                  </p>
                                                  </div>
                                                        <div>
                                                            <img src={dumbbells} alt="image"/>
                                                        </div>

                                                     <span className="absolute"><i className="fa-solid fa-ellipsis-vertical"></i></span>

                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })
                  }

              </div>
          </div>

        </div>
);
};

export default Teams;