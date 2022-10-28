
import './App.css';
import {Routes,Route} from 'react-router';
import { Home } from './components/Home/Home';
import { AddScenario } from './components/AddScenario/AddScenario';
import { AddVehicle } from './components/AddVehicle/AddVehicle';
import { AllScenarios } from './components/AllScenarios/AllScenarios';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <section className='sidebar'>
      <Sidebar />
      </section>
      <section className='content-section'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/addscenario' element={<AddScenario />} />
        <Route path='/allscenarios' element={<AllScenarios />} />
        <Route path='/addvehicle' element={<AddVehicle />} />
      </Routes>
      </section>
    </div>
  );
}

export default App;
