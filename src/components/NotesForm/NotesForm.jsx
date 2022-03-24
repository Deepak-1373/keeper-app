import React from "react";
import { useNotes } from "../../context";
import "./NotesForm.css";

export const NotesForm = () => {
  const { notes, handleChange, handleSubmit } = useNotes();

  return (
    <div className="form-container">
      <form
        className="form-area flex flex-col justify-center items-start rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          required
          className="form-input w-full text-2xl rounded-lg color-white border-none outline-none px-4 py-3"
          type="text"
          placeholder="Title"
          value={notes.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <textarea
          required
          className="text-input-area w-full text-base color-white border-none outline-none text-base px-4 py-3"
          placeholder="Take a note"
          value={notes.content}
          onChange={(e) => handleChange(e, "content")}
        ></textarea>
        <button className="add-btn rounded-lg text-base px-4 py-3 cursor-pointer">
          Add to list
        </button>
      </form>
    </div>
  );
};
