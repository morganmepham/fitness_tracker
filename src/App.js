import { Route, Routes } from 'react-router-dom';
import './App.css';
import FoodBody from './Comps/Food/FoodBody/FoodBody';
import NavBar from './Comps/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/food' element={<FoodBody />}/>

      </Routes>
    </div>
  );
}

export default App;
