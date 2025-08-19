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
  description: "Building trust in a new category of credit",
  keywords: ["Volt", "case study", "digital transformation", "Hexcode", "innovation"],
  openGraph: {
   title: "Volt - Case Study | Hexcode",
   description: "Building trust in a new category of credit",
   images: [
    "https://i.ibb.co/PvC2CS6S/OG.png"
   ],
  }
 },
 {
  pathname: "/work/sensyrtech",
  title: "Sensyrtech - Case Study | Hexcode",
  description: "Designing enterprise tool for Asset Tracking",
  keywords: ["Sensyrtech", "case study", "technical expertise", "Hexcode", "project delivery"],
  openGraph: {
   title: "Sensyrtech - Case Study | Hexcode",
   description: "Designing enterprise tool for Asset Tracking",
   images: ["https://i.ibb.co/PvC2CS6S/OG.png"]
  }
 },
 {
  pathname: "/work/starbrite-dental",
  title: "StarBrite - Case Study | Hexcode",
  description: "Brand refresh for a leading dental clinic with trusted, high-quality care",
  keywords: ["Starbrite Dental", "case study", "healthcare technology", "Hexcode", "dental solutions"],
  openGraph: {
   title: "Starbrite Dental - Case Study | Hexcode",
   description: "Brand refresh for a leading dental clinic with trusted, high-quality care",
   images: ["https://i.ibb.co/PvC2CS6S/OG.png"]
  }
 }
];
