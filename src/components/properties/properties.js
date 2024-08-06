"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import PropertiesPage from "@/helpers/data/properties.json";
import PropertiesForm from "./properties-form";
import "./properties.scss";

const Properties= () => {
  return (
    <>
      <Container className="properties d-flex gap-5">

        <div className="w-100">
            <PropertiesForm/>
        </div>
            
        <Row>
          {PropertiesPage.map((item, index) => (
            <Col key={index} className="d-flex">
              <Card style={{ width: "21rem" }} className="border-0 mb-4">
                <Image
                  src="/img/properties/properties.jpg"
                  className=""
                  width={350}
                  height={350}
                  alt=""
                />
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Title>Luxury villa in Central Park</Card.Title>
                    <Card.Text>Pendik,İstanbul</Card.Text>
                  </div>
                  <div>
                    <Button className="btn">$ 2500.00</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Properties;
