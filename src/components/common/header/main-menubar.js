"use client";
import React from "react";
import { Navbar, Offcanvas, Container} from "react-bootstrap";
import Logo from "./logo";
import MainMenu from "./main-menu";
import ButtonAddProperty from "./button-add-property";

const MainMenubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3 shadow fw-bold">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="main-menu" />
        <Navbar.Offcanvas
          id="main-menu"
          aria-labelledby="main-menu-title"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-menu-title">COSSINES HOMES</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <MainMenu className="justify-content-center flex-grow-1 pe-3 fw-bold" />
           <ButtonAddProperty />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainMenubar;
