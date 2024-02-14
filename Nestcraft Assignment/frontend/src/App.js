import './App.css';
import {Route , Routes} from 'react-router-dom'
import ServiceCategory from './Components/ServiceCategory';
import Services from './Components/Services';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<ServiceCategory/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
   </>
  );
}

export default App;
