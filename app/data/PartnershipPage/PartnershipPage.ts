import { BYCPageData } from "@/app/interfaces/PartnershipPage";
import BycImage from "../../../public/assets/Byc/byc main.png";
import Left1 from "../../../public/assets/Byc/byc1.png";
import Group from "../../../public/assets/Services/Group.png";
import WhiteIcon from "../../../public/assets/Icons/WLeftIcon.png";
import Byc2 from "../../../public/assets/Byc/byc2.jpg";

export const bycData: BYCPageData = {
  banner: {
    image: BycImage,
    title: "Bring Your Client (BYC)",
    description: "Your network is your net worth",
  },
  cardWithContent: {
    topText: "/ About BYC /",
    heading: ["Refer Once. Earn Forever"],
    content: [
      "Your network is your net worth. At Artificizen, we believe that when one of us wins, all of us should win. That's why we created BYC – Bring Your Client, a program designed for dreamers, doers, and connectors. Whether you are a freelancer, founder, tech enthusiast, or someone who simply believes in our work—this is your chance to earn, grow, and thrive by referring clients to us.",
      "This isn't just another referral program. It's a lifetime partnership model that transforms your connections into continuous value, creating passive income streams that can last for decades. We're building something different: a community of forward-thinkers who believe in the power of AI to transform businesses—and in the power of people to transform each other’s futures.",
      "Enjoy a collaborative environment, flexible hours, and great benefits.",
    ],
    image: Left1,
    imagePosition: "left",
    lineIndex: 0,
    wordCount: 2,
  },
  howItWorks: {
    topText: "/ How it Works /",
    heading: "Refer & Earn",
    subheading: "Turn Connections into Lifetime Income",
    cards: [
      {
        number: "01",
        title: "Refer Your Client",
        desc: "Fill out our simple referral form or reach out directly to our partnership team with basic information about the potential client and project. We respect your relationships and handle every introduction with care.",
      },
      {
        number: "02",
        title: "We Qualify and Connect",
        desc: "Our team engages with the lead, verifies project feasibility, and schedules a comprehensive discovery call. We keep you updated every step of the way, maintaining complete transparency throughout the process.",
      },
      {
        number: "03",
        title: "We Deliver the Project",
        desc: "Once the client signs, we begin the journey—turning their idea into reality through our expert development, design, and AI implementation processes. You can track progress through your partner dashboard.",
      },
      {
        number: "04",
        title: "You Earn 8%",
        desc: "When the project is delivered and payment is received, you earn an 8% commission on the total project value. For a typical $50,000 project, that's $4,000 directly into your account—for a single introduction. No question is asked",
      },
      {
        number: "05",
        title: "Income 3% Forever",
        desc: "Once the client signs, we begin the journey—turning their idea into reality through our expert development, design, and AI implementation processes. You can track progress through your partner dashboard.",
      },
    ],
  },
  uniqueSection: {
    image: Byc2,
    heading: "Why Makes",
    subheading: "BYC Unique?",
    content:
      "Partnering with us opens the door to a long-term revenue stream and expert project handling. Here’s why you should join:",
    points: [
      {
        number: 1,
        title: "Zero hassle,",
        content:
          "You refer, we build, you earn. Our streamlined process handles everything from qualification to payment.",
      },
      {
        number: 2,
        title: "Transparent tracking",
        content:
          "through your own partner dashboard with real-time updates and projections.",
      },
      {
        number: 3,
        title: "Lifetime earnings",
        content:
          "without any further work from your side—true passive income from a single connection.",
      },
      {
        number: 4,
        title: "Diverse project options —",
        content:
          "AI solutions, SaaS development, chatbots, automation, voice technology, and more.",
      },
      {
        number: 5,
        title: "You don't need to be a techie —",
        content:
          "just someone with valuable connections and an eye for opportunity.",
      },
    ],
  },
  dashboardSection: {
    heading: "Your BYC",
    subheading: "Dashboard Includes:",
    points: [
      { content: "Client referral status with stage-by-stage tracking" },
      { content: "Project progress timeline and milestone updates" },
      { content: "Total commissions earned across all referrals" },
      {
        content: "Future reward projections based on client retention patterns",
      },
      { content: "Withdraw/payment history with multiple payout options" },
      {
        content:
          "Analytics & performance breakdown to optimize your referral strategy",
      },
    ],
  },
  loyaltyBonusSection: {
    heading: "Year Loyalty Bonus",
    subheading: "The Legacy Reward",
    content:
      "We believe in long-term relationships. If the client you refer works with us continuously for 10 years, you unlock our Legacy Partner Package, which includes:",
    points: [
      {
        content:
          "A one-time lump sum bonus equivalent to 10% of the client's average annual spend",
      },
      { content: "Extra 5% reward on the 10-year anniversary invoice" },
      { content: "A paid travel voucher for vacations" },
      {
        content:
          "Special contribution toward your retirement/future savings plan",
      },
      { content: "Invitation to join our Partner Board" },
      {
        content:
          "Premium access to beta programs, launches & private investment opportunities",
      },
    ],
  },
  whoShouldJoinSection: {
    heading: "Who Should",
    subheading: "Join BYC?",
    points: [
      {
        title: "Tech consultants",
        content:
          "looking to expand their service offerings without adding overheads",
      },
      {
        title: "Startup mentors",
        content: "who encounter founders needing technical implementation",
      },
      {
        title: "Freelancers",
        content:
          "who want to offer enterprise-grade solutions to their clients",
      },
      {
        title: "Marketing agencies",
        content:
          "seeking reliable technical partners for their clients' AI needs",
      },
      {
        title: "Community leaders",
        content: "who regularly connect with innovation-focused businessess",
      },
      {
        title: "Passionate individuals",
        content: "who believe in the power of AI to transform busine",
      },
    ],
  },
  storySection: {
    title: "Real Partner",
    subtitle: "Stories",
    starColor: "#FFD700",
    cards: [
      {
        heading: "Sarah K., Marketing Consultant",
        stars: 5,
        content:
          "What started as a single client referral has generated over $12,000 in passive income for me over the past three years. The Artificizen team handled everything perfectly, and I have now referred five more clients into the program.",
      },
      {
        heading: "Michael T., Startup Mentor",
        stars: 5,
        content:
          "As a non-technical founder advisor, I often encounter startups needing AI implementation. The BYC program allows me to provide genuine value through warm introductions while creating a meaningful income stream. Their dashboard makes tracking everything effortless.",
      },
      {
        heading: "David L., Healthcare Consultant",
        stars: 5,
        content:
          "I referred a healthcare client who needed an AI solution for patient scheduling. Three years later, they've expanded to five additional projects with Artificizen. My initial introduction has turned into over $67,000 in commissions, with monthly payments still coming in. The best part? I haven't had to do anything beyond that first email.",
      },
      {
        heading: "Fatima A. – Operations Manager",
        stars: 5,
        content:
          "As a freelance UX designer, I often couldn't handle the AI development needs of my enterprise clients. Instead of turning them away, I now refer them to Artificizen. Not only do I earn substantial commissions, but my clients see me as more valuable for making the connection. It's truly a win-win-win arrangement.",
      },
    ],
  },
  actionSection: {
    heading: "Refer Once.",
    subheading: "Earn Forever. Leave a Legacy",
    content:
      "Join the BYC Partner Program today and start building a future where your connections reward you for life. Lets grow together—because we rise by lifting others.",
    buttons: [
      { text: "Apply Now", icon: WhiteIcon, alt: "User", link: "/form" },
      {
        text: "Schedule a Partnership Call",
        icon: WhiteIcon,
        alt: "Like",
        link: "/contact-us",
      },
      {
        text: "Download Partner Guide",
        icon: WhiteIcon,
        alt: "Share",
        link: "",
      },
    ],
    decorImage: Group,
  },
  footer: {
    headings: [
      "Have an Idea?",
      "A Challenge?",
      "Or Just Curious",
      "About What AI Can",
      "Do For Your Business?",
    ],
    description:
      "Let’s collaborate to bring your AI vision to life with speed and precision.",
    gradientIndex: 0,
    gradientWordCount: 0,
  },
};
