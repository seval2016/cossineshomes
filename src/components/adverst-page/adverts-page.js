"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./adverts.scss";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Adverts from "@/helpers/data/advert-page.json";
import AdvertsForm from "./adverts-form";

const AdvertsPage = () => {
  return (
    <>
      <Container className="adverts d-flex">
        <div>
            <AdvertsForm/>
        </div>
        <Row>
          {Adverts.map((item, index) => (
            <Col key="index" className="d-flex">
              <Card style={{ width: "28rem" }} className="border-0">
                <Image
                  src="/img/advertsPage/advertspage.jpg"
                  className=""
                  width={450}
                  height={400}
                  alt=""
                />
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <Card.Title>Luxury villa in Central Park</Card.Title>
                    <Card.Text>Pendik,İstanbul</Card.Text>
                  </div>
                  <div>
                    <Button className="btn">$ 2500.00</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AdvertsPage;
