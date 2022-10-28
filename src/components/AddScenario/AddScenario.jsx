import React,{useState} from 'react';
import './AddScenario.css';

export const AddScenario = () => {
    const [scenarioName,setScenarioName] = useState("");
    const [scenarioTime,setScenarioTime] = useState("");
  return (
    <section className='addscenarion'>
        <div className='text'>Scenario / add</div>
        <div className='secnarion'>
            <h3>Add Scenario</h3>
            <div className='flex-container'>
                <div className='flex-item'>
                    <label>Scenario Name</label>
                    <input placeholder='Test Scenario' type="text" />
                </div>
                <div className='flex-item'>
                   <label>Scenario Time(seconds)</label>
                   <input placeholder='10' type="number" />
                </div>
            </div>
            <div className='button-section'>
                <button>Add</button>
                <button>Reset</button>
                <button>Go Back</button>
            </div>
        </div>
    </section>
  )
}
