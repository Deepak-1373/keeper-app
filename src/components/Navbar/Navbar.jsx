import React from "react";
import bulbImage from "../../assests/bulb.png";
import { useNotes, useTheme } from "../../context";
import { SET_SEARCH_QUERY, SET_TOGGLE_SIDEBAR } from "../../reducer";
import "./Navbar.css";

export const Navbar = () => {
  const { searchQuery, notesDispatch, toggle } = useNotes();
  const { theme, changeTheme } = useTheme();

  const clickHanlder = () => {
    notesDispatch({
      type: SET_TOGGLE_SIDEBAR,
      payload: !toggle,
    });
  };

  return (
    <nav className="navbar flex justify-between items-center p-0 sticky top-0 left-0">
      <div className="navbar-brand flex items-center justify-center">
        <span
          onClick={() => clickHanlder()}
          class="material-icons-outlined cursor-pointer"
        >
          menu
        </span>
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
        className="theme-btn bg-inherit rounded-lg text-white border-base cursor-pointer"
        onClick={changeTheme}
      >
        <i
          className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}
        ></i>
      </button>
    </nav>
  );
};
