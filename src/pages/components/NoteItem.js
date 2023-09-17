import React from 'react';

function NoteItem(props) {
    const {note} = props;
  return (
    <div class="card col-md-3 mx-2 my-3">
      <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">
          {note.description}
        </p>
       
      </div>
    </div>
  );
}

export default NoteItem;
