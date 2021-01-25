import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';

import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  let searchBar;
  if (sessionUser) {
    // sessionLinks = <ProfileButton user={sessionUser} />;
    sessionLinks = (
      <>
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#link">Dashboard</Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Button onClick={logout}>
              <i class="fas fa-sign-out-alt"></i> Log Out
            </Button>
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
    searchBar = (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">
          <i class="fas fa-search"></i>
        </Button>
      </Form>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="nav-link">
          Log In
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          Sign Up
        </NavLink>
        {/* <Nav.Link>
        </Nav.Link>
        <Nav.Link>
        </Nav.Link> */}
      </>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Goemon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isLoaded && searchBar}
        <Nav className="mr-auto">{isLoaded && sessionLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
