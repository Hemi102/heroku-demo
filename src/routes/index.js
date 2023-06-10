import Protected from 'routes/Protected';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import {
  LOGIN_PATH,
  DASHBOARD_PATH,
  QUESTIONS_PATH,
  RESET_PASSWORD_PATH,
  Leadcaremanager_PATH,
  OutreachLeaders_PATH,
  OutreachStaff_PATH,
  Members_PATH,
} from 'constants/routePaths';
import Login from 'containers/login';
import Dashboard from 'containers/dashboard';
import Questions from 'containers/questions';
import Leadcaremanager from 'containers/leadcaremanager';
import OutreachLeaders from 'containers/outreachleaders';
import OutreachStaff from 'containers/outreachstaff';
import Members from 'containers/members';
import Reset from 'containers/reset-password';

const AppRoutes = ({isLoggedIn}) => {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path={LOGIN_PATH} element={<Login />} />
        <Route path={RESET_PASSWORD_PATH} element={<Reset />} />

        {/* Protected Routes */}
        <Route
          path={DASHBOARD_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path={QUESTIONS_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Questions />
            </Protected>
          }
        />
        <Route
          path={Leadcaremanager_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Leadcaremanager />
            </Protected>
          }
        />
        <Route
          path={OutreachLeaders_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <OutreachLeaders />
            </Protected>
          }
        />
        <Route
          path={OutreachStaff_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <OutreachStaff />
            </Protected>
          }
        />
        <Route
          path={Members_PATH}
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Members />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
