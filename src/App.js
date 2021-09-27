import React, { Component } from 'react'
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import './App.css';
import Football from './components/Football';
import Teams from './components/Teams';
import Players from './components/Players';
import Profile from './components/Profile';
class App extends Component {

  render() {
    console.log(this.props.auth0.isAuthenticated);

    return (<>
      <Header isAuth={this.props.auth0.isAuthenticated} />
      <Router>
        <Switch>
          {this.props.auth0.isAuthenticated ?
            (<Route exact path='/'>
              <HomePage />
            </Route>) : (
              <Route path='/'>
                <Login />
              </Route>
            )
          }
          <Route exact path='/Football'>
            <Football />
          </Route>

          <Route path='/teams'>
            <Teams/>
          </Route>

        <Route path='/profile'>
            <Profile/>
          </Route> 
          
          <Route path='/players'>
            <Players />
          </Route> 

        </Switch>
      </Router>
      <Footer />
    </>
    )
  }
}

export default withAuth0(App);