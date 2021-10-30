import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

function Menu() {
  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }}>
          <Link to="header" smooth={true} duration={700}>
            Shweta weds Gopal
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link>
              <Link to="header" smooth={true} duration={1000}>
                Shweta weds Gopal
              </Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to="events">Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="map">Venue</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
