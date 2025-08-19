export interface WorkMetadata {
 pathname: string;
 title: string;
 description: string;
 keywords: string[];
 openGraph: {
  title: string;
  description: string;
  images: string[];
 };
}

export const workMetadata: WorkMetadata[] = [
 {
  pathname: "/work/volt",
  title: "Volt - Case Study | Hexcode",
  description: "Explore our work with Volt - a comprehensive case study showcasing our expertise in innovative solutions and digital transformation.",
  keywords: ["Volt", "case study", "digital transformation", "Hexcode", "innovation"],
  openGraph: {
   title: "Volt - Case Study | Hexcode",
   description: "Explore our work with Volt - a comprehensive case study showcasing our expertise in innovative solutions and digital transformation.",
   images: ["/projectsBn/volt.jpg"]
  }
 },
 {
  pathname: "/work/sensyrtech",
  title: "Sensyrtech - Case Study | Hexcode",
  description: "Discover our collaboration with Sensyrtech - a detailed case study highlighting our technical expertise and successful project delivery.",
  keywords: ["Sensyrtech", "case study", "technical expertise", "Hexcode", "project delivery"],
  openGraph: {
   title: "Sensyrtech - Case Study | Hexcode",
   description: "Discover our collaboration with Sensyrtech - a detailed case study highlighting our technical expertise and successful project delivery.",
   images: ["/projectsBn/sensyrtech.jpg"]
  }
 },
 {
  pathname: "/work/starbrite-dental",
  title: "Starbrite Dental - Case Study | Hexcode",
  description: "Learn about our work with Starbrite Dental - a comprehensive case study demonstrating our healthcare technology solutions.",
  keywords: ["Starbrite Dental", "case study", "healthcare technology", "Hexcode", "dental solutions"],
  openGraph: {
   title: "Starbrite Dental - Case Study | Hexcode",
   description: "Learn about our work with Starbrite Dental - a comprehensive case study demonstrating our healthcare technology solutions.",
   images: ["/projectsBn/brite.jpg"]
  }
 }
];
