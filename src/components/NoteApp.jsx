import React from "react";

import { getInitialData } from "../../utils/index";
import { showFormattedDate } from "../../utils/index";

import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }
    //console.log("notes:", this.state.notes);

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddContactHandler({ title, body }) {
        if(title !== "" && body !== "") {
            this.setState((prevState) => {
                return {
                    notes: [
                        ...prevState.notes,
                        {
                            id: +new Date(),
                            title,
                            body,
                            createdAt: +new Date(),
                            archived: false,
                        }
                    ]
                }
            });
        }
    }

    render() {
        return (
            <div className="note-app">
                <h1>Fiqri's Personal Notes</h1>
                <div className="note-form">
                    <h2>Create a new Note</h2>
                    <NoteForm addNote={this.onAddContactHandler} />
                </div>
                <h2>Notes List</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NoteApp;