import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css'; // Make sure you have a Header.css for custom styles

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home" className="brand-container">
          <div>
            <h1 className="brand-title">NoAf.De</h1>
            <p className="brand-subtitle">Alternative Fakten Richtig stellen</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BsList /> {/* Hamburger Icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Add more Nav.Link items here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
