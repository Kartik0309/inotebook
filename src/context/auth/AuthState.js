import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
const Authstate = (props) => {
    const [authToken, setauthToken] = useState({token:"",login:false});
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
            console.log(data.error);
        }
        else {
            setauthToken({
                token:data.token,
                login:true
            })
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
            console.log(authToken.token);
        }
    }
    return (
        <AuthContext.Provider value={{ login, authToken, setauthToken,signup }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default Authstate;