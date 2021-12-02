import React from "react";

import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1637592461~hmac=248e467f792b56527f0bb12bbe3391f8"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>



      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQGpwmcjfbTQZg/profile-displayphoto-shrink_400_400/0/1636660859010?e=1643241600&v=beta&t=K7OTt98DjKvEQDpIAQgDWhe7TFasaRPx7nIAg2qibbQ" title="me"/>
      </div>
    </div>
  );
}

export default Header;
