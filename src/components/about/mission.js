import React from "react";
import "./mission.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Mission = () => {
  return (
    <Container className="mission">
      <Row>
        <Col xl={6} lg className="mission-left p-0">
          <Image
            src="/img/mission/mission.jpg"
            alt="option"
            width={500}
            height={400}
          />
        </Col>
        <Col xl={6} lg className="d-flex align-items-start">
          <div className="mission-right">
            <h5 className="title">
              We are on a Mission to Change <br />View of Real Estate Field.
            </h5>
            <p className="text">
              At the heart of our vision lies a resolute commitment to transform
              the landscape of the real estate industry. We are not just a
              company; we are on a mission to change the very essence of how
              real estate is perceived and experienced. Our journey is defined
              by innovation, transparency, and a relentless pursuit of
              excellence. With a bold and forward-thinking approach, we seek to
              revolutionize the traditional norms of the real estate field,
              making it more accessible, efficient, and customer-centric. Our
              aspiration is to shape a future where buying, selling, or
              investing in real estate is a seamless and empowering experience
              for all. Join us on this transformative journey as we rewrite the
              narrative of real estate.
            </p>
            <div className="d-flex gap-4">
              <div className="d-flex flex-column align-items-center">
                <div className="circle"></div>
                <p>Modern Architect</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="circle"></div>
                <p>Green Building</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
