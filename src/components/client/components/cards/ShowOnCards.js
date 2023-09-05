import { removeSeletedItemsList, seletedItemsList } from '../../../reduxStore/action';
import './cards.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const SetAndShowOnCards=({data, isSelectedGame, showButton})=>{
    const dispatch=useDispatch();
    const dataInStore=useSelector((state)=>state.allGames);
    const conflictingEvents=getConflictingEvents(dataInStore,data);
    const limit=dataInStore.length<3 && !conflictingEvents ?false:true;
    return(
        <div className="cards">
            <div className='text'>
                <p>{data.event_category.charAt(0)}</p>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/5b345f558ab7221aa3d4e473/1541104149010-DWVS26EVH0UZ0YFWMYKN/gray-vertical-line.png?format=1500w" className='line'/>
            <div className='card'>
                
                <p className='cardHeading'>{data.event_name}</p>
            ({data.event_category})<br/>
            {getTime(data.start_time,data.end_time)}<br/>
            
            {isSelectedGame?<button class="remove-button" onClick={()=>dispatch(removeSeletedItemsList(data))}>Remove</button>:
            <button className="button" disabled={limit} onClick={()=>dispatch(seletedItemsList(data))}>Select</button>}
            
            </div>
        </div>
    );
}

export const getTime=(startTime, endTime)=>{
    let start_timeStr=startTime.split(" ")[1];
    let end_timeStr=endTime.split(" ")[1];
    let startTimeArr=start_timeStr.split(":");
    let endTimeHrArr=end_timeStr.split(":");
    let startHr=parseInt(startTimeArr[0])%12, startMin=parseInt(startTimeArr[1]);
    let endHr=parseInt(endTimeHrArr[0])%12,endMin=parseInt(endTimeHrArr[1]);
    let amOrPm=endHr%12>0?'pm':'am';
    startHr=startHr<10?'0'+startHr:startHr;
    endHr=endHr<10?'0'+endHr:endHr;
    startMin=startMin<10?'0'+startMin:startMin;
    endMin=endMin<10?'0'+endMin:endMin;
    return `${startHr}:${startMin} - ${endHr}:${endMin} ${amOrPm}`;
}

export const getConflictingEvents=(dataInStore,data)=>{
    let curData=getTime(data.start_time,data.end_time);
    let time=curData.split(" - ");
    let start=time[0];
    let end=time[1].split(" ")[0];
    let startTimehr=parseInt(start.split(":")[0]);
    let startTimeMin=parseInt(start.split(":")[1]);

    let endTimehr=parseInt(end.split(":")[0]);
    let endTimemin=parseInt(end.split(":")[1]);
    let res=false;
    dataInStore.forEach(obj => {
        const a=getTime(obj.start_time,obj.end_time);
        let time1=a.split(" - ");
        let start1=time1[0];
        let end1=time1[1].split(" ")[0];
        let startTimehr1=parseInt(start1.split(":")[0]);
        let startTimeMin1=parseInt(start1.split(":")[1]);
    
        let endTimehr1=parseInt(end1.split(":")[0]);
        let endTimemin1=parseInt(end1.split(":")[1]);

        if(startTimehr===startTimehr1) {
            res= true;
        return;
    }
        if(startTimehr===endTimehr1){
            if(startTimeMin<endTimemin1) {
                res= true;
                return;
            }
        }
    });
return res;
}