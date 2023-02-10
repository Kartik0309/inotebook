import React, { useEffect,useState } from 'react'
import AlertContext from "./AlertContext"
export const AlertState = (props) => {
    const [Alert, setAlert] = useState({type:"",message:""});
    const showAlert=()=>{  
    }
  return (
    <AlertContext.Provider value={{Alert,setAlert,showAlert}}>
            {props.children}
        </AlertContext.Provider>
  )
}
export default AlertState;