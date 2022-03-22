import React from "react";
import "./NotesForm.css";

export const NotesForm = () => {
  return (
    <div className="form-container">
      <form className="form-area flex-column items-center justify-center">
        <div className="input-container flex-column border-round">
          <input
            className="form-input border-round color-white disable-border disable-outline"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="text-input-area color-white disable-border disable-outline"
            placeholder="Take a note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
