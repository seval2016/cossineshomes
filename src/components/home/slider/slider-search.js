"use client";
import React, { useState } from "react";
import {Form, Tab, Nav } from "react-bootstrap";
import Image from "next/image";
const SliderSearch = () => {
    const [searchType, setSearchType] = useState("Rent");
	const [propertyType, setPropertyType] = useState("House");

	const handleSearch = () => {
		// Arama işlemi burada gerçekleştirilebilir.
		alert(`Searching for ${searchType} - ${propertyType}`);
	};

  return (
    <div className="search-tab">
    <Tab.Container defaultActiveKey="Rent">
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link eventKey="Rent" onClick={() => setSearchType("Rent")}>Rent</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Sale" onClick={() => setSearchType("Sale")}>Sale</Nav.Link>
            </Nav.Item>
        </Nav>
        <Tab.Content>
            <Tab.Pane eventKey="Rent">
                <Form>
                    <div className="search-bar">
                        <Form.Control type="text" placeholder="Search for properties" />
                        <button type="button" onClick={handleSearch}>
                            <i className="pi pi-search"> </i>
                        </button>
                    </div>
                    <div className="property-type">
                        <Form.Check
                            type="radio"
                            label="House"
                            name="propertyType"
                            id="house"
                            checked={propertyType === "House"}
                            onChange={() => setPropertyType("House")}
                        />
                        <Form.Check
                            type="radio"
                            label="Apartment"
                            name="propertyType"
                            id="apartment"
                            checked={propertyType === "Apartment"}
                            onChange={() => setPropertyType("Apartment")}
                        />
                        <Form.Check
                            type="radio"
                            label="Villa"
                            name="propertyType"
                            id="villa"
                            checked={propertyType === "Villa"}
                            onChange={() => setPropertyType("Villa")}
                        />
                        <Form.Check
                            type="radio"
                            label="Office"
                            name="propertyType"
                            id="office"
                            checked={propertyType === "Office"}
                            onChange={() => setPropertyType("Office")}
                        />
                    </div>
                </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="Sale">
                <Form>
                    <div className="search-bar">
                        <Form.Control type="text" placeholder="Search for properties" />
                        <button type="button" onClick={handleSearch}>
                        <i className="pi pi-search"> </i>
                        </button>
                    </div>
                    <div className="property-type">
                        <Form.Check
                            type="radio"
                            label="House"
                            name="propertyType"
                            id="house"
                            checked={propertyType === "House"}
                            onChange={() => setPropertyType("House")}
                        />
                        <Form.Check
                            type="radio"
                            label="Apartment"
                            name="propertyType"
                            id="apartment"
                            checked={propertyType === "Apartment"}
                            onChange={() => setPropertyType("Apartment")}
                        />
                        <Form.Check
                            type="radio"
                            label="Villa"
                            name="propertyType"
                            id="villa"
                            checked={propertyType === "Villa"}
                            onChange={() => setPropertyType("Villa")}
                        />
                        <Form.Check
                            type="radio"
                            label="Office"
                            name="propertyType"
                            id="office"
                            checked={propertyType === "Office"}
                            onChange={() => setPropertyType("Office")}
                        />
                    </div>
                </Form>
            </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
</div>
  )
}

export default SliderSearch