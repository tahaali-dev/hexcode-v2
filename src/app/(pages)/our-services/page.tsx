import Banner from "@/app/Components/ServicePage/Banner"
import Content from "@/app/Components/ServicePage/Content"
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Our Services | Hexcode",
 description: "Discover Hexcode's full suite of design and digital services. From brand strategy and identity to web and product design, we help startups and businesses build impactful digital experiences.",
 keywords: "services, design, brand strategy, identity, web design, product design, digital solutions, Hexcode",
 openGraph: {
  title: "Our Services | Hexcode",
  description: "Explore the range of services Hexcode offers, including brand strategy, identity, web and product design. Partner with us to elevate your digital presence.",
  type: "website",
  url: "/our-services",
  images: [
   {
    url: "https://i.ibb.co/PvC2CS6S/OG.png",
    width: 1200,
    height: 630,
    alt: "Hexcode – UX/UI for fast growing startups.",
   },
  ],
 },
};

const page = () => {
 return (
  <>
   <Banner />
   <Content />
  </>
 )
}

export default page