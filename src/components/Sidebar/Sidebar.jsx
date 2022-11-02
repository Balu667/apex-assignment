import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <nav className='navbar'>
        <NavLink  activeclassname="active" end className="nav-link" to="/">Home</NavLink>
        <NavLink activeclassname="active" className="nav-link" to="/addscenario">Add Scenario</NavLink>
        <NavLink activeclassname="active"  className="nav-link" to="/allscenarios">All Scenarios</NavLink>
        <NavLink  activeclassname="active" className="nav-link" to="/addvehicle">Add Vehicle</NavLink>
    </nav>
  )
}
