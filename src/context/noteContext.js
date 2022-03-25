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
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleEdit = () => {
    setNotesList((prev) => {
      return prev.map((curr) =>
        curr.id === modalForm.id ? { ...curr, ...modalForm } : curr
      );
    });
    setOpenModal(false);
  };

  const handleRemove = () => {
    setNotesList((prevList) =>
      prevList.filter(({ id }) => id !== modalForm.id)
    );
    setOpenModal(false);
  };

  return (
    <notesContext.Provider
      value={{
        notes,
        notesList,
        openModal,
        modalForm,
        searchQuery,
        setOpenModal,
        setModalForm,
        setSearchQuery,
        handleChange,
        handleSubmit,
        handleEdit,
        handleRemove,
      }}
    >
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => useContext(notesContext);

export { useNotes, NotesContextProvider };
