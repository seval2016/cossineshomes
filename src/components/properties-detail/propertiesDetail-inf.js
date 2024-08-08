"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./properties-detail.scss";
import PropertiesDetail from "@/helpers/data/properties-details.json";

// Example coordinates for the location
const mapLocation = {
  lat: parseFloat(location.Latitude) || 0,
  lng: parseFloat(location.Longitude) || 0,
};

const DetailInformation = () => {
  // JSON içindeki "property" objesine erişim
  const { features, description, location } = PropertiesDetail.property;

  return (
    <div className="d-flex flex-column gap-5">
      {/* Description Section */}
      <Card className="description mt-4">
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Details Section */}
      <Card className="details-card">
        <Card.Body>
          <Card.Title>Details</Card.Title>
          <Row>
            <Col md={6}>
              <p>
                <strong>Size:</strong> {features.Size}
              </p>
              <p>
                <strong>Bathrooms:</strong> {features.Bathrooms}
              </p>
              <p>
                <strong>Bedrooms:</strong> {features.Bedrooms}
              </p>
              <p>
                <strong>Garage:</strong> {features.Garage}
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Year of built:</strong> {features["Year of Built"]}
              </p>
              <p>
                <strong>Furniture:</strong> {features.Furniture}
              </p>
              <p>
                <strong>Maintenance fee:</strong> {features["Maintenance fee"]}
              </p>
              <p>
                <strong>Terrace:</strong> {features.Terrace}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Location Section */}
      <Card className="location-card">
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Row>
            <Col md={4}>
              <p>
                <strong>Country:</strong> {location.Country}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>City:</strong> {location.City}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Address:</strong> {location.Address}
              </p>
            </Col>
          </Row>
          <div className="map-container">
            <iframe
              src={location.embed}
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailInformation;
