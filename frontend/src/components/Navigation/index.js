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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <NavDropdown title="Account" id="basic-nav-dropdown" alignRight>
          <NavDropdown.ItemText as="div" style={{ margin: 'auto', padding: '5%' }}>
            <Row style={{ width: '100%' }}>
              <Col style={{ width: '100%' }}>
                <p style={{ margin: '0 0' }}>$0.00</p>
                <p style={{ margin: '0 0' }}>Portfolio Value</p>
              </Col>
              <Col style={{ width: '100%' }}>
                <p style={{ margin: '0 0' }}>$0.00</p>
                <p style={{ margin: '0 0' }}>Buying Power</p>
              </Col>
            </Row>
          </NavDropdown.ItemText>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as="button" onClick={logout}>
            <i class="fas fa-sign-out-alt"></i> Log Out
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
    searchBar = (
      <Form inline>
        <FormControl type="text" placeholder="Search Stocks" className="mr-sm-2" />
        <Button variant="outline-primary">
          <i class="fas fa-search"></i>
        </Button>
      </Form>
    );
  } else {
    sessionLinks = (
      <>
        <Nav.Link as={NavLink} to="/login" size="lg">
          Log In
        </Nav.Link>
        <Button
          as={NavLink}
          to="/signup"
          className="btn"
          style={{ borderRadius: '24px', padding: '6px 18px', margin: '0px 15px' }}
        >
          Sign Up
        </Button>
      </>
    );
    searchBar = <div></div>;
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Goemon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div></div>
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between ms-1">
        {isLoaded && searchBar}
        <Nav>{isLoaded && sessionLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
