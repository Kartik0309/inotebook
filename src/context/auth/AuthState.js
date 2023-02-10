import { useEffect, useState,useContext } from "react";
import AlertContext from "../alert/AlertContext";
import AuthContext from "./AuthContext";
const Authstate = (props) => {
    const [authToken, setauthToken] = useState({token:"",login:false});
    const context1 = useContext(AlertContext);
    const {setAlert}=context1;
    const initial = 'http://localhost:5000/api';
    const login = async (email, password) => {
        //API CALL
        const url = `${initial}/auth/login`
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        let data = await response.json();
        if (data.error) {
            setAlert({type:"danger",message:"Invalid Credentials"});
        }
        else {
                const token=await data.token.toString();
                setauthToken({login:true,token:token});
        }
    }
    const signup=async (name,email,password) => {
        const url = `${initial}/auth/createUser`
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name,email, password })
        });
        let data = await response.json();
        console.log(data);
        if (data.error) {
            console.log(data.error);
        }
        else {
            const token=await data.token.toString();
            setauthToken({login:true,token:token});
            setAlert({type:"success",message:"Signup Successful"});
        }
    }
    return (
        <AuthContext.Provider value={{ login, authToken, setauthToken,signup }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default Authstate;