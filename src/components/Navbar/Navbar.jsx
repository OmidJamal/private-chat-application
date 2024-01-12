import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Omit chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                <span>Omid</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default Navbar;