import React from 'react';
import './App.scss';
import store from './store';
import {Provider} from 'react-redux';
import MainContent from './components/MainContent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
