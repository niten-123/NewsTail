import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(){
    super();
    this.state={
          country:"Country"
        }

  }    
  

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  sticky-top bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
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
              </ul>
              
          <div className="dropdown  ">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-globe-asia-australia mx-1" ></i>{this.state.country}
  </button>
  <ul className="dropdown-menu  mt-2 ">
    <div className=" d-flex justify-content-between">
        <div className="">           
    <li><button className="dropdown-item ">India</button></li>
    <li><button className="dropdown-item" >America</button></li>
    <li><button className="dropdown-item" to="#">Russia</button></li>
        </div>
        <div className="">           
    <li><a className="dropdown-item " href="#">China</a></li>
    <li><a className="dropdown-item" href="#">Aafrica</a></li>
    <li><a className="dropdown-item" href="#">Afghanistan</a></li>
        </div>
        <div className="">           
    <li><a className="dropdown-item " href="#">Korea</a></li>
    <li><a className="dropdown-item" href="#">Pakistan</a></li>
    <li><a className="dropdown-item" href="#">Japan</a></li>
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
}

export default Navbar;
