import "./App.css";
import { Navbar } from "./components";
import { useTheme } from "./context";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Home />} />
        <Route path="/bin" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
