import React from 'react';
import './App.scss';
import MainHeader from './components/mainHeader';
import CustomFooter from './components/customFooter';
import PieList from './components/containers/StoresAndPies';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainHeader />
        <PieList />
        <CustomFooter />
      </div>
    </Provider>
  );
}

export default App;
