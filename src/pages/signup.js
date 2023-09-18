import React, { useState } from 'react';
import callAPI from '../utils/apiUtils';
import {baseURL} from '../const/constants';
import {useNavigate } from 'react-router-dom';

function Signup() {
  const [signUpData, setSignUpData] = useState({name:"",email:"", password:"",cpassword:""});
  
  const onChange=(event)=>{
    setSignUpData({...signUpData,[event.target.name]:event.target.value})
  }

  const navigate = useNavigate();
   const submitLogin= async (event)=>{
        event.preventDefault();
        const createuser = await callAPI('POST',`${baseURL}/api/auth/createuser`,signUpData);
        if(createuser.success){
            localStorage.setItem('token',createuser.authtoken);
            navigate('/home');
        }else{
            alert('invalid details - ');
        }
        
   }
  
  return (
    <div className="container my-4 d-flex justify-content-center">
      <form className='col-md-4'>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" name="name" value={signUpData.name} onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" name="email" value={signUpData.email} aria-describedby="emailHelp" onChange={onChange}/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" name="password" value={signUpData.password}  onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" value={signUpData.cpassword}  onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitLogin}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
