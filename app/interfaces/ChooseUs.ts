import { StaticImageData } from "next/image";

export interface ChooseUsData {
  main: {
    label: string;
    heading: string;
    image: StaticImageData;
  };
  rightColumn: {
    sections: {
      heading: string;
      content: string;
    }[];
    buttonText: string;
    href: string;
  };
  stats: {
    stat1: {
      value: string;
      label: string;
      description: string;
    };
    stat2: {
      value: string;
      label: string;
      description: string;
    };
  };
}
