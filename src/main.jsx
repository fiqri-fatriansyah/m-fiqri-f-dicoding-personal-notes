import React from "react";
import {createRoot} from "react-dom/client";

import NoteApp from "./components/NoteApp";

const element = (
    <NoteApp />
);

const root = createRoot(document.getElementById("root"));
root.render(element);