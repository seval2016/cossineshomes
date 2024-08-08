import React from "react";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import "./contact-form.scss";
import { useFormState } from "react-dom";
import { createContactAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";

const ContactForm = () => {
  const [state, dispatch] = useFormState(createContactAction, initialResponse);

  return (
    <div className="contact-form">
      <Form action={dispatch}>
        <Row>
          <Col md={6}>
            <InputGroup className="mb-3" size="lg">
              <InputGroup.Text id="name">
                <i className="pi pi-id-card"></i>
              </InputGroup.Text>
              <Form.Control
                name="name"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="name"
                isInvalid={!!state?.errors?.name} //hatayı kırmızı renkte gösterme
              />
              <Form.Control.Feedback type="invalid"> 
                {state?.errors?.name}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup className="mb-3" size="lg">
              <InputGroup.Text id="email">
                <i className="pi pi-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                name="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email"
                isInvalid={!!state?.errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {state?.errors?.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className="mb-3" size="lg">
              <InputGroup.Text id="subject">
                <i className="pi pi-tag"></i>
              </InputGroup.Text>
              <Form.Control
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                aria-describedby="subject"
                isInvalid={!!state?.errors?.subject}
              />
              <Form.Control.Feedback type="invalid">
								{state?.errors?.subject}
							</Form.Control.Feedback>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className="mb-3" size="lg">
              <InputGroup.Text id="message">
                <i className="pi pi-pen-to-square"></i>
              </InputGroup.Text>
              <Form.Control
                name="message"
                as="textarea"
                placeholder="Message"
                aria-label="Message"
                aria-describedby="message"
                isInvalid={!!state?.errors?.message}
              />
              <Form.Control.Feedback type="invalid">
								{state?.errors?.message}
							</Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Row>
        <Button size="lg" type="submit" className="btn mt-3">
          <i className="pi pi-send me-2"></i> Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
