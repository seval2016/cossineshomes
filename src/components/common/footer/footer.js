import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../header/logo";
import "./footer.scss";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import ContactMenu from "./contact-menu";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl={4}>
            <Logo theme="light" />
            <p className="mt-3">{config.project.description}</p>
            <div className="footer-btn my-4">
              <a href="#" className=" btn py-2">
                App Store <FaAppStoreIos  className="fs-4 ms-2"/>
              </a>
              <a href="#" className=" btn  py-2">
                Google Play <BiLogoPlayStore className="fs-4 ms-2"/>
              </a>
            </div>
          </Col>
          <Col xs={6} lg className="col-center">
            <h3>Quick Links</h3>
            <MainMenu  />
          </Col>
          <Col xs={6} lg>
            <h3>Contact</h3>
            <ContactMenu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
