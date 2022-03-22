import "./App.css";
import { Navbar, Sidebar, NotesForm } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* Sidebar */}
      <div className="container">
        <Sidebar />
        {/* main container */}
        <NotesForm />
      </div>
    </div>
  );
};

export default App;
