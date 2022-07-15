import './App.css';

import { Provider as ReduxStoreProvider } from 'react-redux';

import store from './redux/store';

function App() {

  return (
    <ReduxStoreProvider store={store}>
      {/* APP */}
    </ReduxStoreProvider>
  );
}

export default App;
