import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="links">
                <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/TableData">
                  Table
                </Nav.Link>
                <Nav.Link as={Link} to="/Formulario">
                  Form
                </Nav.Link>
                <Nav.Link as={Link} to="/Characters">
                  Characters
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
export default MyNavbar;