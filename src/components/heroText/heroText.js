import React from "react";
import { Link } from "react-router-dom";
import "./heroText.css";

const HeroText = () => {
  return (
    <section className="hero-text-box">
      <h1 className="heading-text">
        Goodbye junk food.
        <br />
        Hello super healthy meals.
      </h1>
      <Link to="#" className="btn btn-full">
        I'm hungry
      </Link>
      <Link to="#" className="btn btn-ghost">
        Show me more
      </Link>
    </section>
  );
};

export default HeroText;
