import { getTime } from "./ShowOnCards";
import './cards.css';

export const ConfirmationList = ({ data, key }) => {
    //confirmationList: this functional component returns the list of the selected events to show on confirmation page

    return (
        <div className="list">
            <p>{data.event_name}</p>
            ({data.event_category})<br />
            {getTime(data.start_time, data.end_time)}<br />
        </div>
    );
}

