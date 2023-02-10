import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext';
function Navbar() {
    const context=useContext(AuthContext);
    const navigate=useNavigate();
    const context1 = useContext(AlertContext);
    const {setAlert}=context1;
    const {authToken,setauthToken}=context;
    const location = useLocation();
    let val=location.pathname;
    const handleClick=()=>{
        setauthToken({
            token:"",
            login:false
        })
        navigate('/');
        setAlert({type:"success",message:"Logout Successful"});
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`${authToken.login===true?'/home':'/'}`}>iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${val==='/home'?'active':""}`} aria-current="page" to={`${authToken.login===true?'/home':'/'}`}>Home</Link>
                            </li>
        
                        </ul>
                        <form class="d-flex" role="search">
                        <button type="button" class={`btn btn-danger ${authToken.token===""?'d-none':""}`} onClick={handleClick}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar