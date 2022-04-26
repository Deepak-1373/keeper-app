import React, { useState } from "react";
import { useNotes } from "../../context";
import { ADD_LABEL } from "../../reducer";
import "./Label.css";

export const Label = ({ openLabelModal, setOpenLabelModal }) => {
  const [labelInput, setLabelInput] = useState("");
  const { notesDispatch, labels } = useNotes();

  const handleLabelClick = () => {
    notesDispatch({
      type: ADD_LABEL,
      payload: labelInput,
    });
    setLabelInput("");
  };
  return (
    <div className="label-container">
      <div
        className={`${
          openLabelModal && "show-modal-bg"
        } label-modal-bg flex justify-center items-center w-screen h-screen fixed inset-0`}
      >
        <div className="label-modal-content relative flex flex-col justify-center items-start px-4 py-3 rounded-lg border-base text-white">
          <p>Edit Labels</p>
          <div className="labels-list">
            {labels.length > 0 &&
              labels.map((label) => (
                <>
                  <li key={label}>{label}</li>
                  <button>Remove</button>
                </>
              ))}
          </div>
          <div className="label-form flex">
            <input
              type="text"
              onChange={(e) => setLabelInput(e.target.value)}
              value={labelInput}
              className="label-input"
            />
            <button
              className="add-label-btn rounded-lg text-white bg-inherit border-none cursor-pointer"
              onClick={() => handleLabelClick()}
            >
              <span class="material-symbols-outlined">check</span>
            </button>
          </div>
          <hr className="w-full" />
          <button
            className="modal-close-btn"
            onClick={() => setOpenLabelModal(false)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
