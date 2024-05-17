import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Make sure you have a Header.css for custom styles

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="/home" className="brand-container">
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/Header.svg'}
              alt="Logo"
              className="brand-logo"
            />
            
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BsList /> {/* Hamburger Icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Add more Nav.Link items here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
