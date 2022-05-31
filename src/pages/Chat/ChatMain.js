import React from 'react';
import Chat from "../../components/Chat/Chat";
import Navbar from "../../components/navbar/Navbar";
import "./chatMain.scss"
import MobileChat from "../../components/Chat/MobileChat";

const ChatMain = () => {
    return (
        <div>
            <Navbar/>
            <div className="chatBox">
                <Chat/>
            </div>
            <div className="mediaChatBox">
                <MobileChat/>
            </div>
        </div>
    );
};

export default ChatMain;