import React from "react";
import "./property-cities.scss";
import propertyCities from "@/helpers/data/property-cities.json";
import { Container, Row, Col } from "react-bootstrap";

const PropertyCities = () => {
  return (
    <Container>
      <h3>Explore Properties</h3>
      <span>By Types</span>
      <Row className="d-flex justify-content-center align-items-center my-5 gap-5">
        {propertyCities.map((item, index) => (
          <Col
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="property">
              <div className="property-item">
                <h5>{item.name}</h5>
                <p>{item.count} properties</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyCities;
