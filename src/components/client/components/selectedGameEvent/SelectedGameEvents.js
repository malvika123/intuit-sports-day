import './selectedGameEvents.css'
import { useSelector } from "react-redux";
import { SetAndShowOnCards } from "../cards/ShowOnCards";
import '../allGameEvents/allGameEvents.css'
export const SelectedGameEvents = () => {
    const data = useSelector((state) => state.selectedGames);
    return (
        <div className="selectedEvent">
            <header className="subheading">Selected Sports Events</header> <br />
            < div className="wrapper-box">
                {data ? data.map(obj => <SetAndShowOnCards data={obj} isSelectedGame={true} />) : 'Loading...'}
            </div>
        </div>
    );
}