import React ,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext'

function Signup() {
    const navigate=useNavigate();
    const context = useContext(AuthContext);
    const {signup,authToken}=context;
    const handleClick =(e)=>{
        e.preventDefault();
        signup(cred.name,cred.email,cred.password);
        if(authToken.login===true){
            navigate('/home');
        }
        else
        {
            navigate('/signup');
        }
    }
    const [cred, setcred] = useState({name:"",email:"",password:""});
    const onChange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="container my-3">
        <h2>Signup</h2>
    <form onSubmit={handleClick}>
  <div className="mb-3 my-3">
  <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" required name="name" onChange={onChange} aria-describedby="name"/>
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" required name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" required name ="password" id="password" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary mx-5" >Signup</button>
</form>

    </div>
    </>
  )
}

export default Signup