import React,{useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';
function Alert() {
    const context = useContext(AlertContext);
    const {Alert,setAlert,showAlert}=context;
    setTimeout(() => {
        setAlert(null);
    }, 2000);
    if(Alert===null)
    {
        return;
    }
    return (
        <>
        <div class={`alert alert-${Alert.type}`} role="alert">
            {Alert.message}
        </div>
        </>
    )
}

export default Alert