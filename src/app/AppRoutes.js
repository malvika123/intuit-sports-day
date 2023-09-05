import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from '../components/client/pages/main';
import { HomePage } from '../components/client/pages/homePage';
import { ConfirmationPage } from '../components/client/pages/confirmationPage';

// All the routes used in this project will be listed here. This makes the code concise, easy to read and modify.

export const AppRoutes = () => {
    return (<div>
        <Router>
            <Routes>
                <Route exact path="/" element={<div><HomePage /></div>} />
                <Route exact path="sportsDayEvents" element={<div><Main /></div>} />
                <Route exact path="sportsDayEvents/confirmationPage" element={<div><ConfirmationPage /></div>} />
            </Routes>
        </Router>

    </div>
    );
}