import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "./option.scss";

const Option = () => {
  return (
    <Container className="options">
      <Row>
        <Col xl={6} lg className="d-flex align-items-center">
          <div className="options-left">
            <h3 className="mb-3 title">
              Find The Right Selling Option For You
            </h3>
            <div className="options-item">
              <div className="icon">
                <Image
                  src="/img/icons/sale-label.png"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0">Tech-Driven Marketing</p>
                <p className="text">
                  Real estate is embracing technology with virtual tours, 3D
                  models, and blockchain transactions.
                </p>
              </div>
            </div>
            <div className="options-item">
              <div className="icon">
                <Image
                  src="/img/icons/leaf-label.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0">Sustainability Matters</p>
                <p className="text">
                Green building practices and eco-friendly features are gaining popularity for environmentally conscious buyers.
                </p>
              </div>
            </div>
            <div className="options-item">
              <div className="icon">
                <Image
                  src="/img/icons/security-label.png"
                  width={45}
                  height={45}
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0">Remote Work Impact</p>
                <p className="text">
                Changing work patterns are reshaping housing preferences, favoring suburban and urban mixed-use developments.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg className="options-right p-0">      
            <Image
              src="/img/option/option-1.jpg"
              alt="option"
              width={500}
              height={400}
            />
        </Col>
      </Row>
    </Container>
  );
};

export default Option;
