import React from 'react';

const Search = () => {
    return (
        <div className="searchBar">
            <div className="searchForm">
                <input type="text" placeholder="search users"/>
            </div>
            <div className="userChat">
                <img
                    src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""/>
                <div className="userChatInfo">
                    <span>Omid</span>
                </div>
            </div>
        </div>
    );
};

export default Search;