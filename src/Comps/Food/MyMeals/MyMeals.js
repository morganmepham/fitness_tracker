import { useState } from 'react';
import AddMeals from './AddMeals/AddMeals';
import LunchDisplay from './LunchDisplay/LunchDisplay';
import BreakfastDisplay from './BreakfastDisplay/BreakfastDisplay';
import './MyMeals.css'
import DinnerDisplay from './DinnerDisplay/DinnerDisplay';
import SnacksDisplay from './SnacksDisplay/SnacksDisplay';

const MyMeals = () => {
    const [breakfastActive, setBreakfastActive] = useState(true)
    const [lunchActive, setLunchActive] = useState(false)
    const [dinnerActive, setDinnerActive] = useState(false)
    const [snacksActive, setSnacksActive] = useState(false)

    const [addMealActive, setAddMealActive] = useState(false)

    const resetAll = () => {
        setBreakfastActive(false)
        setLunchActive(false)
        setDinnerActive(false)
        setSnacksActive(false)
    }

    return (
        <div className="my-meals-div">
            {!addMealActive && <div className="my-meals-main">
                <div className="my-meals-buttons-div">
                    {!breakfastActive ? <button className="my-meals-button" onClick={() => {
                        resetAll()
                        setBreakfastActive(true)
                    }}>Breakfast</button> : <button className="my-meals-button my-meals-button-active">Breakfast</button>}
                    
                    {!lunchActive ? <button className="my-meals-button" onClick={() => {
                        resetAll()
                        setLunchActive(true)
                    }}>Lunch</button> : <button className="my-meals-button my-meals-button-active">Lunch</button>}

                    {!dinnerActive ? <button className="my-meals-button" onClick={() => {
                        resetAll()
                        setDinnerActive(true)
                    }}>Dinner</button> : <button className="my-meals-button my-meals-button-active">Dinner</button>}
                    
                    {!snacksActive ? <button className="my-meals-button" onClick={() => {
                        resetAll()
                        setSnacksActive(true)
                    }}>Snacks</button> : <button className="my-meals-button my-meals-button-active">Snacks</button>}
                    
                    <button className="my-meals-button my-meals-button-add" onClick={() => setAddMealActive(true)}>Add Meal</button>
                </div>

                <div className="my-meals-display-div">
                    {breakfastActive && <BreakfastDisplay />}  
                    {lunchActive && <LunchDisplay />} 
                    {dinnerActive && <DinnerDisplay />} 
                    {snacksActive && <SnacksDisplay />}
                </div>
            </div>}

            {addMealActive && <AddMeals mealActive = {setAddMealActive}/>}
                

        </div>
    );
}
 
export default MyMeals;