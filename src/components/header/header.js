import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation";
import HeroText from "../heroText/heroText";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <Navigation />
        <HeroText />
      </Container>
    </header>
  );
};

export default Header;
