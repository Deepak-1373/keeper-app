import React from "react";
import { useNotes } from "../../context";
import "./NotesList.css";

export const NotesList = () => {
  const { notesList } = useNotes();

  return (
    <div className="notes-list-container flex-row justify-center">
      {notesList.length &&
        notesList.map(({ id, title, content }) => (
          <div key={id} className="note">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        ))}
    </div>
  );
};
