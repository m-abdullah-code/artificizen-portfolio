import { serviceData } from "@/app/data/ServicesPage/WebDevelopment/WebDevelopment";
import ServicesPages from "@/app/pages/Services/ServicesPages";
import React from "react";

const page = () => {
  return (
    <div className="">
      <ServicesPages data={serviceData} />
    </div>
  );
};

export default page;
