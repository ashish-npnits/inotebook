import { useState } from "react";
import noteContext from "./noteContext";
import callAPI from "../../utils/apiUtils";
import {baseURL} from '../../const/constants';

const NoteState = (props) =>{
    let InitialNotes = [];
    const [notes,setNotes] = useState(InitialNotes);


    const getAllNotes = async () =>{
      const notes = await callAPI('GET',`${baseURL}/api/notes/fetchallnotes`,null);
      setNotes(notes);
    }

    //Add a note
    const addNote = async ({title, description, tag}) =>{
        const note = await callAPI('POST',`${baseURL}/api/notes/createnotes`,{title, description, tag})
          setNotes(notes.concat(note))
      }
    //delete a note
    const  deleteNote = async (id) => {
        const newNote = notes.filter((note)=>{return note._id!==id});
        await callAPI('DELETE',`${baseURL}/api/notes/deletenotes/${id}`,null)
        setNotes(newNote)
      }
    //update a note
    const editNote = async (id, title, description, tag) => {
      let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
          
          if(newNotes[index]._id===id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            setNotes(newNotes);
            break;
          }
          
        }

        await callAPI('PUT',`${baseURL}/api/notes/updatenotes/${id}`,{title, description, tag})
    }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;