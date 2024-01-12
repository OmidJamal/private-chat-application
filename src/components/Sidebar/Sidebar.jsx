import React from 'react';
import Navbar from "../Navbar/Navbar";
import Search from "./Search";
import ChatsUser from "./ChatsUser";

const Sidebar = () => {
    return (
        <div className="sideBar">
            <Navbar/>
            <Search/>
            <ChatsUser/>
        </div>
    );
};

export default Sidebar;