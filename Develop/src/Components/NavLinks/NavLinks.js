// NavbarLinks.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarLinks = () => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Container>
        <Nav className="ml-auto">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
      </Container>
    </Navbar.Collapse>
  );
}

export default NavbarLinks;