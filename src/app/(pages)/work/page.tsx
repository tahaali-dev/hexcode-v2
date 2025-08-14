import { Metadata } from "next";
import WorkPageClient from "@/app/Components/project/WorkPageClient";

export const metadata: Metadata = {
 title: "Our Work & Projects | Hexcode",
 description: "Explore our portfolio of innovative projects and creative solutions. From web development to digital transformation, see how we bring ideas to life.",
 keywords: "portfolio, projects, web development, digital solutions, creative work, case studies",
 openGraph: {
  title: "Our Work & Projects | Hexcode",
  description: "Explore our portfolio of innovative projects and creative solutions. From web development to digital transformation, see how we bring ideas to life.",
  type: "website",
  url: "/work",
 },
 twitter: {
  card: "summary_large_image",
  title: "Our Work & Projects | Hexcode",
  description: "Explore our portfolio of innovative projects and creative solutions.",
 },
};

const page = () => {
 return <WorkPageClient />;
};

export default page;