import React, { useState } from "react";
import { Link } from "react-router-dom";

const  Navbar=(props)=>{
  const[country,setCountry]= useState("Country")
 
    return (
      <>
        <nav className="navbar navbar-expand-lg  sticky-top bg-light ">
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
              <ul className="navbar-nav">
                
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/general">
                  <i className="bi bi-globe2 mx-1"></i>General
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/business">
                    <i className="bi bi-briefcase mx-1"></i>Business
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/technology">
                    <i className="bi bi-android2 mx-1"></i>Technology
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/sport">
                    <i className="bi bi-controller mx-1"></i>Sport
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/science">
                  <i className="bi bi-hospital mx-1"></i>Science
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/entertainment">
                  <i className="bi bi-tv mx-1"></i>Entertainment
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link  className="nav-link text-center" to="/health">
                  <i className="bi bi-tv mx-1"></i>Health
                  </Link>
                </li>
              </ul>
              
          <div className="dropdown  ">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-globe-asia-australia mx-1" ></i>{country}
  </button>
  <ul className="dropdown-menu  mt-2 ">
    <div className=" d-flex justify-content-between">
        <div className="">           
    <li><button className="dropdown-item " onClick={()=>{setCountry("India")}}>India</button></li>
    <li><button className="dropdown-item" onClick={()=>{setCountry("America")}} >America</button></li>
    <li><button className="dropdown-item"  onClick={()=>{setCountry("Russia")}}>Russia</button></li>
        </div>
        <div className="">           
    <li><button className="dropdown-item " onClick={()=>{setCountry("Australia")}}> Australia</button></li>
    <li><button className="dropdown-item" onClick={()=>{setCountry("France")}} >France</button></li>
    <li><button className="dropdown-item"  onClick={()=>{setCountry("United Kingdom")}}>United Kingdom</button></li>
        </div>
        
       
       
    </div>

  </ul>
</div>
            </div>
          </div>
        </nav>
        
      </>
    );
  }


export default Navbar;
