import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotesContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
