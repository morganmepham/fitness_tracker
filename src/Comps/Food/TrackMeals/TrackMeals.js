import TrackBreakfast from '../TrackBreakfast/TrackBreakfast';
import './TrackMeals.css'

const TrackMeals = () => {
    return (
        <div className="track-meals-div">
            <div className="track-total-div">
                <p className="track-total-text">Total</p>
                <p className="track-macro">C: 20/300g</p>
                <p className="track-macro">P: 20/100g</p>
                <p className="track-macro">F: 20/100g</p>
                <p className="track-macro">Kcal: 1000/2000</p>
            </div>

            <TrackBreakfast />
        </div>
    );
}
 
export default TrackMeals;