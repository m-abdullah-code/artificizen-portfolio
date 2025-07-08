import Award1 from "../../../public/assets/Awards/award1.png";
import Award2 from "../../../public/assets/Awards/award2.png";
import Award3 from "../../../public/assets/Awards/award3.png";
import { AwardsSectionData } from "@/app/interfaces/AwardsSection";

export const awardsData: AwardsSectionData = {
  headingPrefix: "/ awards /",
  headingGradient: "Celebrating",
  headingSuffix: "Our Award-Winning Achievements",
  awards: [
    {
      id: 1,
      image: Award3,
      width: 200,
      height: 200,
      alt: "Award 3",
    },
    {
      id: 2,
      image: Award2,
      width: 240,
      height: 240,
      alt: "Award 2",
    },
    {
      id: 3,
      image: Award1,
      width: 150,
      height: 150,
      alt: "Award 1",
    },
  ],
};