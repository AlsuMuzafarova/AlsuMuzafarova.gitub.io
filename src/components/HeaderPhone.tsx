import React from "react";
import "./HeaderPhone.css"

import Avatar from "./ui/Avatar";

import notificationsIcon from "../assets/notifications.svg";
import searchIcon from "../assets/searchOutline.svg";
import voiceIcon from "../assets/voiceOutline.svg";

const HeaderPhone = () => {

    const userId = -1;

    return (
        <div className="HeaderPhone">
            <div className="avatarFrame">
                <Avatar userId={userId} className="avatar"/>
            </div>
            <div className="search-box">
                <div className="lineOfSearch">
                    <img src={searchIcon} className="searchIcon" alt="search icon"/>
                    <input type="text" className="searchInput" placeholder="Поиск"/>
                    <img src={voiceIcon} className="voiceIcon" alt="voice input icon"/>
                </div>
            </div>
            <div className="notificationsIconFrame">
                <img src={notificationsIcon} className="notificationsIcon" alt="notifications icon"/>
            </div>
        </div>
    )
}

export default HeaderPhone;