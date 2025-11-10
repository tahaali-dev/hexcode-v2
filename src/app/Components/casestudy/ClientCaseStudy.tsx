"use client";
import React from "react";
import styled from "@emotion/styled";
import VoltCs from "@/app/Components/casestudy/Volt";
import SensytechCs from "@/app/Components/casestudy/Sensyrtech";
import StarbriteCs from "@/app/Components/casestudy/Starbright";
import InstallIOTCs from "@/app/Components/casestudy/Install-iot";

interface ClientCaseStudyProps {
  slug: string;
}

const ClientCaseStudy: React.FC<ClientCaseStudyProps> = ({ slug }) => {
  let content: React.ReactNode = null;
  if (slug === "volt") content = <VoltCs />;
  else if (slug === "sensyrtech") content = <SensytechCs />;
  else if (slug === "starbrite-dental") content = <StarbriteCs />;
  else if (slug === "install-iot") content = <InstallIOTCs />;

  return <FullPageWrap>{content}</FullPageWrap>;
};

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

export default ClientCaseStudy;


