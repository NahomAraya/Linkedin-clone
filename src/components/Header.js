import React from 'react'
import HeaderOptions from './HeaderOptions';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase';
import { logout } from '../features/userSlice';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
                
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder ="Search" type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOptions Icon = {HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="Networks"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messages"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
                <HeaderOptions onClick={logoutOfApp} profile={true} title="Profile" />
            </div>
        </div>
    );
}

export default Header;
