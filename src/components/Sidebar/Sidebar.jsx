import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GridView as GridViewIcon,
  AccountCircle as AccountCircleIcon,
  Terminal as TerminalIcon,
  Assessment as AssessmentIcon,
  Store as StoreIcon,
  Payments as PaymentsIcon,
  Upload as UploadIcon,
  NotificationsActive as NotificationsActiveIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import logo from "../../images/mophonelogo.svg";
import dashboard from "../../images/dashboard.svg";
import program from "../../images/program.svg";
import crm from "../../images/crm.svg";
import report from "../../images/reporting.svg";
import marketing from "../../images/marketing.svg";
import batchservices from "../../images/batchservices.svg";
import setting from "../../images/setting.svg";
import helpcenter from "../../images/helpcentre.svg";
import logout from "../../images/logout.svg";

import "./Sidebar.scss";

function Sidebar({ hide }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const location = useLocation();

  function handleMenuItemClick(menuItem) {
    setActiveMenuItem(menuItem);
  }

  const menuItems = [
    { id: "", text: "Dashboard", icon: dashboard },
    { id: "program", text: "Program", icon: program },
    { id: "crm", text: "CRM", icon: crm },
    { id: "reporting", text: "Reporting", icon: report },
    { id: "marketing", text: "Marketing", icon: marketing },
    { id: "batch", text: "Batch Services", icon: batchservices },
    {
      id: "settings",
      text: "Settings",
      icon: setting,
      subMenu: [
        { id: "general", text: "General", icon: HelpIcon },
        { id: "security", text: "Security" },
        { id: "privacy", text: "Privacy" },
      ],
    },
    { id: "help", text: "Help Centre", icon: helpcenter, subMenu: [] },
    { id: "logout", text: "Logout", icon: logout },
  ];

  return (
    <div className={`${hide ? "hide" : "sidebar"}`}>
      <div className="midsidebar">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={activeMenuItem === item.id ? "active" : ""}
            >
              <Link to={`/${item.id}`} style={{ textDecoration: "none" }}>
                <div className="icon">
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} alt={item.text} />
                  ) : (
                    React.createElement(item.icon)
                  )}
                </div>
                <span>{item.text}</span>
              </Link>
              {item.subMenu && activeMenuItem === item.id && (
                <ul className="submenu">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <div className="icon">
                        {subItem.icon && React.createElement(subItem.icon)}
                      </div>
                      <Link
                        to={`/${item.id}/${subItem.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
