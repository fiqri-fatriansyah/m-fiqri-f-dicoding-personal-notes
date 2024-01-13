import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-form__container" onSubmit={this.onSubmitEventHandler}>
                <div className="note-form__label">
                    <label>Title</label>
                </div>
                <div className="note-form__input">
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                </div>
                <div className="note-form__label">
                    <label>Content</label>
                </div>
                <div className="note-form__input">
                    <input type="text" placeholder="Content" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                </div>
                <div className="note-form__button">
                    <button type="submit">Buat</button>
                </div>
            </form>
        )
    }
}

export default NoteForm;