import React from "react";
import { useNotes } from "../../context";
import { Modal } from "../Modal/Modal";
import "./NotesList.css";

export const NotesList = () => {
  const { notesList, setOpenModal, setModalForm, searchQuery } = useNotes();

  const clickHandler = (key, title, content) => {
    setModalForm({
      id: key,
      title: title,
      content: content,
    });
    setOpenModal(true);
  };

  return (
    <div className="notes-list-container flex justify-center items-start flex-wrap relative">
      {notesList &&
        notesList
          .filter((note) => {
            return !searchQuery
              ? note
              : note.title.toLowerCase().includes(searchQuery.toLowerCase());
          })
          .map(({ id, title, content }) => (
            <div
              key={id}
              className="note rounded-lg w-full px-4 py-3 border-base cursor-pointer"
              onClick={() => clickHandler(id, title, content)}
            >
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))}
      <Modal />
    </div>
  );
};
