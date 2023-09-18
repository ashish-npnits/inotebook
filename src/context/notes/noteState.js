import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const baseURL = 'http://localhost:4000'
    let InitialNotes = [];
    const [notes,setNotes] = useState(InitialNotes);

 
    async function callAPI(type, url = "", data ) {

      let reqInit = {
        method: type, 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDZjNTViMTFhYmUxODllMGM2MjllOCIsImlhdCI6MTY5NDk0MjU1NX0.A11TOHSAc2REz_Q9cX1Lc_cIizHAe1lZJqnq4Z6Xaw4"
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer"
      };

      if(data!=null)
      {
        reqInit.body = JSON.stringify(data);
      }

      const response = await fetch(url, reqInit);
      return response.json(); 
    }

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