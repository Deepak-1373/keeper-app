import React from "react";
import Close from "@material-ui/icons/CloseRounded";
import { useNotes } from "../../context";
import "./Modal.css";

export const Modal = () => {
  const {
    openModal,
    setOpenModal,
    modalForm,
    setModalForm,
    handleEdit,
    handleRemove,
  } = useNotes();
  return (
    <div
      className={`${
        openModal && "show-modal-bg"
      } modal-background flex justify-center items-center w-screen h-screen fixed inset-0`}
    >
      <div className="modal-container relative flex flex-col justify-center items-start px-4 py-3">
        <input
          required
          className="form-input w-full text-2xl bg-inherit rounded-lg text-white border-none outline-none px-4 py-3"
          type="text"
          placeholder="Title"
          value={modalForm.title}
          onChange={(e) =>
            setModalForm((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          required
          className="text-input-area w-full text-base bg-inherit text-white border-none outline-none text-base px-4 py-3"
          placeholder="Take a note"
          value={modalForm.content}
          onChange={(e) =>
            setModalForm((prev) => ({ ...prev, content: e.target.value }))
          }
        ></textarea>
        <div className="close-modal absolute top-0 right-0">
          <button
            className="bg-inherit text-white border-base cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <Close></Close>
          </button>
        </div>
        <div className="w-full flex justify-end items-center">
          <button
            className="edit-btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer"
            onClick={() => handleEdit(modalForm.id)}
          >
            Edit
          </button>
          <button
            className="remove-btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
