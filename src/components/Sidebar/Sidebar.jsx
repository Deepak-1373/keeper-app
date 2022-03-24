import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="text-base">
        <li className="sidebar-item active">Notes</li>
        <li className="sidebar-item">Reminders</li>
        <li className="sidebar-item">Edit lables</li>
        <li className="sidebar-item">Archive</li>
        <li className="sidebar-item">Bin</li>
      </ul>
    </div>
  );
};
