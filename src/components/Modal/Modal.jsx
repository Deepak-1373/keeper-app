import React from "react";
import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h3>Title</h3>
        <p>content</p>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
};
