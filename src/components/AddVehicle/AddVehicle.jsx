import React, { useState, useEffect } from "react";
import "./AddVehicle.css";
import { useNavigate } from "react-router";

export const AddVehicle = () => {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState([]);
  const [vehicleName, setVehicleName] = useState("");
  const [speed, setSpeed] = useState("");
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [direction, setDirection] = useState("");
  const [scenarioName, setScenarioName] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scenarios"));
    setScenarios(data);
  }, []);

  const submitHandler = () => {
    scenarios.forEach((item, i) => {
      if (item.scenarioName === scenarioName) {

        const data = {
          id: item.vehicles.length > 0 ? item.vehicles[item.vehicles.length - 1].id + 1 : 1,
          vehicleName,
          speed,
          positionX,
          positionY,
          direction,
          scenarioName,
        };
        if (positionX < 800 && positionX > 0) {
          item.vehicles.push(data);
          localStorage.setItem("scenarios", JSON.stringify(scenarios));
          console.log(scenarios, "for");
        }
      }
    });
  };

  const resetHandler = () => {
    setPositionX("");
    setPositionY("");
    setVehicleName("");
    setSpeed("");
    setDirection("");
  };
  return (
    <section className="add-vehicle-section">
      <div className="text">Scenario / add</div>
      <h3>Add Vehicle</h3>
      <div className="add-vehicle-content">
        <div className="vehicle-container">
          <div className="container-item">
            <label>Scenario List</label>
            <select
              onChange={(e) => setScenarioName(e.target.value)}
              placeholder="Select Scenario"
            >
              <option value="none" selected disabled hidden>
                Select Scenario
              </option>
              {scenarios &&
                scenarios.length > 0 &&
                scenarios.map((item, i) => (
                  <option key={i + "p"}>{item.scenarioName}</option>
                ))}
            </select>
          </div>
          <div className="container-item">
            <label>Vehicle Name</label>
            <input
              onChange={(e) => setVehicleName(e.target.value)}
              value={vehicleName}
              type="text"
              placeholder="Target abc"
            />
          </div>
          <div className="container-item">
            <label>Speed</label>
            <input
              onChange={(e) => setSpeed(e.target.value)}
              value={speed}
              type="number"
            />
          </div>
        </div>
        <div className="vehicle-container">
          <div className="container-item">
            <label>Position X</label>
            <input
              onChange={(e) => setPositionX(e.target.value)}
              value={positionX}
              type="number"
            />
            {(positionX < 0 || positionX > 800) && (
              <div className="error">
                Position X should not be &#62; 800 and &#60; 0{" "}
              </div>
            )}
          </div>
          <div className="container-item">
            <label>Position Y</label>
            <input
              onChange={(e) => setPositionY(e.target.value)}
              value={positionY}
              type="number"
            />
          </div>
          <div className="container-item">
            <label>Direction</label>
            <select onChange={(e) => setDirection(e.target.value)}>
              <option value="null">Select Direction</option>
              <option value="Towards">Towards</option>
              <option value="Backwards">Backwards</option>
              <option value="Upwards">Upwards</option>
              <option value="Downwards">Downwards</option>
            </select>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={submitHandler}>Add</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </section>
  );
};
