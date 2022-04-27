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
          <p className="labels-header">Edit Labels</p>
          <div className="label-form flex">
            <input
              type="text"
              onChange={(e) => setLabelInput(e.target.value)}
              value={labelInput}
              className="label-input border-none outline-none"
            />
            <button
              className="add-label-btn rounded-lg text-white bg-inherit border-none cursor-pointer"
              onClick={() => handleLabelClick()}
            >
              <span className="text-base material-symbols-outlined">check</span>
            </button>
          </div>

          {labels.length > 0 &&
            labels.map((label) => (
              <div
                className="labels-list w-full flex items-center justify-between"
                key={label}
              >
                <div className="flex items-center">
                  <button className="delete-label-btn bg-inherit text-white border-none cursor-pointer">
                    <span className="text-base material-symbols-outlined">
                      delete
                    </span>
                  </button>
                  <li className="label-name text-base">{label}</li>
                </div>
                <button className="edit-label-btn bg-inherit text-white border-none cursor-pointer">
                  <span className="text-base material-symbols-outlined">
                    edit
                  </span>
                </button>
              </div>
            ))}
          <hr className="w-full" />
          <div className="w-full flex justify-end item-center">
            <button
              className="modal-close-btn rounded-lg text-white bg-inherit border-none border-base cursor-pointer"
              onClick={() => setOpenLabelModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
