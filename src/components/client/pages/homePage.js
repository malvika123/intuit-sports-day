import { SPORTS_DAY_EVENTS_PATH } from "../../constant";
import "./style.css"
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                Sports Day
            </header>
            <img className="image" src="https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2149009863.jpg?w=740&t=st=1693726371~exp=1693726971~hmac=ce0c3a165194827d8fcdffbfdeaab72cd85f54c0cf5911093b969ccee9447cba" />
            <h1 className="heading">YAY!!! WE ARE EXCITED</h1>
            <p className="welcome-message">Welcome to our Sports Day extravaganza! We're thrilled to have you join us in celebrating the spirit of athleticism, teamwork, and fun. Our Sports Day event is more than just a competition; it's a day where we come together as a community to embrace the joy of sports and healthy competition. Whether you're a participant, a spectator, or just here to soak in the vibrant atmosphere, there's something for everyone. Get ready for a day filled with thrilling races, intense matches, and heartwarming moments. So, put on your sporting spirit, cheer for your favorite teams, and let's make this Sports Day an unforgettable experience!</p>
            <button className="continue-button" onClick={() => navigate(SPORTS_DAY_EVENTS_PATH)}>Continue</button>
        </div>
    );
};