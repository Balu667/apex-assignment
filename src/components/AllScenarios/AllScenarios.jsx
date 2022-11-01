import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './AllScenarios.css';

export const AllScenarios = () => {

    const [scenarios,setScenarios] = useState(null);

    useEffect(() => {
        const data =JSON.parse(localStorage.getItem("scenarios"));
        setScenarios(data);
        console.log(data);
    },[])

    // const scenarios = [{id:1,scenarioName:"Test Scenario",scenarioTime:"5s",vehicles:[{vehicleName:"bus"}]},{id:1,scenarioName:"Test Scenario",scenarioTime:"2s",vehicles:[{vehicleName:"bus"}]}]
  return (
    <section className='all-scenarios-section'>
        <div className='all-scenarios-header'>
            <h3>All Scenarios</h3>
            <div className='row-container'>
                <NavLink to="/addscenario" className="header-link">New Scenario</NavLink>
                <NavLink to="/addvehicle" className="header-link">Add Vehicle</NavLink>
                <button className="header-link">Delete All</button>
            </div>
        </div>
        <div className='all-scenarios-content'>
          <table>
            <thead>
            <tr>
                <th>Scenario Id</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Number of Vehicles</th>
                <th>Add Vehicle</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {scenarios && scenarios.length > 0 && scenarios.map((item,i) => {
                    return <tr><td>{item.id}</td>
                    <td>{item.scenarioName}</td>
                    <td>{item.scenarioTime}</td>
                    <td>{item.vehicles.length}</td>
                    <td><NavLink to="/addvehicle">Add</NavLink></td>
                    <td><NavLink to="/addscenario">Edit</NavLink></td>
                    <td>delete</td>
                    </tr>
                })}
                </tbody>
          </table>
        </div>
    </section>
  )
}
