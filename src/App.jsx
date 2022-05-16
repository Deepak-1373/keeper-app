import "./App.css";
import { Navbar } from "./components";
import { useTheme } from "./context";
import { Routes, Route } from "react-router-dom";
import { Home, Archive, NotFound, Layout } from "./pages";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bin" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
