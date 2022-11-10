import { useState } from 'react';
import './FoodNav.css'

const FoodNav = (props) => {
    const [trackActive, setTrackActive] = props.track
    const [mealsActive, setMealsActive] = props.meals
    const [guideActive, setGuideActive] = props.guide

    const resetAll = () => {
        setTrackActive(false)
        setMealsActive(false)
        setGuideActive(false)
    }

    return (
        <nav className="food-navbar">
            {!trackActive ? <p className="food-nav-item" onClick={() => {
                resetAll()
                setTrackActive(true)
            }}>Track Meals</p> : <p className="food-nav-item food-nav-active">Track Meals</p> }

            {!mealsActive ? <p className="food-nav-item" onClick={() => {
                resetAll()
                setMealsActive(true)
            }}>My Meals</p> : <p className="food-nav-item food-nav-active">My Meals</p> }

            {!guideActive ? <p className="food-nav-item" onClick={() => {
                resetAll()
                setGuideActive(true)
            }}>Guide</p> : <p className="food-nav-item food-nav-active">Guide</p> }
        </nav>
    );
}
 
export default FoodNav;