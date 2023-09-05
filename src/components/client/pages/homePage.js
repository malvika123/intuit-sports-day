import { SPORTS_DAY_EVENTS_PATH, continue_, homePage_subheading, homepage_img, welcome_note } from "../../constant";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { CommonHeader } from "./utils";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <CommonHeader/>
            <img className="image" src={homepage_img} />
            <h1 className="heading">{homePage_subheading}</h1>
            <p className="welcome-message">{welcome_note}</p>
            <button className="continue-button" onClick={() => navigate(SPORTS_DAY_EVENTS_PATH)}>{continue_}</button>
        </div>
    );
};