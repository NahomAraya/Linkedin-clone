import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hashtag">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://image.shutterstock.com/image-vector/background-multicolor-gradient-colourful-color-600w-1711154779.jpg" alt=""/>
                <Avatar src={user.photoURL} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h3>{user.displayName}</h3>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    
                </div>

            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('React')}
                {recentItem('Pussy Slaying')}
            </div>
            
        </div>
    )
}

export default Sidebar;
