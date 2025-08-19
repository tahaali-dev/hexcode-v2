"use client";
import VoltCs from "@/app/Components/casestudy/Volt";
import Footer from "@/app/Components/common/Footer";
import EmptyContainer from "@/app/Components/Containers";
import { useBottomSheetAnimation } from "@/app/Hooks/useBottomSheetAnimation";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { usePathname } from "next/navigation";
import SensytechCs from "@/app/Components/casestudy/Sensyrtech";
import StarbriteCs from "@/app/Components/casestudy/Starbright";

const CloseRd = "/icons/closeRound.svg";

const ANIMATION_DURATION_0 = 0.2;
const ANIMATION_DURATION = 0.3;

const ModalClient = () => {
   const router = useRouter();
   const pathname = usePathname();
   const sheetRef = useRef<HTMLDivElement | null>(null);
   const wrapperRef = useRef<HTMLDivElement | null>(null);
   const scrollableRef = useRef<HTMLDivElement | null>(null);

   const [isFullWidth, setIsFullWidth] = useState(false);
   useBottomSheetAnimation({
      wrapperRef,
      sheetRef,
      scrollableRef,
      onFullWidthChange: setIsFullWidth,
   });


   const handleClose = () => {
      gsap.to(sheetRef.current, {
         y: '100%',
         duration: ANIMATION_DURATION,
         ease: 'power3.in',
         onComplete: () => {
            gsap.to(wrapperRef.current, {
               background: 'rgba(0,0,0,0)',
               opacity: 0,
               duration: ANIMATION_DURATION_0,
               ease: 'power2.in',
               onComplete: () => {
                  router.back();
               },
            });
         },
      });
   };

   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
         handleClose();
      }
   };

   useEffect(() => {
      const body = document.body;
      body.style.overflow = 'hidden';

      return () => {
         body.style.overflow = '';
      };
   }, []);

   // Handler for Book a Call CTA
   const handleBookCall = () => {
      // You can replace this with your actual booking link
      window.open("https://calendly.com/your-link", "_blank");
   };

   return (
      <PageWrapper ref={wrapperRef} onClick={handleBackdropClick}>
         <BottomSheet ref={sheetRef} onClick={(e) => e.stopPropagation()}>
            <ScrollableContent ref={scrollableRef}>
               <ScrollMarker id="scroll-marker" />
               <SheetContent>

                  <EmptyContainer height="76px" />

                  <CloseBtn onClick={handleClose}>
                     <img src={CloseRd} alt="close-rd" />
                  </CloseBtn>

                  {pathname === "/work/volt" && (
                     <VoltCs />
                  )}

                  {pathname === "/work/sensyrtech" && (
                     <SensytechCs />
                  )}

                  {pathname === "/work/starbrite-dental" && (
                     <StarbriteCs />
                  )}

                  <Footer />

                  {
                     <BookCallFixed isVisible={isFullWidth}>
                        <BookCallButton onClick={handleBookCall}>
                           Book a Call
                        </BookCallButton>
                     </BookCallFixed>
                  }

               </SheetContent>
            </ScrollableContent>
         </BottomSheet>
      </PageWrapper>
   );
};

export default ModalClient;

const PageWrapper = styled.div`
   height: 100vh;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 10;
   `;

const BottomSheet = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: var(--clr-light);
   border-top-left-radius: 16px;
   border-top-right-radius: 16px;
   box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
   z-index: 1000;
   height: 95vh;
   width: 97vw;
   margin: 0 auto;
   transform: translateY(100%);
   overflow: hidden;
   transition: border-radius 0.3s ease;

   .red-anchor{
    color: #ee232a;
   text-decoration: none;
   font-weight: 600;
}

   .top-dashed{
    border - top: 1px dashed #d3d3d3;
}

   `;

const ScrollableContent = styled.div`
   overflow-y: auto;
   height: calc(100% - 0px);
   position: relative;

   /* Hide scrollbar for Webkit-based browsers (Chrome, Safari) */
   &::-webkit-scrollbar {
    display: none;
  }

   /* Hide scrollbar for Firefox */
   scrollbar-width: none;

   /* Hide scrollbar for IE and Edge */
   -ms-overflow-style: none;
   `;

const ScrollMarker = styled.div`
   height: 1px;
   `;

const SheetContent = styled.div`
   position:relative;

   @media (max-width: 768px) {
    .m - col{
    flex - direction:column;
    }

   .align-start-mob{
    align - items: flex-start;
    }

    }
   `;

const CloseBtn = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   position:fixed;
   top:16px;
   right:16px;
   z-index:20;

   transition: background 0.3s ease, transform 0.2s ease;

   &:hover {
    transform: scale(1.05);
  }

   &:active {
    transform: scale(0.95);
  }

   @media (max-width: 768px) {
    top: 4px;
   right:28px;

   img{
    width: 32px;
   height: 32px;
      }
      }
   `;

// Fixed Book a Call CTA at the bottom inside the modal
const BookCallFixed = styled.div<{ isVisible: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0; 
  display: flex;
  justify-content: center;
  z-index: 1200;
  pointer-events: none;
  transition: transform 0.3s ease, opacity 0.3s ease;

  transform: ${({ isVisible }) =>
      isVisible ? "translateY(-24px)" : "translateY(100%)"};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;


const BookCallButton = styled.button`
   pointer-events: auto;
   background: #ee232a;
   color: #fff;
   border: none;
   border-radius: 32px;
   padding: 16px 36px;
   font-size: 1.1rem;
   font-weight: 700;
   box-shadow: 0 4px 16px rgba(238, 35, 42, 0.15);
   cursor: pointer;
   transition: background 0.2s, transform 0.15s;

   &:hover {
      background: #c91c23;
      transform: translateY(-2px) scale(1.04);
   }

   &:active {
      background: #a3171b;
      transform: scale(0.98);
   }

   @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 1rem;
   }
`;
