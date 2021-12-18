import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar bg="dark py-4" variant="dark">
        <Container>
          <Navbar.Brand to="/">TVMAZE</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
