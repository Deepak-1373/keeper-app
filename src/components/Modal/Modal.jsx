import React from "react";
import { useNotes } from "../../context";
import "./Modal.css";

export const Modal = () => {
  const { openModal, setOpenModal } = useNotes();
  return (
    <div
      className={`${
        openModal && "show-modal-bg"
      } modal-background flex justify-center items-center w-screen h-screen fixed inset-0`}
    >
      <div className="modal-container flex flex-col justify-center items-start px-4 py-3">
        <h3>Title</h3>
        <p>content</p>
        <button onClick={() => setOpenModal(false)}>X</button>
        <div className="w-full flex justify-end items-center">
          <button className="edit-btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer">
            Edit
          </button>
          <button className="remove-btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
