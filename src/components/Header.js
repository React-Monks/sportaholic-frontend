import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-bootstrap';
import { Link, BrowserRouter as Router, } from "react-router-dom";
import LogoutButton from './LogoutButton';

class Header extends Component {
    render() {
        return (
            <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>sportoholic</Navbar.Brand>
            <NavItem><a href="/" className="nav-link">Home</a></NavItem>
            <NavItem><a href="/Football" className="nav-link" >Football</a></NavItem>
            {this.props.isAuth&&
            <LogoutButton/>
            }
            
          </Navbar>
          </Router>
        )
    }
}

export default Header
