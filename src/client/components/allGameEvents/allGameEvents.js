import { useEffect, useState } from "react";
import { SetAndShowOnCards } from "../cards/ShowOnCards";
import './allGameEvents.css';
import { useSelector } from "react-redux";

export const AllGameEvents=()=>{
    const [data,setData]=useState();
    const updatedData=useSelector((state)=>state.allGames);
    const [loaded,setLoaded]=useState(false);
    useEffect(()=>{
        fetch('https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a')
        .then(response=>response.json())
        .then(obj=> {
            setLoaded(true);
            setData(obj);
        })
        .catch(error=>console.log(error));
    },[])

    const updatedDataNew=data?data.map((obj)=>{
        const found=updatedData.find((subobj)=>subobj.id===obj.id);
        return found?null:obj;
        }):null;
    return(
        <div className="eventBody">
           <header className="heading1">All Sports Events</header> <br/>
           < div className="box">
           {loaded?updatedDataNew.map((obj)=>{
                return obj?<SetAndShowOnCards data={obj}/>:null;
            }):data?data.map(obj=>{
                return obj?<SetAndShowOnCards data={obj}/>:null;
            }):'Loading...'}
           </div>
           
        </div>
    );
}
