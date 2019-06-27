import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.css";
import logo from "../../img/logo-white.png";

const Navigation = () => {
  return (
    <Navbar className="mt-2" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="text-white" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navigation-link text-light text-uppercase h4" href="#">
            Food Delivery
          </Nav.Link>
          <Nav.Link className="navigation-link text-light text-uppercase h4" href="#">
            How it works
          </Nav.Link>
          <Nav.Link className="navigation-link text-light text-uppercase h4" href="#">
            Our cities
          </Nav.Link>
          <Nav.Link className="navigation-link text-light text-uppercase h4" href="#">
            Food delivered
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
