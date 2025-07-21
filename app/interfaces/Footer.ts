// Define the type for valid icon keys
export type IconKey =
  | "MdWhatsapp"
  | "IoCallOutline"
  | "FaFacebookF"
  | "FaXTwitter"
  | "FaLinkedinIn"
  | "IoLogoYoutube";

// Define the Contact interface
export interface Contact {
  icon: IconKey;
  value: string;
}

export interface FooterProps {
  headings?: string[];
  description?: string;
  gradientIndex?: number;
  gradientWordCount?: number;
}

// Define the FooterData interface
export interface FooterData {
  getInTouch: {
    subtitle: string;
    headings: string[];
    description: string;
  };
  contactForm: {
    title: string;
    description: string;
    formFields: Array<{
      type: string;
      placeholder: string;
      rows?: number;
    }>;
    submitButton: string;
  };
  logoSection: {
    description: string;
  };
  callCenter: {
    title: string;
    contacts: Contact[];
    email: {
      label: string;
      value: string;
    };
  };
  location: {
    title: string;
    addresses: string[];
    socialMedia: {
      label: string;
      icons: IconKey[];
    };
  };
  company: {
    title: string;
    links: string[];
  };
  services: {
    title: string;
    links: string[];
  };
}

export interface FooterContent {
  headings: string[];
  description: string;
  gradientIndex: number;
  gradientWordCount: number;
}
