import { useState } from 'react';
import FoodNav from '../FoodNav/FoodNav';
import TrackMeals from '../TrackMeals/TrackMeals';
import './FoodBody.css'

const FoodBody = () => {
    const [trackActive, setTrackActive] = useState(true)
    const [mealsActive, setMealsActive] = useState(false)
    const [guideActive, setGuideActive] = useState(false)


    return (
        <div className="food-body">
            <FoodNav track={[trackActive, setTrackActive]} meals ={[mealsActive, setMealsActive]} guide={[guideActive, setGuideActive]}/>
            
            {trackActive && <TrackMeals /> }

            {mealsActive && <p>Hello2</p>}

            {guideActive && <p>Hello3</p>}
        </div>
    );
}
 
export default FoodBody;