import Alert from "./components/Alert";
import Notes from "./components/Notes";
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const Home = () => {

    const context = useContext(noteContext);
    const { addNote} = context;

   const [note,setNote] =  useState({title:"", description:"", tag:""})
    const onChange = (event) => {
        
        setNote({...note,[event.target.name]:event.target.value})
    }

    const saveNotes = (event) =>{
        event.preventDefault();
        addNote(note)
    }

  return (
    <div className="container my-4">
        <Alert msg="All done"/>
      <h1>Add a note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveNotes}>
          Submit
        </button>
      </form>
      <Notes/>
    </div>
  );
};

export default Home;
