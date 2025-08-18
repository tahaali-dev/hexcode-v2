"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    clarity?: ClarityFn;
    __clarityInjected?: boolean;
  }
}

interface ClarityFn {
  (...args: any[]): void;
  q?: any[];
}

const CLARITY_ID = "sets60dn4v";

const ClarityProvider: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ensure Clarity script is loaded only once
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__clarityInjected) return;
    window.__clarityInjected = true;

    // Polyfill window.clarity as a queue until script loads
    if (typeof window.clarity !== "function") {
      const clarityQueue: any[] = [];
      const clarityStub: ClarityFn = function (...args: any[]) {
        clarityQueue.push(args);
      };
      clarityStub.q = clarityQueue;
      window.clarity = clarityStub;
    }

    // Insert Clarity script
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    script.onload = () => {
      // After script loads, flush the queue if any
      if (
        typeof window.clarity === "function" &&
        Array.isArray((window.clarity as any).q)
      ) {
        const queued = (window.clarity as any).q;
        delete (window.clarity as any).q;
        queued.forEach((args: any[]) => {
          try {
            window.clarity!(...args);
          } catch (e) {
            // ignore
          }
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  // Track pageview only after Clarity is loaded
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.clarity === "function"
    ) {
      try {
        window.clarity("trackPageview");
      } catch (e) {
        // ignore
      }
    }
  }, [pathname, searchParams]);

  return null;
};

export default ClarityProvider;
