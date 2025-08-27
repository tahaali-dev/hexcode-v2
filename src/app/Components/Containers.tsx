"use client"
import styled from "@emotion/styled";
import Image from "next/image";
const GreyHex = "/icons/greyHex.svg";

//  Dashed Container --------------------------------
export const DashedContainer = ({
  leftBottom,
  rightBottom,
  children,
}: {
  leftTop?: boolean;
  leftBottom?: boolean;
  rightTop?: boolean;
  rightBottom?: boolean;
  children: any;
}) => {
  return (
    <Container>
      <div className="child">
        {children}

        {/* {leftBottom && (
          <StyledImage
            className="hex-left-bottom"
            src={GreyHex}
            width={24}
            height={24}
            alt="Hex Left Bottom"
          />
        )} */}

        {/* {rightBottom && (
          <StyledImage
            className="hex-right-bottom"
            src={GreyHex}
            width={24}
            height={24}
            alt="Hex Right Bottom"
          />
        )} */}
      </div>
    </Container>
  );
};

export const Container = styled.section`
  display: flex;
  justify-content: center;
  // background-color: var(--clr-light);
  // background-color: #fff;
  background-color: transparent;
  // border-bottom: 1px dashed #d3d3d3;

.child{
   position: relative;
    // border-left: 1px dashed #d3d3d3;
    // border-right: 1px dashed #d3d3d3;
    width: 1240px;

  .hex-left-bottom {
    position: absolute;
    bottom: -12px;
    left: -12px;
    z-index: 1;
  }

  .hex-right-bottom {
    position: absolute;
    bottom: -12px;
    right: -12px;
    z-index: 1;
  }
  }

    @media (max-width: 1240px) {
    .child {
      max-width: 94vw;
    }
    }

`;


// Styled Image component ----------------
export const StyledImage = styled(Image) <{
  width?: number;
  height?: number;
}>`
  display: block;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
 object-fit: cover;
`;

// Empty Container --------------------------------
const EmptyContainer = ({ height }: { height: string }) => {
  return (
    <DashedContainer
      leftBottom={true}
      rightBottom={true}
    >
      <EmptyWrapper height={height}></EmptyWrapper>
    </DashedContainer>
  );
};

export default EmptyContainer;

//styles --
const EmptyWrapper = styled.div<{
  height: string;
}>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100%")};

  @media (max-width: 768px) {
    height: 42px;
  }
`;
