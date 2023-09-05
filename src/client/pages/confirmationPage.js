import { List } from "../components/cards/list";
import "./style.css"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const ConfirmationPage = () => {
    const navigate = useNavigate();
    const selectedList = useSelector((state) => state.allGames);
    return (
        <div className="App">
            <header className="App-header">
                Sports Day
            </header>
            <div className="data">
                <div className="confirm">Please confirm the events you have added before proceeding</div>

                {selectedList.map((obj, index) => <List data={obj} key={index + 1} />)}
                <button className="submitButton" onClick={() => window.location='/'}>submit</button>
                <button className="returnButton" onClick={() => navigate(-1)}>Return</button>
            </div>

        </div>
    );
};

