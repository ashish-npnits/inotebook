import React, { useState, useContext } from 'react';
import Alert from "./components/Alert";
import callAPI from '../utils/apiUtils';
import {baseURL} from '../const/constants';
import {useNavigate } from 'react-router-dom';
import alertContext from "../context/alert/alertContext";

function Login() {
   const [credentials, setCredentials] = useState({email:"", password:""});

   const alertCon = useContext(alertContext);
   const {alert, showAlert} = alertCon;

   const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
   }

   const navigate = useNavigate();
   const submitLogin= async (event)=>{
        event.preventDefault();
        const login = await callAPI('POST',`${baseURL}/api/auth/login`,credentials);
        if(login.success){
            localStorage.setItem('token',login.authtoken);
            showAlert("Login successfully !! ", "success", true);
            navigate('/home');
        }else{
            showAlert("Login failed !! ", "danger", true);
        }
        
   }

  return (
    <>
    <div className="container my-4"><Alert alert={alert}/></div>
    <div className="container my-4 d-flex justify-content-center">
      <form className='col-md-4'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password}  onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitLogin}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
