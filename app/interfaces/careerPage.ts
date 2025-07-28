import { StaticImageData } from "next/image";

// Interface for row data
export interface RowData {
  col1Heading: string;
  col2Heading: string;
  col2Text: string;
}

// Interface for footer data (assuming aboutUsData.footer structure)
export interface FooterData {
  headings: string[];
  description: string;
  gradientIndex: number;
  gradientWordCount: number;
}

// Main data structure
export interface PageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  rows: RowData[];
  footer: FooterData;
}

export interface RowData {
  button1?: string;
  button2?: string;
  col1Heading: string;
  col2Heading: string;
  col2Text: string;
}

export interface TableComponentProps {
  rows: RowData[];
}
