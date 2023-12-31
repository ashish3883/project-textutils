import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">{props.aboutText}</a>
                </li>
              </ul>
              <div className="form-check form-switch mx-2">
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'Dark':'Light'} Mode`}</label>
                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-1`}>Search</button>
              </form>
            </div>
          </div>
        </nav>
  )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'TextUtils0',
    aboutText: 'About'
}
;