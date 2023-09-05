import { getTime } from "./ShowOnCards";
import './cards.css';

export const List=({data,key})=>{
    return(
        <div className="list">
             <p>{data.event_name}</p>
            ({data.event_category})<br/>
            {getTime(data.start_time,data.end_time)}<br/>
        </div>
    );
}

