import React, { useState } from "react";
import "./NotesForm.css";

export const NotesForm = () => {
  const [displayTextArea, setDisplayTextArea] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnBlur = (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    setDisplayTextArea(false);
  };

  const handleOnFocus = () => {
    setDisplayTextArea(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form
        className="form-area flex-column items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div
          className="input-container flex-column border-round"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        >
          <input
            required
            className="form-input border-round color-white disable-border disable-outline"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            required
            className={`${
              displayTextArea ? "display-block" : ""
            } text-input-area color-white disable-border disable-outline`}
            placeholder="Take a note"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className={`${displayTextArea ? "display-block" : ""} add-btn `}
          >
            Add to list
          </button>
        </div>
      </form>
    </div>
  );
};
