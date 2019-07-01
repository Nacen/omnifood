import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./contactForm.css";

const ContactForm = () => {
  const [checked, handleCheck] = useState(true);

  return (
    <section className="contact-section">
      <div>
        <h2>We're happy to hear from you</h2>
        <Form>
          <Form.Group as={Row} controlId="formName">
            <Form.Label column lg="4" md="4" sm="12">
              Name
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                className="form-font"
                size="lg"
                type="email"
                placeholder="Your name please"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column lg="4" md="4" sm="12">
              Email
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                className="form-font"
                size="lg"
                type="email"
                placeholder="Your email please"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formQuestion">
            <Form.Label column lg="4" md="4" sm="12">
              How did you find us?
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control className="form-font" size="lg" as="select">
                <option>Friends</option>
                <option>Search Engine</option>
                <option>Advertisement</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formNewsLetter">
            <Form.Label column lg="4" md="4" sm="12">
              Newsletter?
            </Form.Label>
            <Col sm={12} md={8} lg={8}  className="d-flex flex-column justify-content-center">
              <Form.Check
                custom
                type="checkbox"
                checked={checked}
                onChange={() => handleCheck(!checked)}
                label="Yes Please"
                id={`custom-checkbox`}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
            <Form.Label column lg="4" md="4" sm="12">
              Drop us a line
            </Form.Label>
            <Col sm={12} md={8} lg={8} >
              <Form.Control
                as="textarea"
                rows="5"
                className="form-text-area"
                placeholder="Your message here"
              />
            </Col>
          </Form.Group>
          <Col xs={12} className="text-center mt-4">
            <button className="btn btn-full">Send it!</button>
          </Col>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
