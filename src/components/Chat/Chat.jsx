import React from 'react';
import Cam from "../../assets/images/cam.png";
import Add from "../../assets/images/add.png";
import More from "../../assets/images/more.png";
import Messages from "./Messages";
import Input from "./input";
const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Omid</span>
                <div className="chatIcons">
                    <img src={Cam} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
};

export default Chat;