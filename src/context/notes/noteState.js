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
          "title": "notes1",
          "description": "description",
          "tag": "ATS",
          "date": "2023-09-17T10:03:04.660Z",
          "__v": 0
        },
        {
          "_id": "6506ced8d72fd0dc3d14d025",
          "user": "6506c55b11abe189e0c629e8",
          "title": "notes1",
          "description": "description",
          "tag": "ATS",
          "date": "2023-09-17T10:03:04.812Z",
          "__v": 0
        }
      ]
    const [notes,setNotes] = useState(InitialNotes);


    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;