import './theme/light.less';

import { Provider as ReduxStoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import Home from './screens/home';

function App() {

  return (
    <ReduxStoreProvider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ReduxStoreProvider>
  );
}

export default App;
