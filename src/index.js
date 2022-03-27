import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotesContextProvider, ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
