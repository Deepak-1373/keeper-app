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
          <div>
            {labels.length > 0 &&
              labels.map((label) => <li key={label}>{label}</li>)}
          </div>
          <div>
            <input
              onChange={(e) => setLabelInput(e.target.value)}
              value={labelInput}
            />
            <button onClick={() => handleLabelClick()}>+</button>
            <button>Remove</button>
          </div>
          <button onClick={() => setOpenLabelModal(false)}>x</button>
        </div>
      </div>
    </div>
  );
};
