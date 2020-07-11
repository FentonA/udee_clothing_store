import React from 'react';
import HomePage from './pages/homepage.component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component = {HomePage} ></Route>
          <Route path ='/shop' component = {Shop}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
