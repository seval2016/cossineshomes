import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../common/section-title";
import PropertiesCard from "../properties/properties-card";
import properties from "@/helpers/data/properties.json";

const FeaturedProperties = () => {
  const discounted = true; // Bu satırı ekledik
  let allProperties = properties;

  if (discounted) {
    allProperties = allProperties.filter((item) => item.discounted);
  }

  return (
    <Container className="featured-properties">
      <SectionTitle
        title={"Discover Popular Properties"}
        subTitle={"Featured Properties"}
      />
      <Row>
        {allProperties.map((item) => (
          <Col key={item.id} xs={12} md={6} xl={4}>
            <PropertiesCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProperties;
