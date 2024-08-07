"use client";
import React from "react";
import { Container, Row, Card,Col } from "react-bootstrap";
import "./properties-types.scss";
import propertyTypes from "@/helpers/data/property-types.json";
import SectionTitle from "../common/section-title";

const PropertiesTypes = () => {
  return (
<Container className="propertyTypes">
 <SectionTitle  title={"Explore Properties"} subTitle={"By Types"}/>
  <Row className="properties-types" >
    {propertyTypes.map((item) => (
      <Col key={item.label} className=" d-flex justify-content-center align-items-center my-4 wrap">
        <Card>
          <div className="icon d-flex justify-content-center align-items-center m-3">
            <i className={item.icon}></i>
          </div>
          <Card.Body className="card-body d-flex flex-column justify-content-end">
            <Card.Title>{item.label}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.count} Properties
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  );
};

export default PropertiesTypes;
