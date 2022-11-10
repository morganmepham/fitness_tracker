import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const [homeActive, setHomeActive] = useState(true)
    const [foodActive, setFoodActive] = useState(false)
    const [workoutActive, setWorkoutActive] = useState(false)
    const [profileActive, setProfileActive] = useState(false)

    const resetAll = () => {
        setHomeActive(false)
        setFoodActive(false)
        setWorkoutActive(false)
        setProfileActive(false)
    }
    useEffect(() => {
        const path = window.location.pathname
        if(path === '/'){
            resetAll()
            setHomeActive(true)
        }else if(path === '/food'){
            resetAll()
            setFoodActive(true)
        }else if(path === '/workouts'){
            resetAll()
            setWorkoutActive(true)
        }else if(path === '/profile'){
            resetAll()
            setProfileActive(true)
        }
    }, [])

    return (
        <nav className="navbar-div">
            <h1 className="app-title">Fitness Tracker</h1>

            <Link className = 'main-nav-link' to='/' onClick={() => {
                resetAll()
                setHomeActive(true)
            }}>
                {homeActive ? <p className="nav-item main-nav-active">Home</p>: <p className="nav-item">Home</p>}
            </Link>

            <Link className = 'main-nav-link' to='/food' onClick={() => {
                resetAll()
                setFoodActive(true)
            }}>
                {foodActive ? <p className="nav-item main-nav-active">Food</p> :<p className="nav-item">Food</p>} 
            </Link>

            <Link className = 'main-nav-link' to='/workouts' onClick={() => {
                resetAll()
                setWorkoutActive(true)
            }}>
                {workoutActive ? <p className="nav-item main-nav-active">Workouts</p> : <p className="nav-item">Workouts</p>}
            </Link>

            <Link className = 'main-nav-link' to='/profile' onClick={() => {
                resetAll()
                setProfileActive(true)
            }}>
                {profileActive ? <p className="nav-item main-nav-active">Profile</p> : <p className="nav-item">Profile</p>}
            </Link>  
        </nav>
    );
}
 
export default NavBar;