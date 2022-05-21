// styles
import "./navbar.scss";

import * as React from 'react';


export default function MessageSlice() {
    return (
        <div className="message_slice">
            <i
                className="fa-solid fa-envelope-open-text"
                style={{fontSize:"30px",color:"black"}}
            ></i>
        </div>
    );
}
