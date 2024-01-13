import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../../utils/index";
import { showFormattedDate } from "../../utils/index";

function NoteApp() {
    const notes = getInitialData();
    //console.log("notes:", notes);

    return (
        <div className="note-app">
            <h1>Fiqri's Personal Notes</h1>
            <h2>Notes List</h2>
            <NoteList notes={notes} />
        </div>
    );
}

export default NoteApp;