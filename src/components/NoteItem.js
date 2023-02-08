import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'
function NoteItem(props) {
    const {note,updateNote}=props;
    const context = useContext(NoteContext)
    const {deleteNote} = context;
    
  return (
    <div className="col-md-3">
        <div className="card my-3">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
    </div>
    <p className="card-text">{note.description}</p>
  </div>
</div>

    </div>
  )
}

export default NoteItem