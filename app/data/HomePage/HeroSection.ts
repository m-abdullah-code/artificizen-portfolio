// src/app/data/heroData.ts

export interface HeroCta {
  href: string;
  label: string;
  primary?: boolean;
  style?: string;
}

export interface HeroData {
  titleLines: string[];
  description: string;
  ctas: HeroCta[];
}

export const heroData: HeroData = {
  titleLines: [
    "WE HELP STARTUPS & BUSINESSES",
    "TO LAUNCH POWERFUL AI PRODUCTS",
    "IN DAYS, NOT MONTHS",
  ],
  description:
    "From MVPs to full-scale SaaS platforms, we design, build, and deploy custom AI solutions that are fast, scalable, and built to grow with your business. No bloated teams, no vague timelines. Just powerful, reliable AI products that work from day one.",
  ctas: [
    {
      href: "/",
      label: "Book a free consultation",
      primary: true,
      style: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      href: "/portfolio",
      label: "See Our Work",
      primary: false,
      style:
        "border-2 border-blue-600 text-blue-400 hover:text-white hover:bg-blue-600",
    },
  ],
};
