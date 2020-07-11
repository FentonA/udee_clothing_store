import React from 'react';
import HomePage from './pages/homepage.component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {auth} from './firebase/firebase.util'
import './App.css';



class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
  return (
    <div>
      <BrowserRouter>
      <Header currentUser ={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component = {HomePage} ></Route>
          <Route path ='/shop' component = {Shop}></Route>
          <Route path ='/signin' component ={SignInAndSignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}


export default App;
