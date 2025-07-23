import { StaticImageData } from "next/image";
import { FooterContent } from "./Footer";

export interface CaseStudiesData {
  background: StaticImageData;
  topBanner: {
    title: string;
    description: string;
  };
  cards: {
    client: {
      image: StaticImageData;
      name: string;
      sector: string;
      offering: string;
      labels: { key: string; value: string }[];
    };
    strategy: {
      image: StaticImageData;
      title: string;
      description: string;
    };
    buttons: { text: string; className: string }[];
  };
  overview: {
    image: StaticImageData;
    text: string;
  };
  clientNeed: {
    text: string;
    images: StaticImageData[];
  };
  solution: {
    text: string[];
    vectorImage: StaticImageData;
    author: string;
    bulletText: string;
  };
  keyFeatures: {
    title: string;
    items: { title: string; content: string }[];
  };
  impactResults: {
    title: string;
    text: string;
  };
  whyItMatters: {
    title: string;
    text: string;
  };
  metrics: {
    metric1: {
      value: string;
      label: string;
      gradientColor: string;
    };
    metric2: {
      value: string;
      label: string;
      gradientColor: string;
    };
  };
  footer: FooterContent;
}
