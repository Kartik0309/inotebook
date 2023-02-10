import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/alert/AlertContext';
import AuthContext from '../context/auth/AuthContext'

function Login(props) {
    const initial = 'http://localhost:5000/api';
    const context = useContext(AuthContext);
    const context1 = useContext(AlertContext);
    const {setAlert}=context1;
    let navigate = useNavigate();
    const {login,authToken}=context;
    const [cred, setcred] = useState({email:"",password:""});
    const onChange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    }
    const handleClick=async (e)=>{
        e.preventDefault();
        console.log("click");
        login(cred.email,cred.password);
        if(authToken.token!=="")
        {
            setAlert({type:"success",message:"Login Successful"});
            navigate('/home');
        }
        else
        {
            setAlert({type:"warning",message:"Please try Again!!"});
            navigate('/');
        }   
    }
    const handlesignup=()=>{
      navigate('/signup');
    }
  return (
    <>
    <div className="card my-5">
    <div className="container my-3">
        <h2>Login</h2>
    <form onSubmit={handleClick}>
  <div className="mb-3 my-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  required id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password"required className="form-control" name ="password" id="password" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary mx-5" >Login</button>
  <button type="button" className="btn btn-primary mx-5 " onClick={handlesignup}>Signup</button>
</form>

    </div>
    </div>
    </>
  )
}

export default Login