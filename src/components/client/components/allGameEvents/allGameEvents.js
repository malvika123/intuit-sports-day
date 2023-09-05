import { useEffect, useState } from "react";
import { SetAndShowOnCards } from "../cards/ShowOnCards";
import './allGameEvents.css';
import { useSelector } from "react-redux";
import { SUBHEADING_ALL_EVENTS } from "../../../constant";

const getUpdatedData = (data, updatedData) => {
    return data ? data.map((obj) => {
        const found = updatedData.find((subobj) => subobj.id === obj.id);
        return found ? null : obj;
    }) : null;
};

export const AllGameEvents = () => {
    const [data, setData] = useState();
    const updatedData = useSelector((state) => state.selectedGames);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a')
            .then(response => response.json())
            .then(obj => {
                setLoaded(true);
                setData(obj);
            })
            .catch(error => console.log(error));
    }, [])

    const updatedDataNew = getUpdatedData(data, updatedData);

    return (
        <div className="eventBody">
            <header className="all-event-sub-heading">{SUBHEADING_ALL_EVENTS}</header> <br />
            < div className="all-event-box">
                {loaded ? updatedDataNew.map((obj) => {
                    return obj ? <SetAndShowOnCards data={obj} /> : null;
                }) : data ? data.map(obj => {
                    return obj ? <SetAndShowOnCards data={obj} /> : null;
                }) : <img className="loading" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading..." />}
            </div>
        </div>
    );
}
