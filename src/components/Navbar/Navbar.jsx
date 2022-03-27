import React from "react";
import { useNotes, useTheme } from "../../context";
import bulbImage from "../../assests/bulb.png";
import { SET_SEARCH_QUERY } from "../../reducer";
import "./Navbar.css";

export const Navbar = () => {
  const { searchQuery, notesDispatch } = useNotes();
  const { theme, changeTheme } = useTheme();
  return (
    <nav className="navbar flex justify-between items-center p-0 sticky top-0 left-0">
      <div className="navbar-brand flex items-center justify-center">
        <img src={bulbImage} alt="Keeper App" />
        <p className="brand-text text-white text-2xl">Keeper</p>
      </div>

      <input
        className="navbar-search text-base rounded-lg border-none outline-none"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) =>
          notesDispatch({
            type: SET_SEARCH_QUERY,
            payload: e.target.value,
          })
        }
      ></input>
      <button
        className="theme-btn bg-inherit rounded-lg text-white border-base"
        onClick={changeTheme}
      >
        <i
          className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}
        ></i>
      </button>
    </nav>
  );
};
