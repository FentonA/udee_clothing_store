import React from 'react';
import HomePage from './pages/homepage.component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
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
          <Route path ='/signin' component ={SignInAndSignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
