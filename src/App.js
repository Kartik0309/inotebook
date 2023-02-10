import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from "./components/Login";
import Authstate from "./context/auth/AuthState";
import Signup from "./components/Signup";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/Alert";
function App() {
  
  return (
    <>
    <AlertState>
    <Authstate>
      <NoteState>
        <BrowserRouter>
          <Navbar />

          <Alert/>
          <div className="container">
            <Routes>
            <Route exact path="/" element={<Login  />}/>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
        </NoteState>
        </Authstate>
        </AlertState>
    </>
  )
}

export default App;