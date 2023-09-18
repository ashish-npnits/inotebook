import { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../../context/notes/noteContext';
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
  };
  const ref = useRef(null);
  const refclose = useRef(null);

  const [note,setNote] =  useState({title:"", description:"", tag:""})
    const onChange = (event) => {
        
        setNote({...note,[event.target.name]:event.target.value})
    }

  const updateChanges = async () =>{
    console.log(note);
    await editNote(note._id, note.title, note.description, note.tag);
    refclose.current.click();
  }
  
  return (
    <div className=" my-4">
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Notes
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={note.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateChanges}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>Your Notes</h1>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} updateNote={()=>{updateNote(note)}} />;
        })}
      </div>
    </div>
  );
}

export default Notes;
