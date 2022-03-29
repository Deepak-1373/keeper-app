import React, { useState } from "react";
import "./Sidebar.css";
import { sidebarNames } from "./data";

export const Sidebar = () => {
  const [active, setActive] = useState();

  const handleSidebarClick = (listIdx) => {
    active === listIdx ? setActive(listIdx) : setActive(listIdx);
  };

  return (
    <div className="sidebar">
      <ul className="text-white text-base cursor-pointer">
        {sidebarNames.map(({ id, sidebarName, iconName }, idx) => (
          <>
            <li
              onClick={() => handleSidebarClick(idx)}
              key={id}
              className={`${
                active === idx && "active"
              }  sidebar-item flex items-center`}
            >
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
