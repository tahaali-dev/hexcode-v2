import { Metadata } from "next";
import WorkPageClient from "@/app/Components/project/WorkPageClient";

export const metadata: Metadata = {
 title: "Our Work | Hexcode",
 description: "Explore our portfolio of innovative projects and creative solutions. From web development to digital transformation, see how we bring ideas to life.",
 keywords: "portfolio, projects, web development, digital solutions, creative work, case studies",
 openGraph: {
  title: "Our Work & Projects | Hexcode",
  description: "Explore our portfolio of innovative projects and creative solutions. From web development to digital transformation, see how we bring ideas to life.",
  type: "website",
  url: "/work",
  images: [
   {
    url: "https://i.ibb.co/PvC2CS6S/OG.png",
    width: 1200,
    height: 630,
    alt: "Hexcode – UX/UI for fast growing companies.",
   },
  ],
 },
};

const page = () => {
 return <WorkPageClient />;
};

export default page;