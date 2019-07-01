import React from "react";
import { Container } from "react-bootstrap";
import CardHeading from "./card-heading/cardHeading";
import CardBody from "./card-body/cardBody";
import "./card.css";

const Card = ({ title, details, price, caption }) => {
  return (
    <div className="signup-card">
      <Container>
        <CardHeading
          cardTitle={title}
          cardPrice={price}
          priceCaption={caption}
        />
        <CardBody detailsList={details} />
      </Container>
    </div>
  );
};

export default Card;
