import React from "react";
import { useNotes } from "../../context";
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

  const { notes, handleChange, handleSubmit } = useNotes();

  return (
    <div className="form-container">
      <form
        className="form-area flex-column justify-center border-round"
        onSubmit={handleSubmit}
      >
        <input
          required
          className="form-input font-lg border-round color-white disable-border disable-outline"
          type="text"
          placeholder="Title"
          value={notes.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <textarea
          required
          className="text-input-area font-default color-white disable-border disable-outline"
          placeholder="Take a note"
          value={notes.content}
          onChange={(e) => handleChange(e, "content")}
        ></textarea>
        <button className="add-btn border-round font-default">
          Add to list
        </button>
      </form>
    </div>
  );
};
