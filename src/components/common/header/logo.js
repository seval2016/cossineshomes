import React from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link } from "next/navigation";
import Image from "next/image";
import { config } from "@/helpers/config";

const Logo = () => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/img/logos/cossineshomes.png`}
				alt={config.project.name}
				width={240}
				height={65}
				priority
			/>
		</NavbarBrand>
	);
};

export default Logo;