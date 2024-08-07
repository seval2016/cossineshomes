"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import properties from "@/helpers/data/properties.json";
import PropertiesCard from "./properties-card";
import PropertiesForm from "./properties-form";

const Properties = () => {

  return (
    <>
      <Container className="properties d-flex flex-wrap flex-xl-nowrap gap-5">
        <div className="w-100">
          <PropertiesForm />
        </div>
        <Row>
          {properties.map((item) => (
            <Col key={item.id} md={6}>
              <PropertiesCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Properties;
