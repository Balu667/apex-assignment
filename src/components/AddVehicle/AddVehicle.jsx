import React, { useState, useEffect } from 'react';
import './AddVehicle.css';

export const AddVehicle = () => {

    const [scenarios, setScenarios] = useState([]);
    const [vehicleName,setVehicleName] = useState("");
    const [speed,setSpeed] = useState("");
    const [positionX,setPositionX] = useState("");
    const [positionY,setPositionY] = useState("");
    const [direction,setDirection] = useState("");
    const [scenarioName,setScenarioName] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("scenarios"));
        setScenarios(data);
    }, []);

    console.log(scenarios, "scenarios");

    const submitHandler = () => {
        const data = {
            vehicleName,
            speed,
            positionX,
            positionY,
            direction,
            scenarioName
        }

        scenarios.forEach((item,i) => {
            if(item.scenarioName === data.scenarioName){
                console.log(item.vehicles)
                item.vehicles.push(data);
                localStorage.setItem("scenarios",JSON.stringify(scenarios));
                console.log(scenarios,"for")
            }
        })

        console.log(scenarios[scenarioName],"data");
    }
    return (
        <section className='add-vehicle-section'>
            <div className='text'>Scenario / add</div>
            <h3>Add Vehicle</h3>
            <div className='add-vehicle-content'>
                <div className='vehicle-container'>
                    <div className='container-item'>
                        <label>Scenario List</label>
                        <select onChange={(e) => setScenarioName(e.target.value)} name="cars" id="cars" placeholder='Select Scenario'>
                            <option value="none" selected disabled hidden>Select Scenario</option>
                            {scenarios && scenarios.length > 0 && scenarios.map((item) => <option>{item.scenarioName}</option>)}
                        </select>
                    </div>
                    <div className='container-item'>
                        <label>Vehicle Name</label>
                        <input onChange={(e) => setVehicleName(e.target.value)} value={vehicleName} type="text" placeholder='Target abc' />
                    </div>
                    <div className='container-item'>
                        <label>Speed</label>
                        <input onChange={(e) => setSpeed(e.target.value)} value={speed} type="number" />
                    </div>
                </div>
                <div className='vehicle-container'>
                    <div className='container-item'>
                        <label>Position X</label>
                        <input onChange={(e) => setPositionX(e.target.value)} value={positionX} type="number" />
                    </div>
                    <div className='container-item'>
                        <label>Position Y</label>
                        <input onChange={(e) => setPositionY(e.target.value)} value={positionY} type="number" />
                    </div>
                    <div className='container-item'>
                        <label>Direction</label>
                        <select onChange={(e) => setDirection(e.target.value)}>
                            <option value="null">Select Direction</option>
                            <option value="towards">Towards</option>
                            <option value="backwards">Backwards</option>
                            <option value="upwards">Upwards</option>
                            <option value="downwards">Downwards</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button onClick={submitHandler}>Add</button>
                <button>Reset</button>
                <button>Go Back</button>
            </div>
        </section>
    )
}
