import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListAltIcon from '@material-ui/icons/ListAlt';

import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './../StyleSheet/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                 
                <HomeIcon className="left__one"/>
                <ListAltIcon className="left__two"/>
                <NotificationsIcon className="left__three"/>
            </div>
            <div className="header_center">
                <input type="text" placeholder="Search" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header_right">
                <AccountCircleIcon className="left__avtar"/>
                <AddCircleIcon className="left__circle"/>
                <SettingsIcon className="left__settings"/>
            </div>
        </div>
    )
}

export default Header

