import React, { useState } from "react";
import { useNotes } from "../../context";
import { Modal } from "../Modal/Modal";
import "./NotesList.css";

export const NotesList = () => {
  const { notesList, searchQuery } = useNotes();
  const [openModal, setOpenModal] = useState(false);
  const [modalForm, setModalForm] = useState({
    id: "",
    title: "",
    content: "",
  });

  const clickHandler = (id, title, content, backgroundColor) => {
    setModalForm({
      id: id,
      title: title,
      content: content,
      backgroundColor: backgroundColor,
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
          .map(({ id, title, content, backgroundColor }) => (
            <div
              style={{ backgroundColor: backgroundColor }}
              key={id}
              className="note rounded-lg w-full px-4 py-3 border-base cursor-pointer"
              onClick={() => clickHandler(id, title, content, backgroundColor)}
            >
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))}
      <Modal
        modalForm={modalForm}
        openModal={openModal}
        setModalForm={setModalForm}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
