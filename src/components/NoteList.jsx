import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    //console.log("notes:", notes);
    
    return(
        <div className="note-list">
            {
                notes.map((note) => {
                    return (
                        <NoteItem key={note.id} {...note} />
                    );
                })
            }
        </div>
    );
}

export default NoteList;