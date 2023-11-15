import React, { useState, useContext } from 'react';
import NoteContext from '../context/notes-context';

const AddNoteForm = () => {
    const { dispatch } = useContext(NoteContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const addNote = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({ type: 'ADD_NOTE', title, body });
            setTitle("");
            setBody("");
        }
    }
    return (
        <form>
            <div className="form-group">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control mb-2" />
            </div>
            <div className="form-group">
                <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)} className="form-control"></textarea>
            </div>
            <div className="d-grid gap-2">
                <button onClick={addNote} className="btn btn-primary btn-block mt-3">Add Note</button>
            </div>

        </form>
    )
}

export default AddNoteForm;