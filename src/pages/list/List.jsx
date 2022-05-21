// styles
import "./list.scss"

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

// custom imports
import Navbar from "../../components/navbar/Navbar"
import axios from "axios";
import {API_URI, token} from "../../utils/keys";

const List = () => {


  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
          test
      </div>
    </div>
  )
}

export default List