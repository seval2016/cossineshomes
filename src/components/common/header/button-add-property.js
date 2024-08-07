import { config } from "@/helpers/config";
import React from "react";
import  "./button-add-property.scss";
import Image from "next/image";

const ButtonAddProperty = () => {
  return (
    <a href={config.contact.addProperty.link} className="btn-add-property py-1 px-2">
      {config.contact.addProperty.title}
      <Image src="/img/icons/add-property.png" className="ms-3" alt="" width={30} height={30}/>
    </a>
  );
};

export default ButtonAddProperty;
