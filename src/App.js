
import './App.css';
import {Routes,Route} from 'react-router';
import { Home } from './components/Home/Home';
import { AddScenario } from './components/AddScenario/AddScenario';
import { AddVehicle } from './components/AddVehicle/AddVehicle';
import { AllScenarios } from './components/AllScenarios/AllScenarios';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useEffect } from 'react';

function App() {
  const scenarios = [{id:1,scenarioName:"Test Scenario",scenarioTime:"5s",vehicles:[{id:1,vehicleName:"bus",positionX:30,positionY:215,speed:3,direction:"Towards"},{id:2,vehicleName:"car",positionX:500,positionY:380,speed:3,direction:"Upwards"}]},{id:2,scenarioName:"My Scenario",scenarioTime:"2s",vehicles:[{id:1,vehicleName:"bike",positionX:500,positionY:200,speed:5,direction:"Upwards"}]}]

  useEffect(() => {
    localStorage.setItem("scenarios",JSON.stringify(scenarios));
  },[])
  return (
    <div className="App">
      <section className='sidebar'>
      <Sidebar />
      </section>
      <section className='content-section'>
      <Routes>
       
        <Route path='/addscenario' element={<AddScenario />} />
        <Route path='/allscenarios' element={<AllScenarios />} />
        <Route path='/addvehicle' element={<AddVehicle />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
      </section>
    </div>
  );
}

export default App;
