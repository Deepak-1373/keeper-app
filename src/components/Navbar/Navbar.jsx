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
      {/* svg to be added */}
      {/* <svg
        focusable="false"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
        <path d="M0,0h24v24H0V0z" fill="none"></path>
      </svg> */}
      <input
        className="navbar-search font-default border-round"
        type="text"
        placeholder="Search"
      ></input>
      <img className="navbar-profile" src={profileImage} alt="Profile logo" />
    </div>
  );
};
