
"use client"
import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";

const MainMenu = (props) => {
  return (
    <Nav {...props}>
      {menuItems.map((item) => (
        <Nav.Link key={item.title} href={item.Link}>
       {item.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default MainMenu;
