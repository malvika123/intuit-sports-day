import { CONFIRMATION_PATH, SPORTS_DAY_EVENTS_PATH } from '../../constant';
import { AllGameEvents } from '../components/allGameEvents/allGameEvents';
import { SelectedGameEvents } from '../components/selectedGameEvent/SelectedGameEvents';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const selectedListSize = useSelector((state) => state.allGames.length);
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        Sports Day
      </header>
      <p className='note'>*Please select any 3 sports</p>

      <div className='inlineComp'>
        <AllGameEvents />
        <SelectedGameEvents />
      </div>
      <div className='submit'>
        <button className="continue" onClick={() => {
          if (selectedListSize <= 0) alert("Please Select any 3 sports events before continuing");
          else navigate(CONFIRMATION_PATH);
        }}>Continue</button>
      </div>
    </div>
  );
}