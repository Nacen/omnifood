import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import customerAlberto from "../../img/customer-1.jpg";
import customerJoana from "../../img/customer-2.jpg";
import customerMilton from "../../img/customer-3.jpg";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <Container>
        <h2>Our customers can't live without us</h2>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <blockquote>
              Omnifood is just awesome! I just launched a startup which leaves
              me with no time for cooking, so Omnifood is a life-saver. Now that
              I got used to it, I couldn't live without my daily meals!
              <cite>
                <img src={customerAlberto} alt="Customer Alberto Duncan" />
                Alberto Duncan
              </cite>
            </blockquote>
            <div />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <blockquote>
              Inexpensive, healthy and great-tasting meals, delivered right to
              my home. We have lots of food delivery here in Lisbon, but no one
              comes even close to Omifood. Me and my family are so in love!
              <cite>
                <img src={customerJoana} alt="" />
                Joana Silva
              </cite>
            </blockquote>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <blockquote>
              I was looking for a quick and easy food delivery service in San
              Franciso. I tried a lot of them and ended up with Omnifood. Best
              food delivery service in the Bay Area. Keep up the great work!
              <cite>
                <img src={customerMilton} alt="" />
                Milton Chapman
              </cite>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Testimonials;
