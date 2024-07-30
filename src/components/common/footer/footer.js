import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../header/logo";
import "./footer.scss";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import ContactMenu from "./contact-menu";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl={4}>
            <Logo theme="light" />
            <p>{config.project.description}</p>
          </Col>
          <Col xs={6} lg>
          <h3>Quick Links</h3>
            <MainMenu  className="justify-content-center"/>
          </Col>
          <Col xs={6} lg>
          <h3>Contact</h3>
          <ContactMenu/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
