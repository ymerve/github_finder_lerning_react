import React, { useContext } from 'react';
import NoteContext from '../context/notes-context';

const Note = ({ note }) => {
    const { dispatch } = useContext(NoteContext);
    return (
        <tr key={note.title}>
            <td className="ms-3">{note.title}</td>
            <td className="ms-3">{note.body}</td>
            <td className="text-end">
                <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })} className="btn btn-sm btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            </td>
        </tr>
    )
}

export default Note;
