import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const InitialNotes = [
        {
          "_id": "6506ced8d72fd0dc3d14d021",
          "user": "6506c55b11abe189e0c629e8",
          "title": "notes1",
          "description": "description",
          "tag": "ATS",
          "date": "2023-09-17T10:03:04.472Z",
          "__v": 0
        },
        {
          "_id": "6506ced8d72fd0dc3d14d023",
          "user": "6506c55b11abe189e0c629e8",
          "title": "notes2",
          "description": "description",
          "tag": "ATS",
          "date": "2023-09-17T10:03:04.660Z",
          "__v": 0
        },
        {
          "_id": "6506ced8d72fd0dc3d14d025",
          "user": "6506c55b11abe189e0c629e8",
          "title": "notes3",
          "description": "description",
          "tag": "ATS",
          "date": "2023-09-17T10:03:04.812Z",
          "__v": 0
        }
      ]
    const [notes,setNotes] = useState(InitialNotes);

    //Add a note
    const addNote = ({title, description, tag}) =>{
        const note = {
            "_id": "6506ced8d72fd0dc3d14d025",
            "user": "6506c55b11abe189e0c629e8",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-17T10:03:04.812Z",
            "__v": 0
          };
          setNotes(notes.concat(note))
      }
    //delete a note
    const  deleteNote = (id) => {
        const newNote = notes.filter((note)=>{return note._id!==id});
        setNotes(newNote)

      }
    //update a note
    const updateNote = () => {
        
    }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, updateNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;