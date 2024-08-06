"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./properties-detail.scss";
import PropertiesDetail from "@/helpers/data/properties-details.json";
import { Container, Row, Col, Button } from "react-bootstrap";
import PropertiesDetailsForm from "./propertiesDetails-form";
import  PropertiesDetailInf from "./propertiesDetail-inf";


const PropertySlide = () => {
  const property = PropertiesDetail.property;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xl={8}>
            <div className="property-detail">
              <div className="propertySlide p-4">
                <div className="row">
                  {/* Büyük Resim */}
                  <div className="col-md-12 mb-3">
                    <div className="largeImageContainer">
                      <Image
                        src={property.images[activeIndex]}
                        alt={`Slide ${activeIndex + 1}`}
                        className="d-block w-100"
                        layout="responsive"
                        width={700}
                        height={400}
                      />
                    </div>
                  </div>
                  {/* Küçük Resimler */}
                  <div className="col-md-12">
                    <div className="d-flex justify-content-center thumbnailContainer">
                      {property.images.map((src, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${
                            index === activeIndex ? "activeThumbnail" : ""
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            layout="fixed"
                            width={100}
                            height={70}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Row className="my-4">
                <Col>
                  {/* Detail Text */}
                  <PropertiesDetailInf />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={4}>
            <div className="w-100">
              <PropertiesDetailsForm />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropertySlide;
