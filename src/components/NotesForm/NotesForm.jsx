import React, { useState } from "react";
import "./NotesForm.css";

export const NotesForm = () => {
  // Re-evaluate this to implement onFocus and onBlur event
  // const [displayTextArea, setDisplayTextArea] = useState(false);

  // const handleOnBlur = (e) => {
  //   if (e.target.tagName === "INPUT") {
  //     return;
  //   }
  //   setDisplayTextArea(false);
  // };

  // const handleOnFocus = () => {
  //   setDisplayTextArea(true);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form
        className="form-area flex-column items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="input-container flex-column border-round">
          <input
            required
            className="form-input border-round color-white disable-border disable-outline"
            type="text"
            placeholder="Title"
          />
          <textarea
            required
            className="text-input-area color-white disable-border disable-outline"
            placeholder="Take a note"
          ></textarea>
          <button className="add-btn">Add to list</button>
        </div>
      </form>
    </div>
  );
};
