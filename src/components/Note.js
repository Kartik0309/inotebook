import React, { useContext, useEffect,useRef,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
function Note() {
    const [existingnote, setexistingnote] = useState({title:"",description:"",tag:"General"})
    const [id, setid] = useState({id:""})
    const context = useContext(NoteContext);
    const ref = useRef(null)
    const first = useRef(null)
    const { notes, editNote,fetchAllNotes } = context;
    useEffect(() => {
        fetchAllNotes();
    }, [notes])
    const onChange=(e)=>{
        setexistingnote({...existingnote,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        editNote(id.id,existingnote.title,existingnote.description,existingnote.tag);
        first.current.click();
    }
    const updateNote=(note)=>{
        ref.current.click();
        setexistingnote({
            title:note.title,
            description:note.description,
            tag:note.tag
        });
        setid({id:note._id});

    }
    return (
        <>
            <button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label" >Title</label>
                                    <input type="text" className="form-control" id="title" name='title' value={existingnote.title} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" required id="description" value={existingnote.description} name='description' onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" required id="tag" name='tag' value={existingnote.tag} onChange={onChange} />
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" ref={first} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleClick}>Edit Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note.id} note={note} updateNote={updateNote} />
                })}
            </div>


        </>
    )
}

export default Note