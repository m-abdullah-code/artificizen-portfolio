import { StaticImageData } from "next/image";
import { FooterContent } from "./Footer";

export interface BulletPoint {
  title: string;
  content: string;
}

export interface CardData {
  title: string;
  description: string;
  image?: StaticImageData;
  buttonText?: string;
  buttonClassName?: string;
  icon1?: StaticImageData;
  icon2?: StaticImageData;
  servicesList: string[] | undefined;
  servicesUrls?: string[];
}

export interface ServicesPageData {
  banner: {
    image: StaticImageData;
    heading: string;
    content: string;
  };
  sidebarCards: CardData[];
  mainSection: {
    heading: string;
    subheading: string;
    content: string;
    image: StaticImageData;
    trends: {
      title: string;
      subheading: string;
      section: string;
      bulletPoints: BulletPoint[];
    };
    applications: {
      title: string;
      subheading: string;
      bulletPoints: BulletPoint[];
    };
    advantage: {
      title: string;
      subheading: string;
      artificizenSection: string;
      bulletPoints: BulletPoint[];
    };
    projects: {
      title: string;
      subheading: string;
      metric: {
        value: string;
        label: string;
      };
      // projectBoxes: {
      //   title: string;
      //   content: string;
      // }[];
      projectBoxes: {
        title: {
          label: string;
          href: string;
        }[];
        content: string;
      }[];

      buttons: {
        text: string;
        className: string;
        icon?: StaticImageData;
        link?: string;
      }[];
    };
    process: {
      title: string;
      subheading: string;
      steps: {
        number: string;
        heading: string;
        content: string;
      }[];
    };
    partnership: {
      title: string;
      content: string[];
      decorImage: StaticImageData;
    };
  };
  footer: FooterContent;
}
