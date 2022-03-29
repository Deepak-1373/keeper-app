import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="text-white text-base cursor-pointer">
        <li className="sidebar-item active">
          <span className="material-icons-outlined">lightbulb</span>Notes
        </li>
        <li className="sidebar-item">
          <span className="material-icons-outlined">notifications</span>
          Reminders
        </li>
        <li className="sidebar-item">
          <span className="material-icons-outlined">mode_edit</span>Edit lables
        </li>
        <li className="sidebar-item">
          <span className="material-icons-outlined">archive</span>Archive
        </li>
        <li className="sidebar-item">
          <span className="material-icons-outlined">delete_forever</span>Bin
        </li>
      </ul>
    </div>
  );
};
