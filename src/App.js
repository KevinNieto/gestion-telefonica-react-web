
import './App.css';

import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    <Provider store={ store }>
        <div className="md:flex min-h-screen">
              <AppRouter/>
        </div>
      </Provider>
  );
}

export default App;
