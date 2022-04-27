import React, { useState } from "react";
import { useNotes, useTheme } from "../../context";
import { HANDLE_SUBMIT } from "../../reducer";
import { ColorList } from "../ColorList/ColorList";
import { Label } from "../Label/Label";
import "./NotesForm.css";

export const NotesForm = () => {
  const { notesDispatch, labels } = useNotes();
  const { theme } = useTheme();
  const [openLabelModal, setOpenLabelModal] = useState(false);
  const [notes, setNotes] = useState({
    title: "",
    content: "",
    backgroundColor: null ?? { dark: "#121212", light: "#ffffff" },
  });

  const handleChange = (e, field) => {
    setNotes((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notesDispatch({
      type: HANDLE_SUBMIT,
      payload: {
        title: notes.title,
        content: notes.content,
        backgroundColor: notes.backgroundColor,
      },
    });

    setNotes({
      title: "",
      content: "",
      backgroundColor: null ?? { dark: "#121212", light: "#ffffff" },
    });
  };

  const handleColorListChange = (obj, property) => {
    setNotes((prev) => ({ ...prev, [obj]: property }));
  };

  return (
    <div className="form-container">
      <form
        style={{ backgroundColor: notes.backgroundColor[theme] }}
        className="form-area flex flex-col justify-center items-start rounded-lg border-base"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          required
          className="form-input w-full text-2xl bg-inherit rounded-lg text-white border-none outline-none px-4 py-3"
          type="text"
          placeholder="Title"
          value={notes.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <textarea
          required
          className="text-input-area w-full text-base bg-inherit text-white border-none outline-none text-base px-4 py-3"
          placeholder="Take a note"
          value={notes.content}
          onChange={(e) => handleChange(e, "content")}
        ></textarea>
        <div className="flex px-4 py-3">
          {labels.length > 0 &&
            labels.map((label) => (
              <div
                key={label}
                className="notesform-labels-list flex justify-center items-center border-base"
              >
                <span>{label}</span>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <button className="add-btn rounded-lg text-white bg-inherit px-4 py-3 border-base cursor-pointer">
              Add
            </button>
            <button
              className="label-btn rounded-lg text-white bg-inherit px-4 py-3 border-base cursor-pointer"
              onClick={() => setOpenLabelModal(true)}
            >
              Edit labels
            </button>
            <Label
              openLabelModal={openLabelModal}
              setOpenLabelModal={setOpenLabelModal}
            />
          </div>
          <ColorList handleColorListChange={handleColorListChange} />
        </div>
      </form>
    </div>
  );
};
