"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactMenu from '../common/footer/contact-menu'
import ContactForm from './contact-form'
import Map from './map'
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
        <Container>
            <Row className="g-5">
                <Col lg={8}>
                    <h4 className="mb-4">Send Message</h4>
                    <ContactForm/>
                </Col>
                <Col lg={4}>
                    <h4 className="mb-4">Get In Touch</h4>
                    <ContactMenu className="flex-column"/>
                </Col>
            </Row>
        </Container>
        <Map/>
    </div>
  )
}

export default Contact