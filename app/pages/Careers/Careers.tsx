import Footer from "@/app/components/layout/Footer/Footer";
import { careerData } from "@/app/data/Career/Career";
import TableComponent from "@/app/shared/CareerTable";
import TopBannerCard from "@/app/shared/TopBannerCard";
import React from "react";

export default function CareerPage() {
  return (
    <div>
      <TopBannerCard
        imageSrc={careerData.banner.image}
        title={careerData.banner.title}
        description={careerData.banner.description}
      />

      <TableComponent rows={careerData.rows} />
      <div>
        <Footer
          headings={careerData.footer.headings}
          description={careerData.footer.description}
          gradientIndex={careerData.footer.gradientIndex}
          gradientWordCount={careerData.footer.gradientWordCount}
        />
      </div>
    </div>
  );
}
