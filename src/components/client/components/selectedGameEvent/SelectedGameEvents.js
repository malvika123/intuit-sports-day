import './selectedGameEvents.css'
import { useSelector } from "react-redux";
import { SetAndShowOnCards } from "../cards/ShowOnCards";
import '../allGameEvents/allGameEvents.css'
export const SelectedGameEvents = () => {
    const data = useSelector((state) => state.allGames);
    return (
        <div className="eventsBody">
            <header className="heading1">Selected Sports Events</header> <br />
            < div className="box">
                {data ? data.map(obj => <SetAndShowOnCards data={obj} isSelectedGame={true} />) : 'Loading...'}
            </div>
        </div>
    );
}