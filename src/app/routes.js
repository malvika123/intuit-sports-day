import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Main } from '../client/pages/main';
import { HomePage } from '../client/pages/homePage';
import { ConfirmationPage } from '../client/pages/confirmationPage';

export const RoutesInner = () => {
    return (<div>
        <Router>
            <Routes>
                <Route path="/" element={<div><HomePage/></div>} />
                <Route exact path="sportsDayEvents" element={<div><Main /></div>} />
                <Route exact path="sportsDayEvents/confirmationPage" element={<div><ConfirmationPage/></div>} />
            </Routes>
        </Router>

    </div>
    );
}