import React, { Component } from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import {   Nav,Dropdown } from "react-bootstrap";

class Header extends Component {

  render() {
    return (
      <>
        {/* <section >
          <Router>
            <Navbar>
              <Navbar.Brand></Navbar.Brand>
              <NavItem>
                <a href="/" className="nav-link" id="home">
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
                  About us
                </a>
              </NavItem>
             
              {this.props.isAuth && <LogoutButton />}
            </Navbar>
          </Router>
        </section> */}
        
        <div id="navbar">
          <Router>
            <Navbar>
              <Navbar.Brand></Navbar.Brand>
              {/* ---------------------- */}
          

              <NavItem>
                <a href="/" className="nav-link" id="home">
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
                  About us
                </a>
              </NavItem>
             
              {this.props.isAuth && <LogoutButton />}
              {/* ---------------------- */}
              {/* <NavItem>
                <a href="/fitness" className="nav-link" id="fitness">
                  Fitness
                </a>
              </NavItem> */}
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
            </Navbar>
            {/* ------------------- */}
            
          </Router>
        </div>
      </>
    );
  }
}

export default Header;
