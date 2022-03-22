import React, { useState } from "react";
import "./NotesForm.css";

export const NotesForm = () => {
  const [displayTextArea, setDisplayTextArea] = useState(false);

  const handleOnBlur = () => {
    setDisplayTextArea(false);
  };

  const handleOnFocus = () => {
    setDisplayTextArea(true);
  };

  return (
    <div className="form-container">
      <form className="form-area flex-column items-center justify-center">
        <div className="input-container flex-column border-round">
          <input
            className="form-input border-round color-white disable-border disable-outline"
            type="text"
            placeholder="Title"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          <textarea
            className={`${
              displayTextArea ? "display-block" : ""
            } text-input-area color-white disable-border disable-outline`}
            placeholder="Take a note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
