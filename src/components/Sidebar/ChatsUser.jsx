import React, {useContext, useEffect, useState} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase";
import {AuthContext} from "../../context/AuthContext";

const ChatsUser = () => {
    const [chatsUser, setChatsUSer] = useState([]);

    const {currentUser} = useContext(AuthContext)
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChatsUSer(doc.data())
            });

            return () => {
                unsub();
            }
        }

        currentUser.uid && getChats();
    }, [currentUser.uid]);
    return (
        <div className="chats">
            {Object.entries(chatsUser)?.map((chat) => (
                <div className="userChat" key={chat[0]}>
                    <img
                        src={chat[1].userInfo.photoURL}
                        alt=""/>
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatsUser;