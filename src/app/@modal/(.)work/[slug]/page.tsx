
"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(24, 16, 16, 0.32);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(24, 16, 16, 0.16);
  padding: 40px 32px;
  max-width: 480px;
  width: 100%;
  position: relative;
  z-index: 100;
  @media (max-width: 600px) {
    padding: 24px 12px;
    max-width: 95vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.15s;
  &:hover {
    background: #f2f2f2;
  }
  font-size: 28px;
  line-height: 1;
  z-index: 101;
`;

const ModalContent = () => {
 const router = useRouter();
 return (
  <Overlay>
   <ModalContainer>
    <CloseButton
     aria-label="Close"
     onClick={() => router.back()}
    >
     Close
    </CloseButton>
    {/* Modal content goes here */}
    <div style={{ textAlign: "center", marginTop: "32px" }}>
     <h2>Work Modal</h2>
     <p>This is the modal content for the /work route.</p>
    </div>
   </ModalContainer>
  </Overlay>
 );
};

export default ModalContent;