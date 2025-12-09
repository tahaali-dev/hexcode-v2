"use client";

import { usePathname } from "next/navigation";
import Footer from "./Components/common/Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide footer on multiple routes
  const noFooterRoutes = ["/book-a-call", "/thank-you"];

  const hideFooter = noFooterRoutes.includes(pathname);

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
