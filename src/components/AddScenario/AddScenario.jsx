import React,{useState} from 'react';
import './AddScenario.css';

export const AddScenario = () => {
    const [scenarioName,setScenarioName] = useState("");
    const [scenarioTime,setScenarioTime] = useState("");

    const submitHandler = () => {
        const scenarioData = {
            scenarioName,
            scenarioTime
        }
        console.log(scenarioData,"data")
    }

    const resetHandler = () => {
        setScenarioName("");
        setScenarioTime("");
    }
    
  return (
    <section className='addscenarion'>
        <div className='text'>Scenario / add</div>
        <div className='secnarion'>
            <h3>Add Scenario</h3>
            <div className='flex-container'>
                <div className='flex-item'>
                    <label>Scenario Name</label>
                    <input value={scenarioName} onChange={(e) => setScenarioName(e.target.value)} placeholder='Test Scenario' type="text" />
                </div>
                <div className='flex-item'>
                   <label>Scenario Time(seconds)</label>
                   <input value={scenarioTime} onChange={(e) => setScenarioTime(e.target.value)} placeholder='10' type="number" />
                </div>
            </div>
            <div className='button-section'>
                <button onClick={submitHandler}>Add</button>
                <button onClick={resetHandler}>Reset</button>
                <button>Go Back</button>
            </div>
        </div>
    </section>
  )
}
