"use client";
import React from "react";
import "./slider.scss";
import { Carousel, Form, Tab, Nav } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";
import SliderSearch from "./slider-search";

const Slider = () => {
	return (
		<div className="slider-container">
			<Carousel fade className="main-slider">
				{slides.map((item) => (
					<Carousel.Item key={item.id}>
						<Image src={`/img/slider/${item.image}`} width={1355} height={500} alt={item.title} />
						<Carousel.Caption>
							<h3>{item.title}</h3>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		<SliderSearch/>
		</div>
	);
};

export default Slider;
