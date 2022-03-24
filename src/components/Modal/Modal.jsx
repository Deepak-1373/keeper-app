import React from "react";
import { useNotes } from "../../context";
import "./Modal.css";

export const Modal = () => {
  const { openModal, setOpenModal } = useNotes();
  return (
    <div className={`${openModal && "show-modal-bg"} modal-background`}>
      <div className="modal-container">
        <h3>Title</h3>
        <p>content</p>
        <button>Edit</button>
        <button>Remove</button>
        <button onClick={() => setOpenModal(false)}>X</button>
      </div>
    </div>
  );
};
