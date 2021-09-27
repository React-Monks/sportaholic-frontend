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
import League from './components/League';
import Aboutus from './components/Aboutus'
import Teams from './components/Teams';
import Players from './components/Players';
import Fitness from './components/Fitness';
import MyProfile from './components/MyProfile';

class App extends Component {

  render() {

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
          <Route exact path='/Football'
              >
            <Football />
          </Route>

          <Route exact path='/Fitness'
              >
            <Fitness />
          </Route>

          <Route exact path='/MyProfile'
              >
            <MyProfile />
          </Route>


          <Route path='/teams'>
            <Teams/>
          </Route>

          {/* <Route path='/UFC'>
            <UFC />
          </Route> */}
          
         

            <Route exact path='/league/:id'  component={League} />
            
            <Route path='/Aboutus'>
            <Aboutus />

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