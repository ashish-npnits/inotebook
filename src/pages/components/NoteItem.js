import React from 'react';
import { useContext } from 'react';
import noteContext from '../../context/notes/noteContext';

function NoteItem(props) {
    const {note} = props;
    const context = useContext(noteContext);
    const { deleteNote} = context;
  return (
    <div class="card col-md-3 mx-2 my-3">
      <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">
          {note.description}
        </p>
        <i class="fa-solid fa-trash mx-2" onClick={()=>deleteNote(note._id)}></i>
        <i class="fa-solid fa-pen-to-square mx-2"></i>
      </div>
    </div>
  );
}

export default NoteItem;
