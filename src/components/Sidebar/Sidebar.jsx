import React from "react";
import "./Sidebar.css";
import { sidebarNames } from "./data";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="text-white text-base cursor-pointer">
        {sidebarNames.map(({ id, sidebarName, iconName }) => (
          <>
            <li key={id} className="sidebar-item flex items-center">
              <span className="sidebar-icon material-icons-outlined">
                {iconName}
              </span>
              {sidebarName}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
