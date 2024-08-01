import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact-button.scss"

const ContactButtons = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center my-4">
        <Col xl={6} lg className="d-flex flex-column align-items-center align-items-md-start">
          <h3>Need help? Talk to our expert .</h3>
          <p>Talk to our experts or Browse through more properties.</p>
        </Col>
        <Col xl={6} lg className="d-flex justify-content-center justify-content-md-end gap-4 mt-4 mt-md-0">
          <a href="#" className="contact-us-left py-2">
            <i className="pi pi-arrow-up-right me-2"></i> Contact Us 
          </a>
          <a href="#" className="contact-us-right py-2">
           <i className="pi pi-phone me-2"></i> Contact Us 
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactButtons;
