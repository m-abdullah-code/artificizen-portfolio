import { serviceData } from "@/app/data/ServicesPage/UiUx/UiUx";
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
