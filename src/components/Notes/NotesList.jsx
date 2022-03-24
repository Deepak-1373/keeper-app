import React from "react";
import { useNotes } from "../../context";
import { Modal } from "../Modal/Modal";
import "./NotesList.css";

export const NotesList = () => {
  const { notesList, setOpenModal } = useNotes();

  return (
    <div className="notes-list-container flex-row justify-center">
      {notesList &&
        notesList.map(({ id, title, content }) => (
          <div
            key={id}
            className="note border-round"
            onClick={(prev) => setOpenModal(!prev)}
          >
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        ))}
      <Modal />
    </div>
  );
};
