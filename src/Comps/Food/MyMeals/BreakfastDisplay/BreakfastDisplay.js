import { useContext } from 'react';
import { UserContext } from '../../../../UserContext'
import './BreakfastDisplay.css'

const BreakfastDisplay = () => {
    const user = useContext(UserContext)

    const breakfastMeals = user.savedMeals.filter((meal) => {
        return meal.type === 'Breakfast'
    })

    return (
        <div className="meals-display-div">
            {breakfastMeals.length > 0 ? breakfastMeals.map((meal) => {
                return <div className="meal-item-display" key={meal.name}>
                    <p className="meal-item-display-name">{`${meal.name}`}</p>
                    <p className="meal-item-display-details">{`P: ${meal.protein}g`}</p>
                    <p className="meal-item-display-details">{`C: ${meal.carbs}g`}</p>
                    <p className="meal-item-display-details">{`F: ${meal.fat}g`}</p>
                    <p className="meal-item-display-details">{`Kcal: ${meal.kcal}`}</p>
                </div>
            }) : <p className='no-meals-added'>No Meals Added</p>}
        </div>
    );
}
 
export default BreakfastDisplay;