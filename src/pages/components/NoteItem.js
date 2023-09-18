import React from 'react';
import { useContext } from 'react';
import noteContext from '../../context/notes/noteContext';

function NoteItem(props) {
    const {note} = props;
    const context = useContext(noteContext);
    const { deleteNote} = context;
  return (
    <div className="card col-md-3 mx-2 my-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">
          {note.description}
        </p>
        <i className="fa-solid fa-trash mx-2" onClick={()=>deleteNote(note._id)}></i>
        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>props.updateNote()}></i>
      </div>
    </div>
  );
}

export default NoteItem;
