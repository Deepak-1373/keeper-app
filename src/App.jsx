import "./App.css";
import { Navbar, Sidebar, NotesForm, NotesList } from "./components";
import { useTheme } from "./context";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="notes-container">
          <NotesForm />
          <NotesList />
        </div>
      </div>
    </div>
  );
};

export default App;
