import AppRoutes from 'routes';
import {getAccessToken} from 'utils/common';

function App() {
  return <AppRoutes isLoggedIn={true} />;
}

export default App;
