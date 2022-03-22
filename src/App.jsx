import "./App.css";
import { Navbar, Sidebar, NotesForm, NotesList } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* Sidebar */}
      <div className="container">
        <Sidebar />
        {/* main container */}
        <div className="notes-container">
          <NotesForm />
          <NotesList />
        </div>
      </div>
    </div>
  );
};

export default App;
