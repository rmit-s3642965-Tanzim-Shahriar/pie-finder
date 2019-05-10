import React from 'react';
import './App.scss';

import CustomFooter from './components/customFooter';
import StoresAndPies from './components/containers/StoresAndPies';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StoresAndPies />
        <CustomFooter />
      </div>
    </Provider>
  );
}

export default App;
