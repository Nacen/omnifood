import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Cities = () => {
  return (
    <section className="cities-section">
      <Container>
        <h2>We're currently in these cities</h2>
        <Row>
            <Col xs={6} s={6} md={3} lg={3}>
                <img src="" alt="" />
                <div className="details-container">

                </div>
            </Col>
            <Col xs={6} s={6} md={3} lg={3}>
                <img src="" alt="" />
                <div className="details-container">
                    
                </div>
            </Col>
            <Col xs={6} s={6} md={3} lg={3}>
                <img src="" alt="" />
                <div className="details-container">
                    
                </div>
            </Col>
            <Col xs={6} s={6} md={3} lg={3}>
                <img src="" alt="" />
                <div className="details-container">
                    
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cities;
