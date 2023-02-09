import React, { useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import AddNote from './AddNote';
import Note from './Note';
function Home() {
  const context = useContext(AuthContext);
  const {authToken}=context;
  let navigate = useNavigate();
  return (
      <>
          <AddNote/>
          <Note/>
      </>
    )
  
}

export default Home