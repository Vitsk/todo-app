import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ({ signOut }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/main/home">Todo App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-secondary" to='/main/add' >
                  Add
                </NavLink>
              </li>
            </ul>
            <button 
              className="btn btn-outline-danger" 
              type="submit"
              onClick={signOut}
            >Exit</button>
          </div>
        </div>
      </nav>
    </>
  )
}