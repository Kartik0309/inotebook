import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState= (props)=>{
    const initial='http://localhost:5000/api';
    const notesInitial=[];
    
    const [notes, setNotes] = useState(notesInitial);

    //Fetch All notes
    const fetchAllNotes =async ()=>{
        const url=`${initial}/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY3ODUyNWQyZmU1MDIzZGQwYTYxZSIsImlhdCI6MTY3NTYwMDkyN30.50FKIc6y3YPq9iPt9LuAs_otDxJmj4vGtuMO-nAaJak',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
          let data=await response.json();
          setNotes(data);
    }


    //Add a note
    const addNote=async (title,description,tag)=>{
        //API CALL
        const url=`${initial}/notes/addnewnote`
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY3ODUyNWQyZmU1MDIzZGQwYTYxZSIsImlhdCI6MTY3NTYwMDkyN30.50FKIc6y3YPq9iPt9LuAs_otDxJmj4vGtuMO-nAaJak',
            },
            body: JSON.stringify({title,description,tag})
          });
          console.log(response);
            const note={
                "_id": "shfkshfkhsdfkuhsfkhsf",
                "user": "63df78525d2fe5023dd0a61e",
                "title":title,
                "description": description,
                "tag": tag,
                "date":"",
                "__v": 0
              }
            setNotes(notes.concat(note));
          
    }

    // Delete a Note
    const deleteNote= async(id)=>{
        //API CALL
        const url=`${initial}/notes/deletenote/`+id.toString();
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY3ODUyNWQyZmU1MDIzZGQwYTYxZSIsImlhdCI6MTY3NTYwMDkyN30.50FKIc6y3YPq9iPt9LuAs_otDxJmj4vGtuMO-nAaJak',
            },
          });


        //LOGIC  
        console.log("Deleting note with id:"+id)
        const newNote=notes.filter((note)=>{ return note._id!==id});
        setNotes(newNote);
    }

    //Edit A Node
    //Logic
    const editNote= async (id,title,description,tag)=>{
      const url=`${initial}/notes/updatenote/`+id.toString();
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY3ODUyNWQyZmU1MDIzZGQwYTYxZSIsImlhdCI6MTY3NTYwMDkyN30.50FKIc6y3YPq9iPt9LuAs_otDxJmj4vGtuMO-nAaJak',
            },
            body: JSON.stringify({title,description,tag})
          });
      let newNotes=[];
      for(let i=0;i<notes.length;i++){
        let note=notes[i];
        if(note._id.toString()===id.toString())
        {
          note.title=title;
          note.description=description;
          note.tag=tag;
        }
        newNotes.concat(note);
      }
      setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;