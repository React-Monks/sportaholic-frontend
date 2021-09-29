import React, { Component } from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import LogoutButton from "./LogoutButton";
<<<<<<< HEAD
import { Nav, Dropdown } from "react-bootstrap";
import './Login.scss'
=======
>>>>>>> a1bf46db29cefa50fc91bcb577b9049719f202ae

class Header extends Component {

  render() {
    return (
      <>
<<<<<<< HEAD

        <header>
          <div class="overlay">
            <Router>
              {this.props.isAuth && <LogoutButton />}

              <Navbar>
                <Navbar.Brand></Navbar.Brand>
                <NavItem  >
                  <a href="/" className="nav-link" id="home" style={{backgroundColor : "black"}}>
                    Home
                  </a>
                </NavItem>
                <Dropdown>
                  <Dropdown.Toggle style={{backgroundColor : "black"}} id="dropdown-basic">
                    Collection
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="dropAndBtn">
                    <Dropdown.Item href="/Football">Leagues</Dropdown.Item>
                    <Dropdown.Item href="/teams">Teams</Dropdown.Item>
                    <Dropdown.Item href="/players">players</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <NavItem  >
                  <a href="/MyProfile" className="nav-link" id="profile" style={{backgroundColor : "black"}}>
                    Profile
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/Aboutus" className="nav-link" id="aboutus" style={{backgroundColor : "black"}}>
                    About us
                  </a>
                </NavItem>
              </Navbar>
            </Router>
          </div>
        </header>

        {/* <div id="navbar">
          <Router>
            <Navbar>
              <Navbar.Brand></Navbar.Brand>
          
=======
        
        
        <div id="header">
          <Router>
            <Navbar>
              <Navbar.Brand></Navbar.Brand>
              {/* ---------------------- */}
              <div id="mySidenav" class="sidenav">
>>>>>>> a1bf46db29cefa50fc91bcb577b9049719f202ae

              <NavItem>
                <a href="/"  className="nav-link" id="home">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a href="/MyProfile" className="nav-link" id="profile">
                  Profile
                </a>
              </NavItem>
              <NavItem>
                <a href="/Aboutus" className="nav-link" id="aboutus">
                  About-us
                </a>
              </NavItem>
             </div>
              {this.props.isAuth && <LogoutButton />}
<<<<<<< HEAD

=======
              {/* ---------------------- */}
              {/* <NavItem>
                <a href="/fitness" className="nav-link" id="fitness">
                  Fitness
                </a>
              </NavItem> */}

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
>>>>>>> a1bf46db29cefa50fc91bcb577b9049719f202ae
              <NavItem>
                <a href="/players" className="nav-link" id="players">
                  Players
                </a>
              </NavItem>
              <NavItem>
                <a href="/Football" className="nav-link" id="leagues">
                  Leagues
                </a>
              </NavItem>
              <NavItem>
                <a href="/teams" className="nav-link" id="teams">
                  Teams
                </a>
              </NavItem>
              
              </div>
              </div>
            </Navbar>

            
          </Router>
        </div> */}
      </>
    );
  }
}

export default Header;
