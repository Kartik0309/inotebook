import React, { useContext,useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
import AlertContext from '../context/alert/AlertContext';
function AddNote() {
const context = useContext(NoteContext);
const {addNote}=context;
const [note, setnote] = useState({title:"",description:"",tag:"General"})
const context1 = useContext(AlertContext);
    const {setAlert}=context1;
const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setAlert({type:"success",message:"Note Added Successfully!!"});
}
const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
    <div className="container my-3">
        <h1>Add New Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' required onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" required id="description" name='description' onChange={onChange}  />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" required id="tag" name='tag' onChange={onChange}  />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </>
  )
}

export default AddNote