import { PageData } from "@/app/interfaces/CareerDetailPage";
import Career from "../../../public/assets/career/careerM.png";
import SideImage from "../../../public/assets/CaseStudy/2ndCardbg.jpg.png";

// Data for the page
export const careerDetails: PageData = {
  banner: {
    image: Career,
    title: "Careers",
    description: "Powerful AI solutions tailored to transform your business",
  },
  rows: [
    {
      button1: "Remote",
      button2: "Full Time",
      col1Heading: "Design Lead",
      col2Heading: "Lead UI/UX Designer",
      col2Text:
        "We are looking for an experienced design lead to join our team.",
    },
    {
      button1: "Hybrid",
      button2: "Part Time",
      col1Heading: "Developer",
      col2Heading: "Frontend Developer",
      col2Text: "Build modern web applications with React and Next.js.",
    },
  ],
  footer: {
    headings: ["We are always ready to help you and answer your questions"],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    gradientIndex: 0,
    gradientWordCount: 2,
  },
  responsibilities: [
    "Char aruana archerfish bichir sand dab; chimaera glowlight danio humuhumunukunukuapua'a platyfish zebra bullhead shark Reef triggerfish?",
    "Largemouth bass alewife cichlid ladyfish lizardfish, Bombay duck Reef triggerfish, threadsail goldfish guitarfish",
    "Devil ray lake whitefish Pacific trout waryfish Celebes rainbowfish, temperate bass. Triggerfish milkfish sandroller frigate mackerel; topminnow razorfish clingfish pikehead sand goby rivuline climbing gourami golden loach alooh collared carpetshark.",
    "Striped bass yellowtail kingfish angler catfish angelfish longjaw mudsucker, codlet Ragfish Cherubfish. Ruffe weever tilefish wallago Cornish Spaktailed Bream Old World rivuline chubsucker Oriental loach. Indian mul char spotted dogfish.",
  ],
  qualifications: [
    "Stock",
    "Competitive Salaries",
    "Quarterly employee travel coupon",
    "Paid time off",
    "Medical, dental, & vision insurance",
    "Life insurance and disability benefits",
    "Fitness Discounts",
    "401K with matching",
    "Flexible Spending Accounts",
    "Apple Equipment",
    "Commuter Subsidies",
    "Community Involvement (4 hours per month to give back to the community)",
    "Company sponsored tech talks and happy hours",
  ],
  jobDescription: [
    "Conducting cutting-edge research in AI, developing new algorithms, and pushing the boundaries of AI capabilities. Eagle ray burma danio trumpeter, wrymouth, tiger barb cornetfish tenuis, platyfish Cornish Spaktailed Bream stream catfish bluefish, pearl perch. Sand goby sand eel tailor temperate perch shark capelin muskellunge panga dragon goby.",
    "Sand stargazer flagtail swallower swallower long-finned char dory bamboo shark yellowmargin triggerfish beaked salmon Black angelfish ropefish paperbone. Rivuline, sabertooth toadfish brook lamprey horsefish southern Dolly Varden barbeled dragonfish morwong, glassfish northern squawfish sardine. Wormfish temperate bass basslet–Shingle Fish thornyhead, elephantnose fish bream, “common tunny.”",
  ],
  sideCard: {
    image: SideImage,
    heading: "AI Strategy & Consulting",
    content: "Provide expert guidance on developing an AI strategy",
  },
  jobInfo: {
    type: "Full time",
    level: "Senior",
    salary: "250K month",
  },
};
