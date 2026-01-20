
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import './css/colors.css';
import './css/layouts.css';
import './css/spacing.css';
import './css/typography.css';
import './css/utils.css';

import Header from "./Components/common/Header";
import Footer from "./Components/common/Footer";
import SmoothScrollProvider from "./Components/common/SmoothScrollProvider";
import localFont from "next/font/local";
import MobileNav from "./Components/MobileNav";
import ClarityProvider from "./Components/Clarity";
import CallHover from "./Components/CallHover";
import PrimeButtonKeyboard from "./Components/PrimeButtonKeyboard";
const museoSans = localFont({
  src: [
    { path: "../../public/fonts/MuseoSans100.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/MuseoSans300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/MuseoSans500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/MuseoSans700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/MuseoSans900.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-museo-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Hexcode – UX/UI for fast growing companies.",
  description: "Hexcode is a creative UI/UX design studio offering intuitive, user-focused interfaces along with full-stack development services. Let's build your next digital product together.",
  openGraph: {
    title: "Hexcode – UX/UI for fast growing companies.",
    description: "Hexcode is a creative UI/UX design studio offering intuitive, user-focused interfaces along with full-stack development services. Let's build your next digital product together.",
    type: "website",
    url: "https://hexcode.design",
    images: [
      {
        url: "https://i.ibb.co/PvC2CS6S/OG.png",
        width: 1200,
        height: 630,
        alt: "Hexcode – UX/UI for fast growing companies.",
      },
    ],
  },
  other: {
    'font-display': 'swap',
  },
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={museoSans.variable}>
      <body className={museoSans.className}>
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <ClarityProvider />
          </Suspense>
          <Header />
          <PrimeButtonKeyboard />
          {children}
          <Footer />
          <MobileNav />
          <CallHover />
          {modal}
        </SmoothScrollProvider>
      </body>
    </html >
  );
}
