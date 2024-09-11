import React from 'react'
import propTypes from 'prop-types'

export default function navbar(props) {
  return (
  
<nav className={`navbar bg-body-tertiary-${props.mode}`}>
  <div className="container-fluid">
     <a className="navbar-brand"href="#">{props.title}</a>
     <a class="navbar-brand"href="#" >Home</a>
     <a class="navbar-brand"href="#">Welcome</a>
    <form className="d-flex" role="search">
{/*      
      <button class="btn btn-outline-success" type="submit">Search</button>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">change mode</label>
      

</div>
    </form>
    
  </div>
</nav>
  )
}
