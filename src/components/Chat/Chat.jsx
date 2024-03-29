import React, {useContext} from 'react';
import Cam from "../../assets/images/cam.png";
import Add from "../../assets/images/add.png";
import More from "../../assets/images/more.png";
import Messages from "./Messages";
import Input from "./input";
import {ChatContext} from "../../context/ChatContext";
const Chat = () => {

    const {data} = useContext(ChatContext)

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user.displayName}</span>
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