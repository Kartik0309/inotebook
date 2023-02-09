import React from 'react'
import setTimeout from 'react'

function Alert(props) {
    if(props.message==="")
    {
        return;
    }
    return (
        <>
        <div class="alert alert-primary" role="alert">
            {props.message}  
        </div>
        </>
    )
}

export default Alert