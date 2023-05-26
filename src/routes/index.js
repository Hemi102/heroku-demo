import Protected from 'routes/Protected';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import {LOGIN_PATH, DASHBOARD_PATH, QUESTIONS_PATH} from 'constants/routePaths';
import Login from 'containers/login';
import Dashboard from 'containers/dashboard';
import Questions from 'containers/questions';

const AppRoutes = ({isLoggedIn}) => {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path={LOGIN_PATH} element={<Login />} />

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
      </Routes>
    </Router>
  );
};
export default AppRoutes;
