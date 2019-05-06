import React from 'react';
import './App.scss';
import MainHeader from './components/mainHeader';
import CustomFooter from './components/customFooter';
import PieList from './components/pieList';
import store from './store'

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
    <MainHeader/>
    <PieList/>
    <CustomFooter/>
  </div>
  // </Provider>
  );
}

export default App;
