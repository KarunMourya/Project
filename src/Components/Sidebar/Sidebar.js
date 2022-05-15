import React from "react";
import { Link } from "react-router-dom";
import style from  "./Sidebar.module.css";
import LogoutIcon from '@mui/icons-material/Logout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import DashboardIcon from '@mui/icons-material/Dashboard';
const SidebarItems = [
  {
    "displayName": "Dashboard",
    "route": "/",
    "icons": <DashboardIcon />
  },
  {
    "displayName": "History",
    "route": "/history",
    "icons": <HistoryIcon/>
  },
  {
    "displayName": "Support",
    "route": "/Support",
    "icons": <SupportAgentIcon/>
  },
  {
    "displayName": "Logout",
    "route": "/logout",
    "icons": <LogoutIcon/>
  }
]

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
      <div className={`${style.SidebarItemInner} ${active}`}>
        <span>{props.icons}</span>
        <span>{props.title}</span>
      </div>
  );
};

const Sidebar = (props) => {
  const activeItem = SidebarItems.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className={style.sidebar}>
      <div className={style.logoArea}>
        <div className="sidebarLogo1">
        </div>
        <div className="sidebarLogo2">
        </div>
        <div className="sidebarLogo3">
        </div>
        <div className={style.sidebarTitle}>
            <h2>FORAGE</h2>
        </div>
      </div>
      <div className={style.sidebarItem}>
      {SidebarItems.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.displayName}
            icons={item.icons}
            active={index === activeItem}
          />
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Sidebar;
