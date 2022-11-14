import { useContext, useState } from 'react';
import './AddMeals.css'
import { UserContext } from '../../../../UserContext';

const AddMeals = (props) => {
    const user = useContext(UserContext)
    

    const [mealName, setMealName] = useState('')
    const [protein, setProtein] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [fat, setFat] = useState(0)
    const [kcal, setKcal] = useState(0)
    const [type, setType] = useState('Breakfast')

    const closePage = props.mealActive

    class Meal{
        constructor(name, p, c, f, k, type){
            this.name = name
            this.protein = p
            this.carbs = c
            this.fat = f
            this.kcal = k
            this.type = type
        }
    }

    const handleAddMeal = () => {
        const meal = new Meal(mealName, protein, carbs, fat, kcal, type)
        user.savedMeals.push(meal)
        console.log(user)
        const send = JSON.stringify(user)
        localStorage.setItem('FitnessTrackerUser', send)
        closePage()
    }

    return (
        <div className="add-meals-div">
            <form className="add-meal-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="meal-name-input" placeholder='My Meal' value={mealName} onChange={(e) => setMealName(e.target.value)}/>

                <div className="add-meal-details-display-div">
                    <p className="add-meal-details-text">Protein: </p>
                    <input type="number" className="add-meal-input" value={protein} onChange={(e) => setProtein(e.target.value)}/>
                    <p className="g-text">g</p>
                    <p className="add-meal-details-text">Carbs: </p>
                    <input type="number" className="add-meal-input" value={carbs} onChange={(e) => setCarbs(e.target.value)}/>
                    <p className="g-text">g</p>
                    <p className="add-meal-details-text">Fat: </p>
                    <input type="number" className="add-meal-input" value={fat} onChange={(e) => setFat(e.target.value)}/>
                    <p className="g-text">g</p>
                    <p className="add-meal-details-text">Kcal: </p>
                    <input type="number" className="add-meal-input" value={kcal} onChange={(e) => setKcal(e.target.value)}/>
                    <p className="add-meal-details-text">Type:</p>
                    <select onChange={(e) => setType(e.target.value)} className='add-meal-type-input'>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack</option>
                    </select>
                </div>

                <div className="add-meal-buttons">
                    <button className="add-meal-cancel" onClick={() => closePage()}>Cancel</button>
                    <button className="add-meal-confirm" onClick={handleAddMeal}>Confirm</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddMeals;