import React, {useContext, useEffect, useState} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase";
import {AuthContext} from "../../context/AuthContext";
import {ChatContext} from "../../context/ChatContext";

const ChatsUser = () => {
    const [chatsUser, setChatsUSer] = useState([]);

    const {currentUser} = useContext(AuthContext)
    const {dispatch} = useContext(ChatContext)

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

    const handleSelect = (user) => {
        dispatch({type: "CHANGE_USER", payload: user})
    }
    return (
        <div className="chats">
            {Object.entries(chatsUser)?.sort((b,a) => a[1].date - b[1].date).map((chat) => (
                <div className="userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <img
                        src={chat[1].userInfo.photoURL}
                        alt=""/>
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatsUser;