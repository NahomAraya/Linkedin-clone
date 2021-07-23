import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Header.css";


function HeaderOptions({ profile, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header_options">
            {Icon && <Icon className="header_optionsIcon"/>}
            {profile && (
            <Avatar className="header_optionsIcon"/>)}
            
            <h3 className="header_optionsTitle">{title}</h3>
        </div>
    );
}

export default HeaderOptions;
