import React from "react";
import { useNotes } from "../../context";
import { Modal } from "../Modal/Modal";
import "./NotesList.css";

export const NotesList = () => {
  const { notesList, setOpenModal } = useNotes();

  return (
    <div className="notes-list-container flex justify-center items-start flex-wrap relative">
      {notesList &&
        notesList.map(({ id, title, content }) => (
          <div
            key={id}
            className="note rounded-lg w-full px-4 py-3"
            onClick={() => setOpenModal(true)}
          >
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        ))}
      <Modal />
    </div>
  );
};
