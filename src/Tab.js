import React from 'react';
import { Link } from 'react-router-dom';

function Tab(props) {
    return (
      <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <ul className="nav nav-tabs">
              <li className="nav-item dropdown" aria-current="page" href="#">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Employee List</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All</a></li>
                  <li><a className="dropdown-item" href="#">Orginazation</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Position</a></li>
                
                </ul>
              </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
              
              
            </div>
          </nav>
        </div>
      
    )
}

export default Tab;