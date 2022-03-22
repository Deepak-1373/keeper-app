import React from "react";
import bulbImage from "../../assests/bulb.png";
import profileImage from "../../assests/profile.jpg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar flex-row space-between items-center p-8">
      <div className="navbar-brand flex-row items-center justify-center">
        <img src={bulbImage} alt="Keeper App" />
        <p className="brand-text">Keeper</p>
      </div>
      <input
        className="navbar-search font-default border-round"
        type="text"
        placeholder="Search"
      />
      <img className="navbar-profile" src={profileImage} alt="Profile logo" />
    </div>
  );
};
