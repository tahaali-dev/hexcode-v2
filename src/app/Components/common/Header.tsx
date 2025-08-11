"use client"
import styled from "@emotion/styled";
import { PrimaryBtn } from "../Buttons";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashedContainer } from "../Containers";
import ContactForm from "../ContactModal";
import { useHashScroll } from "@/app/Hooks/useHashScroll";
import { useAnchorNavigation } from "@/app/Hooks/useAnchorNavigation";
import { useHideOnScroll } from "@/app/Hooks/useHideOnScroll";
import Image from "next/image";

//ats
const Logo = "/Logo.svg";
const ProjectsIcon = "/icons/navIconActive1.svg";
const AboutIcon = "/icons/navIconActive2.svg";
const ServicesIcon = "/icons/navIconActive3.svg";


const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const {
    activeHash,
    formVisible,
    setFormVisible
  } = useAnchorNavigation();

  useHashScroll();
  useHideOnScroll(headerRef);

  return (
    <>
      <HeaderSticky ref={headerRef}>
        <DashedContainer leftBottom rightBottom>
          <NavBar>
            <LeftNav>
              <Link className="d-flex g-xl logo" href="/">
                <Image src={Logo} alt="hexcode-logo" width={170} height={24} />
              </Link>
            </LeftNav>


            <CenterNav>
              <NavItem active={activeHash === "#projects" || pathname.includes("/work")} className="m-none nav-item">
                <Image src={ProjectsIcon} alt="projects-icon" width={24} height={24} />
                <Link href="/work">Projects</Link>
              </NavItem>

              <NavItem active={activeHash === "#services" || pathname.includes("/our-services")} className="m-none nav-item">
                <Image src={ServicesIcon} alt="services-icon" width={24} height={24} />
                <Link href="/our-services">Services</Link>
              </NavItem>

              <NavItem active={activeHash === "#about" || pathname.includes("/about-us")} className="m-none nav-item">
                <Image src={AboutIcon} alt="about-icon" width={24} height={24} />
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


const HeaderSticky = styled.section`
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--background-color);
  will-change: transform;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const LeftNav = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  .logo {
    margin-right: 10px;
  }
`;

const CenterNav = styled.div`
display:flex;
align-items:center;
gap:24px;
`

interface NavItemProps {
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

  a,p {
    position: relative;
    text-decoration: none;
    color: #181010;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    transition: color 0.3s ease;
   font-weight: ${({ active }) => (active ? "500" : "300")};
   color: ${({ active }) => (active ? "#EE232A" : "#181010")};

    /* Highlight background effect */
    &::before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(200, 13, 19, 0.15); /* soft red tint */
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease, opacity 0.3s ease;
      border-radius: 4px;
      z-index: -1;
    }
  }

  &:hover {
    img {
      filter: grayscale(0%);
      transform: translateY(-1px) scale(1.06);
      // box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    a {
      color: #C80D13;

      &::before {
        transform: scaleX(1);
      }
    }
  }
`;