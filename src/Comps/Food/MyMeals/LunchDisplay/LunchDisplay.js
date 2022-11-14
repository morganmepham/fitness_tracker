import { useContext } from 'react';
import { UserContext } from '../../../../UserContext'


const LunchDisplay = () => {
    const user = useContext(UserContext)

    const lunchMeals = user.savedMeals.filter((meal) => {
        return meal.type === 'Lunch'
    })

    return (
        <div className="meals-display-div">
            {lunchMeals.length > 0 ? lunchMeals.map((meal) => {
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
 
export default LunchDisplay;