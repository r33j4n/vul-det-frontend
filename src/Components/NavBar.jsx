import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="navbar-brand" href="#">DeCod3</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/account">Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
          </div>
      </nav>
    );
};

export default NavBar;
