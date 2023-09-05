import { removeSeletedItemsList, seletedItemsList } from '../../../reduxStore/action';
import './cards.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const SetAndShowOnCards = ({ data, isSelectedGame }) => {
    const dispatch = useDispatch();
    //fetching all selected events from the store
    const selectedEventDataInStore = useSelector((state) => state.selectedGames);
    console.log(data.start_time,"oi");
    const conflictingEvents = getConflictingEvents(selectedEventDataInStore, data);
    const choiceLimit = selectedEventDataInStore.length < 3 && !conflictingEvents ? false : true;
    return (
        <div className="cards">
            <div className='text'>
                <p>{data.event_category.charAt(0)}</p>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/5b345f558ab7221aa3d4e473/1541104149010-DWVS26EVH0UZ0YFWMYKN/gray-vertical-line.png?format=1500w" className='line' />
            <div className='card'>
                <p className='cardHeading'>{data.event_name}</p>
                ({data.event_category})<br />
                {data.start_time && data.end_time && getTime(data.start_time, data.end_time)}<br />
                {/**As the card component is shared between sibling components allSelectedEvents and allEvents,
                 * We are passing a param(isSelectedGame) from parent class to this child component to  identify
                 * the sibling and then the respective button is shown.
                 */}
                {isSelectedGame ? <button class="remove-button" onClick={() => dispatch(removeSeletedItemsList(data))}>Remove</button> :
                    <button className="button" disabled={choiceLimit} onClick={() => dispatch(seletedItemsList(data))}>Select</button>}

            </div>
        </div>
    );
}

/**getTime: this function do following
 * 1. converts 24 hour time to 12 hour system for better readability
 * 2. appens am/pm depending on time
 * 3. retuns time in hh:mm format */ 
export const getTime = (startTime, endTime) => {
    let start_time = startTime && startTime.split(" ")[1] && startTime.split(" ")[1].split(":");
    let end_time = endTime && endTime.split(" ")[1] && endTime.split(" ")[1].split(":");
    let startHr = parseInt(start_time && start_time[0]) % 12, startMin = parseInt(start_time && start_time[1]);
    let endHr = parseInt(end_time && end_time[0]) % 12, endMin = parseInt(end_time && end_time[1]);
    let amOrPm = endHr % 12 > 0 ? 'pm' : 'am';
    startHr = startHr < 10 ? '0' + startHr : startHr;
    endHr = endHr < 10 ? '0' + endHr : endHr;
    startMin = startMin < 10 ? '0' + startMin : startMin;
    endMin = endMin < 10 ? '0' + endMin : endMin;
    return `${startHr}:${startMin} - ${endHr}:${endMin} ${amOrPm}`;
}

export const getConflictingEvents = (dataInStore, data) => {
    let curData = getTime(data.start_time, data.end_time);
    let time = curData.split(" - ");
    let startTimehr = parseInt(time[0].split(":")[0]);
    let startTimeMin = parseInt(time[0].split(":")[1]);
    let res = false;
    dataInStore.forEach(obj => {
        const a = getTime(obj.start_time, obj.end_time);
        let timeSelectedEvent = a.split(" - ");
        let startTimeSelectedEventinHr = parseInt( timeSelectedEvent[0].split(":")[0]);
        let endTimeSelectedEventInHr = parseInt(timeSelectedEvent[1].split(" ")[0].split(":")[0]);
        let endTimeSelectedEventInMin = parseInt(timeSelectedEvent[1].split(" ")[0].split(":")[1]);

        if (startTimehr === startTimeSelectedEventinHr) {
            res = true;
            return;
        }
        if (startTimehr === endTimeSelectedEventInHr) {
            if (startTimeMin < endTimeSelectedEventInMin) {
                res = true;
                return;
            }
        }
    });
    return res;
}