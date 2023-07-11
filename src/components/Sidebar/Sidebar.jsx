import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dashboardIcon from "../../images/dashboard.svg";
import programIcon from "../../images/program.svg";
import crmIcon from "../../images/crm.svg";
import reportingIcon from "../../images/reporting.svg";
import marketingIcon from "../../images/marketing.svg";
import batchservicesIcon from "../../images/batchservices.svg";
import settingIcon from "../../images/setting.svg";
import helpcenterIcon from "../../images/helpcentre.svg";
import logoutIcon from "../../images/logout.svg";
import dashboardIconActive from "../../images/dashboardactive.svg";
import programIconActive from "../../images/programactive.svg";
import crmIconActive from "../../images/crmactive.svg";
import reportingIconActive from "../../images/reportingactive.svg";
import marketingIconActive from "../../images/marketingactive.svg";
import batchservicesIconActive from "../../images/batchservicesactive.svg";
import settingIconActive from "../../images/settingactive.svg";
import helpcenterIconActive from "../../images/helpcentreactive.svg";
import logoutIconActive from "../../images/logoutactive.svg";

import "./Sidebar.scss";

function Sidebar({ hide }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenuItem(location.pathname.split("/")[1]);
  }, [location.pathname]);

  function handleMenuItemClick(menuItem) {
    setActiveMenuItem(menuItem);
  }

  const menuItems = [
    {
      id: "",
      text: "Dashboard",
      icon: dashboardIcon,
      activeIcon: dashboardIconActive,
      subMenu: [
        { id: "general", text: "General", icon: helpcenterIcon },
        { id: "security", text: "Security" },
        { id: "privacy", text: "Privacy" },
      ],
    },
    {
      id: "program",
      text: "Program",
      icon: programIcon,
      activeIcon: programIconActive,
      subMenu: [
        { id: "general", text: "General", icon: helpcenterIcon },
        { id: "security", text: "Security" },
        { id: "privacy", text: "Privacy" },
      ],
    },
    { id: "crm", text: "CRM", icon: crmIcon, activeIcon: crmIconActive },
    {
      id: "reporting",
      text: "Reporting",
      icon: reportingIcon,
      activeIcon: reportingIconActive,
    },
    {
      id: "marketing",
      text: "Marketing",
      icon: marketingIcon,
      activeIcon: marketingIconActive,
    },
    {
      id: "batch",
      text: "Batch Services",
      icon: batchservicesIcon,
      activeIcon: batchservicesIconActive,
    },
    {
      id: "settings",
      text: "Settings",
      icon: settingIcon,
      activeIcon: settingIconActive,
      subMenu: [
        { id: "general", text: "General", icon: helpcenterIcon },
        { id: "security", text: "Security" },
        { id: "privacy", text: "Privacy" },
      ],
    },
    {
      id: "help",
      text: "Help Centre",
      icon: helpcenterIcon,
      activeIcon: helpcenterIconActive,
      subMenu: [],
    },
    {
      id: "logout",
      text: "Logout",
      icon: logoutIcon,
      activeIcon: logoutIconActive,
    },
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
                    <img
                      src={
                        activeMenuItem === item.id ? item.activeIcon : item.icon
                      }
                      alt={item.text}
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <span>{item.text}</span>
              </Link>
              {item.subMenu && activeMenuItem === item.id && (
                <div className="submenu">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <div className="icon">
                        {subItem.icon && typeof subItem.icon === "string" ? (
                          <img src={subItem.icon} alt={subItem.text} />
                        ) : (
                          subItem.icon
                        )}
                      </div>
                      <Link
                        to={`/${item.id}/${subItem.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div class="submenubar"></div>
    </div>
  );
}

export default Sidebar;
