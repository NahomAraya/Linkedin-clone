import { Avatar } from '@material-ui/core';
import React, {forwardRef } from 'react';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import "./Feed.css";


const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                
                <div className="post_profile">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>

            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpIcon} title="like" color= "gray"/>
                <InputOptions Icon={CommentIcon} title="comment" color= "gray"/>
                <InputOptions Icon={ShareIcon} title="Share" color= "gray"/>
                <InputOptions Icon={SendIcon} title="Send" color= "gray"/>

            </div>
            
            
            
        </div>
    )
});

export default Post;
