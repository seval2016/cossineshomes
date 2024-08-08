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
            <h2> You are unauthorized </h2>
            <p>
              Sorry, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default Page;
