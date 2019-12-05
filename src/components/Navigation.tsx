import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

class Navigation extends Component {
    public render() {
        return (
            <Navbar fixed='top' expand="sm" collapseOnSelect bg='light' variant='light'>
            <NavbarBrand>
              Tenttisofta
            </NavbarBrand>
            <Navbar.Toggle aria-controls='app-navbar-nav' />
            <Navbar.Collapse id='app-navbar-nav'>
                <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link eventKey={1} as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={2} as={Link} to='/list'>
                  List
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={3} as={Link} to='/questions'>
                  Questions
                </Nav.Link>
              </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
  
        );
    }
}

export default Navigation;