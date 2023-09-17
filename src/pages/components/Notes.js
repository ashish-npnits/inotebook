import { useContext } from 'react';
import noteContext from '../../context/notes/noteContext';
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes} = context;
  return (
    <div className=" my-4">
      <h1>Your Notes</h1>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </div>
  );
}

export default Notes;
