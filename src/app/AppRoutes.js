import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from '../components/client/pages/main';
import { HomePage } from '../components/client/pages/homePage';
import { EventConfirmationPage } from '../components/client/pages/EventConfirmationPage';

// All the routes used in this project will be listed here. This makes the code concise, easy to read and modify.

export const AppRoutes = () => {
    return (<div>
        <Router>
            <Routes>
                <Route exact path="/" element={<div><HomePage /></div>} />
                <Route exact path="sportsDayEvents" element={<div><Main /></div>} />
                <Route exact path="sportsDayEvents/confirmationPage" element={<div><EventConfirmationPage /></div>} />
            </Routes>
        </Router>

    </div>
    );
}