"use client";
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from "../Containers";
import { PrimaryBtn } from "../Buttons";
import GradientShades from "../GradientShades";
import useScrollToTop from "@/app/Hooks/useScrollToTop";
import { FooterMarquee } from "../FooterMarq";
const GetInTouchIcon = "/icons/getintouchicon.svg";


const Footer = () => {
  const shades = ["#4A0507", "#881418", "#A50F14", "#C80D13", "#EE232A"];

  const scrollToTop = useScrollToTop();

  return (
    <>
      <DashedContainer
        leftBottom={true}
        rightBottom={true}
      >
        <FooterContainerDesktop className="m-none">
          <div>
            <AnchorLink href="/">
              Possibilities Beyond Limits
            </AnchorLink>

            <ParaLight className="mt-md">
              Let’s make something awesome together
            </ParaLight>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase" >Explore</LightHeading>
            <AnchorLink href="/work">Projects</AnchorLink>
            <AnchorLink href="/our-services">Services</AnchorLink>
            <AnchorLink href="/about-us">About</AnchorLink>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase" >say hello!</LightHeading>
            <AnchorLink href="https://www.instagram.com/teamhexcode/" target="_blank">instagram</AnchorLink>
            <AnchorLink href="https://x.com/teamhexcode" target="_blank">Twitter (X)</AnchorLink>
            <AnchorLink href="https://www.linkedin.com/company/hexcodedesign/posts/?feedView=all" target="_blank">Linkedin</AnchorLink>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase">Got an idea?</LightHeading>

            <GetInTouchWrap className="d-flex align-center g-md">
              <AnchorLink href="https://calendly.com/shabbir-hexcode/30min" target="_blank">Get in touch</AnchorLink>
              <StyledImage
                src={GetInTouchIcon}
                width={32}
                height={32}
                alt="get in touch icon"
              />
            </GetInTouchWrap>
          </div>
        </FooterContainerDesktop>

        <FooterContainerMobile className="d-none">
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">
              What we're good at
            </LightHeading>
            <AnchorLink href="/work">Projects</AnchorLink>
          </div>
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">
              How we deliver
            </LightHeading>
            <AnchorLink href="/our-services">our services</AnchorLink>
          </div>
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">Who we are</LightHeading>
            <AnchorLink href="/about-us">About</AnchorLink>
          </div>

          <div className="w-100 d-flex justify-between mt-xxl ">
            <LightHeading className="text-Uppercase">Say hello</LightHeading>

            <div className="d-flex flex-column g-md align-end">
              <AnchorLink href="https://www.linkedin.com/company/hexcodedesign/posts/?feedView=all" target="_blank">Linkedin</AnchorLink>
              <AnchorLink href="https://www.instagram.com/teamhexcode/" target="_blank">Instagram</AnchorLink>
              <AnchorLink href="https://x.com/teamhexcode" target="_blank">Twitter (X)</AnchorLink>
            </div>
          </div>

          <div className="mt-xxl">
            <LightHeading className="text-Uppercase">got an idea?</LightHeading>
            <div className="mt-sm">
              <PrimaryBtn
                padding="16px"
                fontSize="18px"
                margin="0"
                borderRadius="8px"
                btnContent="get in touch"
                onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
              />
            </div>
          </div>

          <LightHeading className="text-Uppercase mt-sm text-center"
            onClick={scrollToTop}
          >
            BAck to top ⇡
          </LightHeading>
        </FooterContainerMobile>

        <div className="px-xs">
          <GradientShades
            shades={shades}
            margin="0px"
            borderRadius="0px"
            numberOfRows="5"
          />
        </div>

        <div className="px-xs pb-xs">
          <FooterMarquee />
        </div>
      </DashedContainer>

      <DashedContainer
        leftBottom={false}
        rightBottom={false}
      >
        <CopyWriteWrapper className="d-flex align-center justify-between px-lg py-sm">
          <LightCopyText>© 2025 Hexcode. All Rights Reserved.</LightCopyText>

          {/* <div className="d-flex align-center g-lg ">
            <LightCopyText>Terms</LightCopyText>
            <LightCopyText>Privacy</LightCopyText>
          </div> */}
        </CopyWriteWrapper>
      </DashedContainer>
    </>
  );
};

export default Footer;

// Styles -----------------------------------------------------------
const FooterContainerDesktop = styled.div`
  background-color: var(--clr-dark);
  padding: 40px 40px 80px 40px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
  margin: 4px 4px 0px 4px;
`;

const FooterContainerMobile = styled.div`
  background-color: var(--clr-dark);
  padding: 24px 18px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 4px 4px 0px 4px;

  .w-full {
    width: 100%;
  }
`;

const LightHeading = styled.h2`
  color: var(--clr-primary-l2);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    text-transform: ;
  }
`;

const AnchorLink = styled.a`
  color: var(--white-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40 px;
  }
`;

const ParaLight = styled.p`
  color: var(--clr-light3);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`;

const CopyWriteWrapper = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LightCopyText = styled.p`
  color: var(--clr-dark3);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;


const GetInTouchWrap = styled.div`
  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: rotate(30deg);
  }
`;
