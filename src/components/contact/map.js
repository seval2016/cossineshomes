import React from "react";
import { config } from "@/helpers/config";

const Map = () => {
  return (
    <div>
      <iframe
       src={config.contact.map.embed}
        width="100%"
        height="450"
        style={{ border: "0", display: "block"}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
