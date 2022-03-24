import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";

const notesContext = createContext(null);

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const [modalForm, setModalForm] = useState({
    id: "",
    title: "",
    content: "",
  });

  const [notesList, setNotesList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e, field) => {
    setNotes((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesList((prev) => [{ id: uuid(), ...notes }, ...prev]);

    setNotes({
      title: "",
      content: "",
    });
  };

  return (
    <notesContext.Provider
      value={{
        notes,
        handleChange,
        handleSubmit,
        notesList,
        openModal,
        setOpenModal,
        modalForm,
        setModalForm,
      }}
    >
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { useNotes, NotesContextProvider };
