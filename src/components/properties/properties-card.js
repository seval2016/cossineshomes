"use client";
import React from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import Image from "next/image";
import "./properties-card.scss";

const PropertiesCard = (props) => {
  const { image, title, price, location } = props;

  return (
    <Card className="border-0 mb-4">
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Image
          src={`/img/properties/${image}`}
          className="img-fluid"
          width={400}
          height={400}
          alt=""
        />
        <div className="inf">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{location}</Card.Text>
          </div>
          <div>
            <Button className="btn">{price}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertiesCard;
