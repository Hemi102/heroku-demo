import {useSelector} from 'react-redux';
import AppRoutes from 'routes';
import {checkUserLoggedInStatus} from 'utils/common';

function App() {
  const {loginData} = useSelector(state => state.login);
  return <AppRoutes isLoggedIn={checkUserLoggedInStatus(loginData)} />;
}

export default App;
