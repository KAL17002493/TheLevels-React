import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {

  //Navbar and all it's options
  return (
    <div>
<Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">The Levels</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/review">Review</Nav.Link>
          <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </div>

  )
}

export default Header 