import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-between">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Newsline
            </a>
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
                <li className="nav-item">
                  <a
                    className="nav-link active  text-center"
                    aria-current="page"
                    href="#"
                  >
                    <i className="bi bi-house-door mx-1"></i>Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center">
                  <i className="bi bi-globe2 mx-1"></i>Global
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="#">
                    <i className="bi bi-briefcase mx-1"></i>Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center" href="#">
                    <i className="bi bi-android2 mx-1"></i>Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center">
                    <i className="bi bi-controller mx-1"></i>Sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center">
                  <i className="bi bi-hospital mx-1"></i>Medical
                  </a>
                </li>
              </ul>
          <div className="dropdown ">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-globe-asia-australia " ></i> Country
  </button>
  <ul className="dropdown-menu  mt-2 ">
    <div className=" d-flex justify-content-between">
        <div className="">           
    <li><a className="dropdown-item " href="#">India</a></li>
    <li><a className="dropdown-item" href="#">America</a></li>
    <li><a className="dropdown-item" href="#">Russia</a></li>
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
