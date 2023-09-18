import React, { useState } from 'react'
import alertContext from './alertContext'

function AlertState(props) {
   const [alert, setAlert] = useState({msg:"", type:"", display:false});
   const showAlert =(msg, type, display) =>{
        setAlert({msg, type, display});
        setTimeout(() => {
            setAlert({msg:"", type:"", display:""}); 
        }, 1000);
   }
  return (
    <alertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </alertContext.Provider>
  )
}

export default AlertState
