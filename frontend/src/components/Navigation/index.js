import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import searchStocks from './mockData';

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
  const [searchInput, setSearchInput] = useState();
  const [showSearch, setShowSearch] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const autoSearch = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  useEffect(() => {
    console.log(searchInput);
  }, []);

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  let sessionLinks;
  let searchBar;
  if (sessionUser) {
    // sessionLinks = <ProfileButton user={sessionUser} />;
    sessionLinks = (
      <>
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link as={NavLink} to="/">
          Dashboard
        </Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown" alignRight>
          <NavDropdown.ItemText as="div" style={{ margin: 'auto', padding: '5%' }}>
            <Row style={{ width: '100%' }}>
              <Col style={{ width: '100%' }}>
                <p style={{ margin: '0 0', fontWeight: 'bold' }}>$7842.42</p>
                <p style={{ margin: '0 0', fontSize: '12px' }}>Portfolio Value</p>
              </Col>
              <Col style={{ width: '100%' }}>
                <p style={{ margin: '0 0', fontWeight: 'bold' }}>$140.60</p>
                <p style={{ margin: '0 0', fontSize: '12px' }}>Buying Power</p>
              </Col>
            </Row>
          </NavDropdown.ItemText>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#Donate">Currently Under Construction</NavDropdown.Item>
          <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as="button" onClick={logout}>
            <i class="fas fa-sign-out-alt"></i> Log Out
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
    searchBar = (
      <Form inline style={{ width: '100%' }} onSubmit={autoSearch}>
        <FormControl
          type="text"
          placeholder="Search Stocks"
          className="mr-sm-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
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
          style={{
            borderRadius: '24px',
            padding: '6px 18px',
            margin: '0px 15px',
            maxWidth: '94px',
          }}
        >
          Sign Up
        </Button>
      </>
    );
    searchBar = <div></div>;
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="d-flex justify-content-between ms-1">
      <Navbar.Brand as={NavLink} to="/">
        Goemon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="d-flex justify-content-between ms-1" style={{ width: '100%' }}>
          <Nav></Nav>
          <Nav>{isLoaded && searchBar}</Nav>
          <Nav>{isLoaded && sessionLinks}</Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
