"use client"
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DashedContainer } from "../Containers";
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {
  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <video
          src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/Volt+Money+Music+V2+(1)_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>
    </DashedContainer>
  );
};

export default VideoPlayer;


const Wrapper = styled.div`
  position: relative;
  padding: 0 !important;
  z-index: 0;

  video{
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
