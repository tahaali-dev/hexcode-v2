import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useAnchorNavigation = (
  offset: number = 74,
  selector: string = ".nav-item a"
) => {
  const pathname = usePathname();
  const router = useRouter();

  const [activeHash, setActiveHash] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a") as HTMLAnchorElement;

    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const hash = href;
    const id = href.slice(1);

    // Prevent default and handle custom nav
    e.preventDefault();

    // If not on homepage, navigate first
    if (pathname !== "/") {
      setActiveHash(hash);
      setMenuOpen(false);
      router.push(`/${hash}`);
      return;
    }

    // If on homepage, scroll smoothly
    const el = document.getElementById(id);
    if (el) {
      setActiveHash(hash);
      setMenuOpen(false);
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`Element #${id} not found`);
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(selector);
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, [pathname, selector, router]);

  return {
    activeHash,
    menuOpen,
    setMenuOpen,
    formVisible,
    setFormVisible,
  };
};
