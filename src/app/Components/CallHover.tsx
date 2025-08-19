"use client"
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { StyledImage } from "./Containers";
const BookCallIcon = "/icons/bookacall.svg";

const CallHover = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent >= 0.03) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper visible={show}>
      <CallIconBtn
        onClick={() =>
          window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")
        }
      >
        <StyledImage src={BookCallIcon} alt="Book a call" width={28} height={28} />
      </CallIconBtn>
    </Wrapper>
  );
};

export default CallHover;

interface WrapperProps {
  visible: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;

  @media (max-width: 768px) {
    position: fixed;
    right: 10px;
    bottom: 80px;
    z-index: 10;
    width: 52px;
    height: 52px;
    border-radius: 100%;
    background: var(--Brand-red-red-500, #EE232A);
    justify-content: center;
    align-items: center;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);

    opacity: ${(props) => (props.visible ? 1 : 0)};
    pointer-events: ${(props) => (props.visible ? "auto" : "none")};
    transition: opacity 0.3s ease-in-out;
  }
`;

const CallIconBtn = styled.button`
  box-shadow: 0 6px 12px -3px rgba(24, 16, 16, 0.12);
  border: none;
  background: transparent;
  cursor: pointer;
display:none;


      @media (max-width: 768px) {
          display: flex;
      }


`;
