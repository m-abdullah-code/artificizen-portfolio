import Ball from "../../../public/assets/ProjectCard/ball.png";
import Icon from "../../../public/assets/ProjectCard/Icon.png";
import Image from "../../../public/assets/ProjectCard/image1.jpg";
import Icon1 from "../../../public/assets/ProjectCard/Icon2.png";
import Background from "../../../public/assets/ProjectCard/backgroundImage.png";
import Cover2 from "../../../public/assets/ProjectCard/upeerImage.jpg.png";
import Icon3 from "../../../public/assets/ProjectCard/Icon3.png";
import Upper3 from "../../../public/assets/ProjectCard/upper2.png";
import Background3 from "../../../public/assets/ProjectCard/background3.png";
import { ProjectData } from "@/app/interfaces/ProjectCard";


export const projectsData: ProjectData[] = [
  {
    title: "Agentic AI Marketplace",
    description:
      "A futuristic platform where AI agents autonomously buy, sell, and collaborate—automating entire business processes with zero human input. The next-gen SaaS? It's already here.",
    bgImage: Ball,
    overlayImage: Image,
    logoImage: Icon,
  },
  {
    title: "AI Cold Calling+Appointment Booking",
    description:
      "An autonomous voice AI that not only makes cold calls with real-time personalization but also books meetings directly into calendars. Scales your outreach and fills your pipeline hands-free.",
    bgImage: Background,
    overlayImage: Cover2,
    logoImage: Icon1,
  },
  {
    title: "Real Human Avatar for Therapy",
    description:
      "We built a life-like digital therapist that listens, responds, and remembers. Ideal for mental health startups looking to offer empathetic, always-available support at scale.",
    bgImage: Background3,
    overlayImage: Upper3,
    logoImage: Icon3,
    backgroundColor: "bg-black",
  },
];