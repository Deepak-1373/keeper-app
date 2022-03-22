import "./App.css";
import { Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* Sidebar */}
      <div className="container">
        <Sidebar />
        {/* main container */}
      </div>
    </div>
  );
};

export default App;
