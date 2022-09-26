import React from "react";
import "../Header/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "x-large",
            }}
            href="/"
          >
            MexiKansas
          </a>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link data-cy="posts" href="/posts">
                Posts
              </Nav.Link>
              <Nav.Link data-cy="map" href="/map">
                Map
              </Nav.Link>
              <Nav.Link data-cy="about" href="/about">
                About
              </Nav.Link>
              <Nav.Link data-cy="reference" href="/references">
                References
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
