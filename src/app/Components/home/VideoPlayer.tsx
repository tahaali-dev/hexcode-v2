"use client"
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {

  return (
    <Wrapper>
      <video
        src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/Volt+Money+Music+V2+(1)_1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </Wrapper>
  );
};

export default VideoPlayer;

const Wrapper = styled.div`
  margin-top:64px;
  display:flex;
  justify-content:center;

  video{
    border-radius : 22px;
    width: 1240px;
    background-color: 
    color-mix(in oklab, #fff 20%, transparent);
   border: 1px solid #fff3;
   padding:8px;
  }

    @media (max-width: 768px) {
      margin-top:32px;
      padding:4px;

        video{
         border-radius : 8px;
        }
    }
`;