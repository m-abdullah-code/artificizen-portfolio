import { StaticImageData } from "next/image";

export interface RowData {
  button1?: string;
  button2?: string;
  col1Heading: string;
  col2Heading: string;
  col2Text: string;
}

export interface FooterData {
  headings: string[];
  description: string;
  gradientIndex: number;
  gradientWordCount: number;
}

export interface PageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  rows: RowData[];
  footer: FooterData;
  responsibilities: string[];
  qualifications: string[];
  jobDescription: string[];
  sideCard: {
    image: StaticImageData;
    heading: string;
    content: string;
  };
  jobInfo: {
    type: string;
    level: string;
    salary: string;
  };
}

export interface TableComponentProps {
  rows: RowData[];
}
