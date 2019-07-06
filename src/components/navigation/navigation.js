import React from "react";
import { Link } from "react-scroll";
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
          <Link
            activeClass="active"
            to="features-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={800}
            isDynamic={true}
            className="navigation-link text-light text-uppercase h3 nav-link"
          >
            Food Delivery
          </Link>

          <Link
            activeClass="active"
            to="steps-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={900}
            isDynamic={true}
            className="navigation-link text-light text-uppercase h3 nav-link"
          >
            How it works
          </Link>

          <Link
            activeClass="active"
            to="cities-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
            isDynamic={true}
            className="navigation-link text-light text-uppercase h3 nav-link"
          >
            Our cities
          </Link>

          <Link
            activeClass="active"
            to="signup-section"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={1000}
            isDynamic={true}
            className="navigation-link text-light text-uppercase h3 nav-link"
          >
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
