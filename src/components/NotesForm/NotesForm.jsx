import React, { useState } from "react";
import "./NotesForm.css";

export const NotesForm = () => {
  const [displayTextArea, setDisplayTextArea] = useState(false);

  const handleOnBlur = (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    setDisplayTextArea(false);
  };

  const handleOnFocus = () => {
    setDisplayTextArea(true);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="form-area flex-column items-center justify-center">
        <div
          className="input-container flex-column border-round"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        >
          <input
            className="form-input border-round color-white disable-border disable-outline"
            type="text"
            placeholder="Title"
          />
          <textarea
            className={`${
              displayTextArea ? "display-block" : ""
            } text-input-area color-white disable-border disable-outline`}
            placeholder="Take a note"
          ></textarea>
          <button
            className={`${displayTextArea ? "display-block" : ""} add-btn `}
            onClick={handleOnClick}
          >
            Add to list
          </button>
        </div>
      </form>
    </div>
  );
};
