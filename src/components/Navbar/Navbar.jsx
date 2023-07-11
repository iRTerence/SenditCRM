import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";
import logo from "../../images/SenditLogo.svg";

function Navbar({ hide }) {
  return (
    <div className={`${hide ? "hide" : "navbar"}`}>
      <div className="wrapper">
        <div class="left-navbar">
          <div className="navicons">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon className="search-icon" />
          </div>
        </div>

        <img src={logo}></img>
        <div className="navitems">
          <div className="navicons">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>
          <div className="navicons">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>
          <div className="navicons">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="navicons">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="navicons"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
