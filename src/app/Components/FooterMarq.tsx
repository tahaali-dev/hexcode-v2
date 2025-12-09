import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const FooterLogo = "/footerlogo.svg";
import styled from "@emotion/styled";
import { StyledImage } from "./Containers";

export const FooterMarquee: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterMarqueeWrapper>
      <Marquee
        speed={isMobile ? 25 : 60}
        direction="left"
        gradient={false}
        pauseOnHover
        loop={0}
      >
        {[...Array(5)].map((_, idx) => (
          <div className="logo-holder" key={idx}>
            <StyledImage src={FooterLogo} alt="logo" width={280} height={34} />
          </div>
        ))}
      </Marquee>
    </FooterMarqueeWrapper>
  );
};

const FooterMarqueeWrapper = styled.div`
  background: var(--clr-primary);
  width: 100%;
  padding: 16px 0;
  border-radius: 0 0 16px 16px;

  .logo-holder {
    margin-right: 42px;
  }
`;
