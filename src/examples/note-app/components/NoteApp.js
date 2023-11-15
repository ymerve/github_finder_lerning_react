import React, { useEffect, useReducer } from "react"
import noteReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NoteContext from "../context/notes-context";

const NoteApp = () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(noteReducer, []);

    // mount : uygulama yuklendiginde bir kere calisir...
    useEffect(() => {
        const notes_data = JSON.parse(localStorage.getItem("notes"));
        if (notes_data) {
            // setNotes(notes_data);
            dispatch({ type: 'POPULATE_NOTES', notes: notes_data })
        }
    }, []);
    // update : notes guncellendiginde tetiklenir...
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <NoteContext.Provider value={{notes, dispatch}}>
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    <div className="card-body">
                        {
                            notes && (
                                <>
                                    <table className="table table-sm table-striped mb-0">
                                        <tbody>
                                            {
                                                <NoteList />
                                            }
                                        </tbody>
                                    </table>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header">Add a New Note</div>
                    <div className="card-body">
                        <div className="alert bg-info">notes length : {notes.length}</div>
                        <AddNoteForm dispatch={dispatch} />
                    </div>
                </div>
            </div>
        </NoteContext.Provider>
    )
}

export default NoteApp;