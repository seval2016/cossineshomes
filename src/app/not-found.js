import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <Spacer />
      <Container>
        <Row className="g-5 align-items-center">
          <Col sm={6}>
            <Image
              src="/img/errors/error.png"
              alt="Not Found"
              className="img-fluid"
              width={500}
              height={500}
            />
          </Col>
          <Col sm={6} className="text-center text-md-start">
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for could not be found.</p>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default Page;
