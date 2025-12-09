"use client";

import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";


const bgImg = "/img2.webp";

const page = () => {
  return (
    <Wrapper>
      <Content>
        <div className="icon"></div>

        <h1 className="title">
          THANK YOU FOR<br />SCHEDULING A CALL
        </h1>

        <p className="subtitle">
          We appreciate your interest and look forward to understanding<br />
          your vision and goals.
        </p>

        <Link href="/" className="home-btn">
          GO TO HOME
        </Link>
      </Content>
    </Wrapper>
  );
};

export default page;

/* -------------------------------------------------------
   STYLING - SAME AS BOOK CALL PAGE BACKGROUND & EFFECT
-------------------------------------------------------- */

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top:-76px;
  z-index: 0;

  /* BACKGROUND IMAGE (FLIPPED LIKE BOOK CALL PAGE) */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
    z-index: 1;
  }

  /* BLUR OVERLAY */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.25);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 0 16px;
  margin-bottom: -80px

  .icon {
    font-size: 64px;
    opacity: 0.9;
  }

  .title {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .subtitle {
    font-size: 18px;
    font-weight: 300;
    max-width: 700px;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .home-btn {
    margin-top: 20px;
    padding: 12px 26px;
    background: #ffff;
    color: #ee232a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
   

  }
`;
