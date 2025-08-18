"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clarity from "@microsoft/clarity";

const CLARITY_ID = "sets60dn4v";

const ClarityProvider: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Clarity only once
    if (typeof window !== "undefined" && !(window as any).__clarityInjected) {
      clarity.init(CLARITY_ID);
      (window as any).__clarityInjected = true;
    }
  }, []);

  // Track pageview on route change
  useEffect(() => {
    try {
      // Clarity does not have a trackPageview method; use clarity.setTag to track page views if needed
      clarity.setTag("pageview", `${pathname}${searchParams ? "?" + searchParams.toString() : ""}`);
    } catch (e) {
      // ignore
    }
  }, [pathname, searchParams]);

  return null;
};

export default ClarityProvider;
