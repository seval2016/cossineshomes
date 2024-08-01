import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./register.scss";

const Register = () => {
  return (
    <Container className="register">
      <Row>
        <Col>
          <h3>Get your dream house</h3>
          <p>
            Turn your aspirations into reality with Get Your Dream House where
            your perfect home becomes a possibility.
          </p>
          <a href="#" className="btn py-2">
                Register Now <i className="pi pi-arrow-up-right"></i>
              </a>
        </Col>
        <Col>
          <Image src="/img/register/register.png" width={590} height={370} />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
