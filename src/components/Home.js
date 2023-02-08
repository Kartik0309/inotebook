import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import Note from './Note';
function Home() {
  const context = useContext(NoteContext);
  return (
    <>
        <AddNote/>
        <Note/>
    </>
  )
}

export default Home