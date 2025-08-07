import { StaticImageData } from "next/image";

// Interface for contact information
export interface ContactInfo {
  callCenter: {
    title: string;
    phone: { icon: string; number: string }[];
  };
  location: {
    title: string;
    addresses: string[];
  };
}

// Interface for email and social networks
export interface EmailAndSocials {
  email: {
    title: string;
    address: string;
  };
  socials: {
    title: string;
    networks: { name: string; href: string }[];
  };
}

// Interface for footer column
export interface FooterColumn {
  title: string;
  items: { label: string; url: string }[];
}

// Interface for footer data
export interface FooterData {
  logo: StaticImageData;
  description: string;
  callCenter: {
    title: string;
    contacts: { type: string; value: string }[];
  };
  location: {
    title: string;
    addresses: string[];
    socials: { name: string; href: string }[];
  };
  company: FooterColumn;
  services: FooterColumn;
  backgroundImage: StaticImageData;
}

// Main data structure
export interface ContactUsPageData {
  banner: {
    image: StaticImageData;
    title: string;
    description: string;
  };
  mainSection: {
    topText: string;
    headings: string[];
    description: string;
    contactInfo: ContactInfo;
    emailAndSocials: EmailAndSocials;
  };
  formSection: {
    title: string;
    description: string;
    buttonText: string;
    buttonIcon: StaticImageData;
  };
  footer: FooterData;
}
