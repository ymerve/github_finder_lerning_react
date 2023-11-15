import React from "react"
import ReactDOM from 'react-dom/client';
import '../../styles/main.scss';
import NoteApp from "./components/NoteApp";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<NoteApp />);
