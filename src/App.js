import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import FoodBody from './Comps/Food/FoodBody/FoodBody';
import NavBar from './Comps/NavBar/NavBar';
import { UserContext } from './UserContext'

function App() {
  const bluePrint = {
    userName: '',
    weight: 0,
    height: 0,
    activityLevel: 0,
    dailyKcal: 0,
    dailyP: 0,
    dailyC: 0,
    dailyF: 0,
    dailyWater: 0,
    savedMeals: [],
    trackedDays: [],
    savedWorkouts: [],
    savedRoutines: [],
    goals:{}
  }
  const [user, setUser] = useState(bluePrint)
  const navigate = useNavigate()

  
  function startCheck(){
    if(localStorage.getItem('FitnessTrackerUser')){
      let data = localStorage.getItem('FitnessTrackerUser')
      data = JSON.parse(data) 
      setUser(data)
    }else{
      const translateBluePrint = JSON.stringify(bluePrint)
      localStorage.setItem('FitnessTrackerUser', translateBluePrint)
      let data = localStorage.getItem('FitnessTrackerUser')
      data = JSON.parse(data) 
      setUser(data)
      navigate('/profile')
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('FitnessTrackerUser'))
    if(data){

      setUser(data)
    }
    if(data.userName === ''){
      navigate('/profile')
    }
    
  }, [])
  
  


  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <NavBar />
        <Routes>
          <Route path='/food' element={<FoodBody />}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
