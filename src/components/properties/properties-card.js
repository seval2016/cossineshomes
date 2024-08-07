"use client";
import React from "react";
import { Card,Button } from "react-bootstrap";
import Image from "next/image";
import "./properties-card.scss"

const PropertiesCard = (props) => {

    const {image,title,price,location}=props;


  return (
    <Card className="border-0 mb-4">
                <Image
                  src={`/img/properties/${image}`}
                  className="img-fluid rounded"
                  width={450}
                  height={450}
                  alt=""
                  
                />
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{location}</Card.Text>
                  </div>
                  <div>
                    <Button className="btn">{price}</Button>
                  </div>
                </Card.Body>
              </Card>
  )
}

export default PropertiesCard