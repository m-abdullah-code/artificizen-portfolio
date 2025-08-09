import { serviceData } from "@/app/data/ServicesPage/RemoteStaffing/RemoteStaffing";
import ServicesPages from "@/app/pages/Services/ServicesPages";
import React from "react";

const page = () => {
  return (
    <div className="p-5 mt-20">
      <ServicesPages data={serviceData} />
    </div>
  );
};

export default page;
