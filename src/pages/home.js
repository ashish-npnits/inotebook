import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const  Home = ()=> {

    const a = useContext(noteContext);
     useEffect(()=>{
        a.update();
        // eslint-disable-next-line
     },[])
  return (
    <div className='container'>
      this is home page {a.state.name}
    </div>
  )
}

export default Home
