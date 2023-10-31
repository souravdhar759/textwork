import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}  navbar-${props.green} bg-${props.green}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        </li>
        <li className="nav-item">
         
        </li>
        </ul>
        </div>
        <div  className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.switchmode} id="flexSwitchCheckDefault"/>
  <label  classNameName="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode Enable</label>
</div>

  </div>
  
</nav>

  )
}
Navbar.prototypes ={
  title : PropTypes.string.isRequired,
}
Navbar.defaultProps={
  title:'set title here'
};