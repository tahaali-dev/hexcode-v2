"use client"
import styled from "@emotion/styled";
import { PrimaryBtn } from "../Buttons";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashedContainer } from "../Containers";
import ContactForm from "../ContactModal";
import { useAnchorNavigation } from "@/app/Hooks/useAnchorNavigation";
import { useHideOnScroll } from "@/app/Hooks/useHideOnScroll";
import Image from "next/image";

// ats
const Logo = "/Logo.svg";
const ProjectsIcon = "/icons/navIconActive1.svg";
const AboutIcon = "/icons/navIconActive2.svg";
const ServicesIcon = "/icons/navIconActive3.svg";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/"; // ← route check

  const headerRef = useRef<HTMLDivElement>(null);

  const { activeHash, formVisible, setFormVisible } = useAnchorNavigation();
  const { scrolledPastHero } = useHideOnScroll(headerRef);

  return (
    <>
      <HeaderSticky
        ref={headerRef}
        scrolled={scrolledPastHero}
      >
        <DashedContainer showLines={false}>
          <NavBar>
            <LeftNav $isHome={isHome} $scrolled={scrolledPastHero}>
              <Link className="d-flex g-xl logo" href="/">
                <Image src={Logo} alt="hexcode-logo" width={170} height={24} />
              </Link>
            </LeftNav>

            <CenterNav>
              <NavItem
                active={activeHash === "#projects" || pathname.includes("/work")}
                className="m-none nav-item"
                $isHome={isHome}
                $scrolled={scrolledPastHero}
              >
                {/* <Image src={ProjectsIcon} alt="projects-icon" width={24} height={24} /> */}
                <Link href="/work">Projects</Link>
              </NavItem>

              <NavItem
                active={activeHash === "#services" || pathname.includes("/our-services")}
                className="m-none nav-item"
                $isHome={isHome}
                $scrolled={scrolledPastHero}
              >
                {/* <Image src={ServicesIcon} alt="services-icon" width={24} height={24} /> */}
                <Link href="/our-services">Services</Link>
              </NavItem>

              <NavItem
                active={activeHash === "#about" || pathname.includes("/about-us")}
                className="m-none nav-item"
                $isHome={isHome}
                $scrolled={scrolledPastHero}
              >
                {/* <Image src={AboutIcon} alt="about-icon" width={24} height={24} /> */}
                <Link href="/about-us">About</Link>
              </NavItem>
            </CenterNav>

            <div className="m-none">
              <PrimaryBtn
                padding="12px 16px"
                fontSize="16px"
                margin="0"
                borderRadius="8px"
                btnContent="Let's Talk"
                onClick={() => setFormVisible(true)}
              />
            </div>
          </NavBar>
        </DashedContainer>
      </HeaderSticky>

      <ContactForm show={formVisible} onClose={() => setFormVisible(false)} />
    </>
  );
};

export default Header;

interface HeaderStickyProps {
  scrolled?: boolean;
}

const HeaderSticky = styled.section<HeaderStickyProps>`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  transition: background-color 0.3s ease;
  will-change: transform;
  border-bottom: 1px solid #8F8F8F33;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

// props for route-aware + scroll-aware styles
interface RouteAware {
  $isHome?: boolean;
  $scrolled?: boolean;
}

const LeftNav = styled.div<RouteAware>`
  display: flex;
  gap: 32px;
  align-items: center;

  .logo {
    margin-right: 10px;

    filter: ${({ $isHome, $scrolled }) => {
    if ($isHome && !$scrolled) {
      return "brightness(0) invert(1)"; // white on home when top
    }
    return "none"; // normal everywhere else
  }};
    transition: filter 0.3s ease;
  }
`;

const CenterNav = styled.div`
  display:flex;
  align-items:center;
  gap:24px;
`

interface NavItemProps extends RouteAware {
  active?: boolean;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  padding: 4px 0;

  img {
    filter: ${({ active }) => (active ? "grayscale(0%)" : "grayscale(100%)")};
    transition: all 0.3s ease;
  }

  a, p {
    position: relative;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    font-weight: ${({ active }) => (active ? "500" : "300")};

    /* Color rule:
       - When scrolled (white header): dark text (#181010)
       - Else if on home route "/": white
       - Else: dark (#181010)
    */
    color: ${({ $scrolled, $isHome, active }) =>
    $scrolled
      ? "#181010"
      : $isHome
        ? active
          ? "#EE232A"
          : "#fff"
        : active
          ? "#EE232A"
          : "#181010"};
  }

  &:hover {
    img {
      filter: grayscale(0%);
      transform: translateY(-1px) scale(1.06);
    }

    a {
      color: ${({ $isHome, $scrolled }) =>
    $isHome && !$scrolled ? "#f2f2f2" : "#C80D13"};  /* 👈 dynamic hover color */
      
      &::before {
        transform: scaleX(1);
      }
    }
  }
`;
