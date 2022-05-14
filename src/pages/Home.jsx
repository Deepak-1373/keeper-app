import "../App.css";
import React from "react";
import { NotesForm, NotesList, Sidebar } from "../components";

export const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="notes-container">
        <NotesForm />
        <NotesList />
      </div>
    </div>
  );
};
