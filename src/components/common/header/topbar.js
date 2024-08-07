import { config } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import './topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan">
          <i className="pi pi-megaphone me-3"></i>
          {config.project.slogan}
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
