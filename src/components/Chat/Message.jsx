import React from 'react';

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img
                    src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""/>
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img
                    src="https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""/>
            </div>
        </div>
    );
};

export default Message;