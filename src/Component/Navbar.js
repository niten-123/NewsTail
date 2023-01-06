import React, { useState } from "react";
import { Link } from "react-router-dom";

const  Navbar=()=>{
  
 
    return (
      <>
        <nav className="navbar navbar-expand-lg  sticky-top  bg-light  ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              Newsline
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/general">
                  <i className="bi bi-globe2 mx-1"></i>General
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/business">
                    <i className="bi bi-briefcase mx-1"></i>Business
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/technology">
                    <i className="bi bi-android2 mx-1"></i>Technology
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/sport">
                    <i className="bi bi-controller mx-1"></i>Sport
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/science">
                  <i className="bi bi-boxes mx-1"></i>Science
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/entertainment">
                  <i className="bi bi-tv mx-1"></i>Entertainment
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link  className="nav-link text-center" to="/health">
                  <i className="bi bi-hospital mx-1"></i>Health
                  </Link>
                </li>
              </ul>
              

          
  

            </div>
          </div>
        </nav>
        
      </>
    );
  }


export default Navbar;
