import React from "react";
import bulbImage from "../../assests/bulb.png";
import profileImage from "../../assests/profile.jpg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-0 sticky top-0 left-0">
      <div className="navbar-brand flex items-center justify-center">
        <img src={bulbImage} alt="Keeper App" />
        <p className="brand-text text-2xl">Keeper</p>
      </div>

      <input
        className="navbar-search text-base rounded-lg border-none outline-none"
        type="text"
        placeholder="Search"
      ></input>
      <img className="navbar-profile" src={profileImage} alt="Profile logo" />
    </nav>
  );
};
