import React from 'react';
import {Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
    let location = useLocation();
    const navigate = useNavigate();
    const doLogout=()=>{
      localStorage.clear();
      navigate('/login');
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            iNoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/home'||location.pathname==='/'?'active':''}`} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex">
            <Link type="button" className="btn btn-primary btn-sm mx-2" to="/login">Login</Link>
            <Link type="button" className="btn btn-primary btn-sm mx-2" to="/signup">Signup</Link>
            </form>:<button type="button" className="btn btn-primary btn-sm mx-2" onClick={doLogout}>logout</button>}
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default NavBar;
