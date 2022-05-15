import React from "react";
import "./Modal.css";
import { HANDLE_EDIT, HANDLE_REMOVE, HANDLE_ARCHIVE } from "../../reducer";
import { useNotes, useTheme } from "../../context";

export const Modal = ({ modalForm, openModal, setModalForm, setOpenModal }) => {
  const { notesDispatch } = useNotes();
  const { theme } = useTheme();

  const handleEdit = (id) => {
    notesDispatch({
      type: HANDLE_EDIT,
      payload: {
        currId: id,
        id: modalForm.id,
        title: modalForm.title,
        content: modalForm.content,
        backgroundColor: modalForm.backgroundColor,
      },
    });
    setOpenModal(false);
  };

  const handleRemove = (id) => {
    notesDispatch({
      type: HANDLE_REMOVE,
      payload: id,
    });
    setOpenModal(false);
  };

  const handleChange = (e, field) => {
    setModalForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleArchive = (id) => {
    notesDispatch({
      type: HANDLE_ARCHIVE,
      payload: {
        currId: id,
        id: modalForm.id,
        title: modalForm.title,
        content: modalForm.content,
        backgroundColor: modalForm.backgroundColor,
      },
    });
    setOpenModal(false);
  };

  return (
    <div
      className={`${
        openModal && "show-modal-bg"
      } modal-background flex justify-center items-center w-screen h-screen fixed inset-0`}
    >
      <div
        className="modal-container relative flex flex-col justify-center items-start px-4 py-3 rounded-lg border-base text-white"
        style={{ backgroundColor: modalForm.backgroundColor[theme] }}
      >
        <input
          required
          className="form-input w-full text-2xl bg-inherit rounded-lg text-white border-none outline-none px-4 py-3"
          type="text"
          placeholder="Title"
          value={modalForm.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <textarea
          required
          className="text-input-area w-full text-base bg-inherit text-white border-none outline-none text-base px-4 py-3"
          placeholder="Take a note"
          value={modalForm.content}
          onChange={(e) => handleChange(e, "content")}
        ></textarea>
        <div className="flex flex-wrap">
          {modalForm.label &&
            modalForm.label.map(({ id, labelName }) => (
              <div
                key={id}
                className="modalform-labels-list border-base cursor-pointer"
              >
                <span>{labelName}</span>
              </div>
            ))}
        </div>
        <div className="close-modal absolute top-0 right-0">
          <button
            className="close-modal-button bg-inherit text-white border-none cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="w-full flex justify-between items-center">
          <button
            className="btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer"
            onClick={() => handleArchive(modalForm.id)}
          >
            Move to Archive
          </button>
          <div>
            <button
              className="btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer"
              onClick={() => handleEdit(modalForm.id)}
            >
              Edit
            </button>
            <button
              className="btn px-4 py-3 rounded-lg bg-inherit text-white border-base cursor-pointer"
              onClick={() => handleRemove(modalForm.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
