import React, { useState, useEffect } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  const [scenarios, setScenarios] = useState([]);
  const [scenarioName, setScenarioName] = useState("");
  const [vehicles, setVehicles] = useState([]);

  const arr = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scenarios"));
    setScenarios(data);
  }, []);

  const selectScenarioHandler = (e) => {
    setScenarioName(e.target.value);
    scenarios.map((item, i) => {
      if (item.scenarioName === e.target.value) {
        console.log(item.vehicles)
        setVehicles(item.vehicles);
      }
    })
  }

  const deleteVehicleById = (vehicle) => {
    setVehicles(vehicles.filter(item => item.id !== vehicle.id));
    scenarios.map((item, i) => {
      if (item.scenarioName === scenarioName) {
        scenarios[i].vehicles = vehicles.filter(item => item.id !== vehicle.id);
        localStorage.setItem("scenarios", JSON.stringify(scenarios));
      }
    })
  }

  const generateSquareBoxs = (arr) => {
    return <div className='horizontal'>{arr.map((item, i) => <div className='square'></div>)}</div>
  }
  return (
    <section className='home-section'>
      <div className='container-item'>
        <label>Scenario List</label>
        <select onChange={(e) => selectScenarioHandler(e)} placeholder='Select Scenario'>
          <option value="none" selected disabled hidden>Select Scenario</option>
          {scenarios && scenarios.length > 0 && scenarios.map((item, i) => <option key={i + "s"} value={item.scenarioName}>{item.scenarioName}</option>)}
        </select>
      </div>
      <div className='home-content'>
        <table>
          <thead>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vehicles && vehicles.length > 0 && vehicles.map((item, i) => {
              return <tr key={item.id}><td>{item.id}</td>
                <td>{item.vehicleName}</td>
                <td>{item.positionX}</td>
                <td>{item.positionY}</td>
                <td>{item.speed}</td>
                <td>{item.direction}</td>
                <td><NavLink to="/addvehicle">Edit</NavLink></td>
                <td><a onClick={() => deleteVehicleById(item)} href='#'>delete</a></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <div className='home-buttons'>
        <button>Start Simulation</button>
        <button>Stop Simulation</button>
      </div>
      <div className='graph-container'>
        <div className='graph'>
          {arr.map((item) => generateSquareBoxs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))}
          {vehicles.map((item, i) => {
          console.log(item)
          return <div style={{position:"absolute",top:`${item.positionY}px`,left:`${item.positionX}px`}} className='vehicle' key={item.id}>{item.id}</div>
        })}
        </div>
       
      </div>
    </section>
  )
}
