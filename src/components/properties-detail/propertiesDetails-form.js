"use client";
import React from "react";
import "./propertiesDetails-form.scss";
import {Button,Form} from "react-bootstrap";


const PropertiesDetailsForm = () => {
  return (
    <div className="schedula p-4">
      <h3 className="">Schedule a tour</h3>
      <span>Choose your preferred day</span>

      <div className="schedula-form my-5">
        <Form.Control className="mb-3 py-2"
          type="text"
          placeholder="Tour Date"
          aria-label="Disabled input example"
        />
         <Form.Control className="mb-3 py-2"
          type="text"
          placeholder="Tour Time"
          aria-label="Disabled input example"
        />
        <Button variant="warning" className="w-100 text-white btn py-2">Warning</Button>
      </div>
    </div>
  );
};

export default PropertiesDetailsForm;
