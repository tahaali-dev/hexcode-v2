"use client"
import styled from '@emotion/styled'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const ProjectsIcon = "/icons/navIconActive1.svg";
const AboutIcon = "/icons/navIconActive2.svg";
const ServicesIcon = "/icons/navIconActive3.svg";
const HomeIcon = "/icons/navIconActive5.svg";
import { useAnchorNavigation } from '../Hooks/useAnchorNavigation';

const MobileNav = () => {
  const pathname = usePathname();

  const {
    activeHash
  } = useAnchorNavigation();

  return (
    <Wrapper>
      <Link href="/" passHref>
        <NavItem active={activeHash === "#projects" || pathname === "/"} className="nav-item">
          <img src={HomeIcon} alt="home-icon" />
          <p>Home</p>
        </NavItem>
      </Link>

      <Link href="/work" passHref>
        <NavItem active={activeHash === "#projects" || pathname.includes("/work")} className="nav-item">
          <img src={ProjectsIcon} alt="projects-icon" />
          <p>Projects</p>
        </NavItem>
      </Link>

      <Link href="/our-services" passHref>
        <NavItem active={activeHash === "#services" || pathname.includes("/our-services")} className="nav-item">
          <img src={ServicesIcon} alt="services-icon" />
          <p>Services</p>
        </NavItem>
      </Link>

      <Link href="/about-us" passHref>
        <NavItem active={activeHash === "#about" || pathname.includes("/about-us")} className="nav-item">
          <img src={AboutIcon} alt="about-icon" />
          <p>About</p>
        </NavItem>
      </Link>
    </Wrapper >
  )
}

export default MobileNav


const Wrapper = styled.div`
  display: none; /* Hidden by default */


  @media (max-width: 768px) {
    display: flex; /* Show only on mobile */
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    background-color: var(--clr-light);
    justify-content: space-between;
    padding: 8px 28px;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);

a{
  text-decoration: none;
}
  }
`;



interface NavItemProps {
  active?: boolean;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  flex-direction:column;
  gap: 8px;
  cursor: pointer;
  position: relative;
  padding: 4px 0;

  img {
    filter: ${({ active }) => (active ? "grayscale(0%)" : "grayscale(100%)")};
    transition: all 0.3s ease;
  }

  p {
    position: relative;
    text-decoration: none;
    color: #181010;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    font-weight: ${({ active }) => (active ? "500" : "300")};
    color: ${({ active }) => (active ? "#EE232A" : "#181010")};
  }

  &:hover {
    img {
      filter: grayscale(0%);
      transform: translateY(-1px) scale(1.06);
    }

    p {
      color: #C80D13;
    }
  }
`;
