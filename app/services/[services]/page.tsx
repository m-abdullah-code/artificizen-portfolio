import { servicesData } from "@/app/data/ServicesPage/Services";
import ServicesImageCard from "@/app/shared/ServicesImageCard";

export default function Page() {
  return (
    <div className="p-10">
      <ServicesImageCard
        image={servicesData.image}
        heading={servicesData.heading}
        content={servicesData.content}
      />
    </div>
  );
}
