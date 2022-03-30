import React, { useState } from "react";
import "./Sidebar.css";
import { sidebarNames } from "./data";
import { useNotes } from "../../context";

export const Sidebar = () => {
  const [active, setActive] = useState();
  const { toggle } = useNotes();

  const handleSidebarClick = (listIdx) => {
    active === listIdx ? setActive() : setActive(listIdx);
  };

  return (
    <div
      className={`${toggle ? "hide-list" : "show-list"} sidebar flex flex-col`}
    >
      {sidebarNames.map(({ id, sidebarName, iconName }, idx) => (
        <>
          <ul
            key={id}
            onClick={() => handleSidebarClick(idx)}
            className={`${
              active === idx && "active"
            }  sidebar-show flex items-center text-base cursor-pointer`}
          >
            <span className="sidebar-icon material-icons-outlined">
              {iconName}
            </span>
            <li className={`${toggle ? "hide-names" : "show-names"}`} key={id}>
              {sidebarName}
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};
