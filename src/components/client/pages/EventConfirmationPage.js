import "./style.css"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ConfirmationList } from "../components/cards/ConfirmationList";
import { CommonHeader } from "./utils";
import { Return, confirmPageText, submit, we_have_received_your_information } from "../../constant";

export const EventConfirmationPage = () => {
    const navigate = useNavigate();
    const selectedList = useSelector((state) => state.selectedGames);
    return (
        <div className="App">
            <CommonHeader/>

            <div className="Show-Events">
                <div className="confirm-text">{confirmPageText}</div>

                {selectedList.map((obj, index) => <ConfirmationList data={obj} key={index + 1} />)}
                <button className="submitButton" onClick={() => onSubmit()}>{submit}</button>
                <button className="returnButton" onClick={() => navigate(-1)}>{Return}</button>
            </div>

        </div>
    );
};

const onSubmit=()=>{
    alert(`${we_have_received_your_information}`);
    setTimeout(()=>{
        window.location="/";
    },1000);
};

