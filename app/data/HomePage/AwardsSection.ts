import Award1 from "../../../public/assets/Awards/award1.svg";
import Award2 from "../../../public/assets/Awards/award2.svg";
import Award3 from "../../../public/assets/Awards/award3.svg";
import { AwardsSectionData } from "@/app/interfaces/AwardsSection";

export const awardsData: AwardsSectionData = {
  headingPrefix: "/ awards /",
  headingGradient: "Celebrating",
  headingSuffix: "Our Award-Winning Achievements",
  awards: [
    {
      id: 1,
      image: Award1,
      width: 231,
      height: 250,
      alt: "Award 1",
    },
    {
      id: 2,
      image: Award2,
      width: 253,
      height: 250,
      alt: "Award 2",
    },
    {
      id: 3,
      image: Award3,
      width: 169,
      height: 250,
      alt: "Award 3",
    },
  ],
};