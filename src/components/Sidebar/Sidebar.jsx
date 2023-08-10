import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dashboardIcon from "../../images/dashboard.svg";
import programIcon from "../../images/program.svg";
import admin from "../../images/admin.svg";
import adminActive from "../../images/adminactive.svg";
import crmIcon from "../../images/crm.svg";
import reportingIcon from "../../images/reporting.svg";
import marketingIcon from "../../images/marketing.svg";
import complianceIcon from "../../images/compliance.svg";
import complianceIconActive from "../../images/complianceActive.svg";
import batchservicesIcon from "../../images/batchservices.svg";
import settingIcon from "../../images/settings.svg";
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
import userIcon from "../../images/usersicon.svg";
import userIconActive from "../../images/usersiconactive.svg";
import unlockIconActive from "../../images/unlockactive.svg";
import unlockIcon from "../../images/unlockicon.svg";

import "./Sidebar.scss";

function Sidebar({ hide, isSidebarVisible }) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    setActiveMenuItem(pathSegments[1]);
    setActiveSubMenu(pathSegments[2]);
  }, [location.pathname]);

  function handleMenuItemClick(menuItem) {
    const menuItemData = menuItems.find((item) => item.id === menuItem);

    if (menuItemData.subMenu && menuItemData.subMenu.length > 0) {
      setActiveMenuItem(menuItem);
      if (activeSubMenu === menuItemData.subMenu[0].id) {
        setActiveSubMenu(null);
      } else {
        setActiveSubMenu(menuItemData.subMenu[0].id);
      }
    } else {
      setActiveMenuItem(menuItem);
      setActiveSubMenu(null);
    }
  }

  function handleSubMenuClick(subMenuItem) {
    setActiveSubMenu(subMenuItem);
  }

  const menuItems = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: dashboardIcon,
      activeIcon: dashboardIconActive,
      // subMenu: [
      //   {
      //     id: "dashboard",
      //     text: "Dashboard",
      //     icon: dashboardIcon,
      //     activeIcon: dashboardIconActive,
      //   },
      //   {
      //     id: "program",
      //     text: "Program",
      //     icon: programIcon,
      //     activeIcon: programIconActive,
      //   },

      //   { id: "crm", text: "CRM", icon: crmIcon, activeIcon: crmIconActive },
      //   {
      //     id: "reporting",
      //     text: "Reporting",
      //     icon: reportingIcon,
      //     activeIcon: reportingIconActive,
      //   },
      //   {
      //     id: "marketing",
      //     text: "Marketing",
      //     icon: marketingIcon,
      //     activeIcon: marketingIconActive,
      //   },
      //   {
      //     id: "batch",
      //     text: "Batch Services",
      //     icon: batchservicesIcon,
      //     activeIcon: batchservicesIconActive,
      //   },
      //   {
      //     id: "settings",
      //     text: "Settings",
      //     icon: settingIcon,
      //     activeIcon: settingIconActive,
      //   },
      //   {
      //     id: "help",
      //     text: "Help Centre",
      //     icon: helpcenterIcon,
      //     activeIcon: helpcenterIconActive,
      //   },
      // ],
    },

    { id: "crm", text: "CRM", icon: crmIcon, activeIcon: crmIconActive },
    {
      id: "admin",
      text: "Admin",
      icon: admin,
      activeIcon: adminActive,
      subMenu: [
        {
          id: "users",
          text: "Users",
          icon: userIcon,
          activeIcon: userIconActive,
        },
        {
          id: "RolesAndPermissions",
          text: "Roles & Permissions",
          icon: unlockIcon,
          activeIcon: unlockIconActive,
        },
      ],
    },
    {
      id: "reporting",
      text: "Reporting",
      icon: reportingIcon,
      activeIcon: reportingIconActive,
    },

    {
      id: "compliance",
      text: "Compliance",
      icon: complianceIcon,
      activeIcon: complianceIconActive,
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
      // subMenu: [
      //   { id: "general", text: "General", icon: helpcenterIcon },
      //   { id: "security", text: "Security" },
      //   { id: "privacy", text: "Privacy" },
      // ],
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

  const activeMenuItemData = menuItems.find(
    (item) => item.id === activeMenuItem
  );
  const subMenuItems =
    activeMenuItemData && activeMenuItemData.subMenu
      ? activeMenuItemData.subMenu
      : [];

  return (
    <div
      className={`sidebar ${
        isSidebarVisible ? "sidebarVisible" : "sidebarHidden"
      }`}
    >
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
            </li>
          ))}
        </ul>
      </div>
      {subMenuItems.length > 0 && activeSubMenu && (
        <div className="submenubar">
          <div className="submenubarcontainer">
            {subMenuItems.map((subItem) => (
              <div
                key={subItem.id}
                className={`${
                  activeSubMenu === subItem.id ? "active" : ""
                } submenucontainer`}
                onClick={() => handleSubMenuClick(subItem.id)}
              >
                <Link
                  to={`/${activeMenuItem}/${subItem.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="icon">
                    {typeof subItem.icon === "string" ? (
                      <img
                        src={
                          activeSubMenu === subItem.id
                            ? subItem.activeIcon
                            : subItem.icon
                        }
                        alt={subItem.text}
                      />
                    ) : (
                      subItem.icon
                    )}
                  </div>
                  <div className={activeSubMenu === subItem.id ? "active" : ""}>
                    <span>{subItem.text}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
