"use client";
import VoltCs from "@/app/Components/casestudy/Volt";
import Footer from "@/app/Components/common/Footer";
import EmptyContainer from "@/app/Components/Containers";
import { useBottomSheetAnimation } from "@/app/Hooks/useBottomSheetAnimation";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { usePathname } from "next/navigation";
import SensytechCs from "@/app/Components/casestudy/Sensyrtech";
import StarbriteCs from "@/app/Components/casestudy/Starbright";

const CloseRd = "/icons/closeRound.svg";

const ANIMATION_DURATION_0 = 0.3;
const ANIMATION_DURATION = 0.4;

const ModalClient = () => {
 const router = useRouter();
 const pathname = usePathname();
 const sheetRef = useRef<HTMLDivElement | null>(null);
 const wrapperRef = useRef<HTMLDivElement | null>(null);
 const scrollableRef = useRef<HTMLDivElement | null>(null);

 useBottomSheetAnimation({ wrapperRef, sheetRef, scrollableRef });

 const handleClose = () => {
  gsap.to(sheetRef.current, {
   y: '100%',
   duration: ANIMATION_DURATION,
   ease: 'power3.in',
   onComplete: () => {
    gsap.to(wrapperRef.current, {
     opacity: 0,
     duration: ANIMATION_DURATION_0,
     ease: 'power2.in',
     onComplete: () => {
      router.back()
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
   background: hsla(0, 0%, 0%, 0.6);
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
