import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


export const Sidebar = () => {
  return (
    <nav className='navbar'>
        <NavLink  activeClassName="active"  className="nav-link" to="/home">Home</NavLink>
        <NavLink activeClassName="active"  className="nav-link" to="/addscenario">Add Scenario</NavLink>
        <NavLink activeClassName="active"  className="nav-link" to="/allscenarios">All Scenarios</NavLink>
        <NavLink  activeClassName="active" className="nav-link" to="/addvehicle">Add Vehicle</NavLink>
    </nav>
  )
}
