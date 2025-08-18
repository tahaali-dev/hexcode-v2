"use client";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import VoltCs from "@/app/Components/casestudy/Volt";
import SensytechCs from "@/app/Components/casestudy/Sensyrtech";
import StarbriteCs from "@/app/Components/casestudy/Starbright";

const Page = () => {
  const pathname = usePathname();

  return (
    <>
      <FullPageWrap>
        {pathname === "/work/volt" && <VoltCs />}
        {pathname === "/work/sensyrtech" && <SensytechCs />}
        {pathname === "/work/starbrite-dental" && <StarbriteCs />}
      </FullPageWrap>
    </>
  );
};

export default Page;

const FullPageWrap = styled.div`
  .red-anchor {
    color: #ee232a;
    text-decoration: none;
    font-weight: 600;
  }

  .top-dashed {
    border-top: 1px dashed #d3d3d3;
  }

  @media (max-width: 768px) {
    .m-col {
      flex-direction: column;
    }

    .align-start-mob {
      align-items: flex-start;
    }
  }
`;
