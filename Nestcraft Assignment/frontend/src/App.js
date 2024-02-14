import './App.css';
import {Route , Routes} from 'react-router-dom'
import ServiceCategory from './Components/ServiceCategory';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<ServiceCategory/>}/>
    </Routes>
   </>
  );
}

export default App;
