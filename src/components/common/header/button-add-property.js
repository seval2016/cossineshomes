import { config } from "@/helpers/config";
import React from "react";
import  "./button-add-property.scss"

const ButtonAddProperty = () => {
  return (
    <a href={config.contact.addProperty.link} className="btn-add-property py-2">
      {config.contact.addProperty.title}<i className={`ms-5 fw-bold ${config.contact.addProperty.icon}`}></i>
    </a>
  );
};

export default ButtonAddProperty;
