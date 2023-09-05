import { CONFIRMATION_PATH, alert_Event_Selection, continue_, selection } from '../../constant';
import { AllGameEvents } from '../components/allGameEvents/allGameEvents';
import { SelectedGameEvents } from '../components/selectedGameEvent/SelectedGameEvents';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { CommonHeader } from './utils';

export const Main = () => {
  const selectedListSize = useSelector((state) => state.selectedGames.length);
  const navigate = useNavigate();

  return (
    <div className="App">
     <CommonHeader/>
      <p className='note'>{selection}</p>

      <div className='inlineComp'>
        <AllGameEvents />
        <SelectedGameEvents />
      </div>
      <div className='submit'>
        <button className="continue" onClick={() => {
          if (selectedListSize <= 0) alert(`${alert_Event_Selection}`);
          else navigate(CONFIRMATION_PATH);
        }}>{continue_}</button>
      </div>
    </div>
  );
}