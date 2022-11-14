import './TrackBreakfast.css'

const TrackBreakfast = () => {
    return (
        <div className="add-breakfast-div">
                <div className="add-breakfast-head">
                    <p className="track-breakfast-text">Breakfast</p>
                    <p className="track-macro">C: 20g</p>
                    <p className="track-macro">P: 20g</p>
                    <p className="track-macro">F: 20g</p>
                    <p className="track-macro">Kcal: 1000</p>
                </div>

                <div className="add-breakfast-display">
                    <div className="meal-entry">
                        <p className='meal-name'>Beans on toast</p>
                        <p className="meal-macro">C: 20g</p>
                        <p className="meal-macro">P: 20g</p>
                        <p className="meal-macro">F: 20g</p>
                        <p className="meal-macro">Kcal: 1000</p>
                        <p className="meal-click-dots">. . .</p>
                    </div>
                    <div className="meal-entry">
                        <p className='meal-name'>Beans on toast</p>
                        <p className="meal-macro">C: 20g</p>
                        <p className="meal-macro">P: 20g</p>
                        <p className="meal-macro">F: 20g</p>
                        <p className="meal-macro">Kcal: 1000</p>
                        <p className="meal-click-dots">. . .</p>
                    </div>

                    <div className="add-meal-button-div">
                        <button className="add-meal-button">Add Meal</button>
                    </div>
                </div>

            </div>
    );
}
 
export default TrackBreakfast;