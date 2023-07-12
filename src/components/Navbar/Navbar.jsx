import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";
import logo from "../../images/SenditLogo.svg";
import { Switch } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Navbar({ hide }) {
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

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
          <div>
            <FormControl
              sx={{
                m: 1,
                minWidth: 90,
                borderRadius: 15,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 15,
                  padding: 0,
                  backgroundColor: "rgb(248, 248, 248);",
                  height: 34,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  "& input": {
                    textAlign: "center",
                    paddingTop: 6,
                    border: "none",
                  },
                  "& .MuiSelect-icon": {
                    top: "calc(50% - 12px)",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "transparent",
                  },
                },
              }}
              size="small"
              variant="outlined"
            >
              <InputLabel id="demo-select-small-label">
                {language === "" ? "EN" : language}
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={language}
                label="EN"
                onChange={handleChange}
              >
                <MenuItem value={"EN"}>EN</MenuItem>
                <MenuItem value={"FR"}>FR</MenuItem>
                <MenuItem value={"ES"}>ES</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <img src={logo} alt="Logo" />
        <div className="navitems">
          <div className="navicons">
            <Switch />
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
