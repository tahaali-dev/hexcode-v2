"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { DyTitleH1, Dpara } from "@/app/Components/TypSetting";
import { testimonials } from "../../Static/testimonials"
import { useEffect } from "react";

const bgImg = "/img2.webp";


const imageList = [
  { src: "/companies/hexaclimate.svg", width: 108, height: 36, category: "Energy & Sustainability" },
  { src: "/companies/fuel-cycle.svg", width: 108, height: 18, category: "SAAS" },
  { src: "/companies/haven.svg", width: 108, height: 30, category: "Fintech" },
  { src: "/companies/30-sund.svg", width: 108, height: 36, category: "Travel" },
  { src: "/companies/MPL.svg", width: 68, height: 36, category: "Gaming" },
  { src: "/companies/delve.svg", width: 108, height: 36, category: "AI" },
  { src: "/companies/Brighterway (1).svg", width: 108, height: 31, category: "Healthcare" },
  { src: "/companies/scalix (1).svg", width: 108, height: 28, category: "Marketing Services" },
]

const getCategorySet = (category: string) => {
  return new Set(
    category
      .split(",")
      .map((c) => c.trim().toLowerCase())
      .filter(Boolean)
  );
};

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const normalize = (value: string) => value.trim().toLowerCase()
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.name && normalize(testimonial.name) === normalize("Michael Brod")
  )

  const t = filteredTestimonials[0]


  const hoveredCategories =
    hoveredIndex !== null ? getCategorySet(imageList[hoveredIndex].category) : null;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  return (
    <WrapperDemo>

      <div className="top-cont">
        <DyTitleH1
          fontSize={{ base: "56px", md: "38px", sm: "34px" }}
          lineHeight={{ base: "62px", md: "44px", sm: "42px" }}
          fontWeight={700}
          textTransform="uppercase"
          color="#fff"
          className="mt-md prime-animated"
        >
          BOOK A CALL
        </DyTitleH1>

        <Dpara
          fontSize="18px"
          lineHeight="24px"
          fontWeight="200"
          color="#E0E0E0"
          textAlign="center"
          className="mw-85"
        >
          Your go-to solution for web and mobile apps, like many founders,
          startups, and agencies do.
        </Dpara>
      </div>


      {/* LOGO SECTION */}
      <div className="main">
        <div className="inner">
          <Dpara
            fontSize="18px"
            lineHeight="24px"
            fontWeight="400"
            color="#D6D6D6"
            textAlign="center"
            className="text-uppercase"
          >
            Trusted by 100+ customers, from startup to enterprise
          </Dpara>

          <div className="logo-container">
            {imageList.map((image, index) => {
              const thisCategories = getCategorySet(image.category);

              let isBlurred = false;

              if (hoveredCategories) {
                const hasCommon = [...thisCategories].some((cat) =>
                  hoveredCategories.has(cat)
                );
                isBlurred = !hasCommon;
              }

              return (
                <div
                  key={index}
                  className={`logo-item ${isBlurred ? "blurred" : ""}`}

                >
                  <img
                    src={image.src}

                    width={image.width}
                    height={image.height}
                    className={`logo-img ${hoveredIndex === index ? "active" : ""}`}
                  />
                </div>
              );
            })}
          </div>


          {/* ⭐ TESTIMONIAL SECTION ⭐ */}
          <div className="testimonial">
            <p className="text-block">{t.text}</p>

            <div className="author">
              <img
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
              />

              <div className="identity">
                <p className="name">{t.name}</p>
                <p className="role">{t.title}</p>
              </div>

              <img className="brand"
                src={t.logo.src}
                alt={t.company}
                width={t.logo.width}
                height={t.logo.height}
              />
            </div>
          </div>

        </div>

        {/* ⭐ CALENDLY INLINE EMBED ⭐ */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/shabbir-hexcode/30min"
          style={{ }}
        ></div>
      </div>


    </WrapperDemo>
  );
};

export default Page;

/* -----------------------------------------------------------
   STYLES (unchanged EXCEPT logo color part)
----------------------------------------------------------- */

const WrapperDemo = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 0 120px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:-76px;
  z-index: 0;

  /* BG IMAGE */
  &::after {
      content: "";
    position: absolute;
    opacity: 0.9;
    top: 0;
    inset: 0;
    background-image: url(${bgImg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    transform: scaleX(-1);
    z-index: 1;
  }

  /* DARK OVERLAY */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(6px);
    background: rgba(0,0,0,0.45);
    z-index: 5;
  }

  /* All content above bg */
  > * {
    position: relative;
    z-index: 5;
  }

  /*********************************
      TOP HEADING
  *********************************/
.top-cont {
  margin-left: 20px;
  width: 30%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 80px;
  margin-bottom: 60px;
}

/* Tablet (max-width: 1024px) */
@media (max-width: 1024px) {
  .top-cont {
    width: 50%;
    margin-left: 0;
    margin-top: 60px;
  }
}

/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
  .top-cont {
    width: 70%;
    margin-left: 0;
    margin-top: 50px;
    gap: 12px;
  }
}

/* Small Mobile (max-width: 480px) */
@media (max-width: 480px) {
  .top-cont {
    width: 90%;
    margin-left: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 10px;
  }
}


  /*********************************
      MAIN TWO-COLUMN LAYOUT
  *********************************/
/* =========================
      DESKTOP (DEFAULT)
========================= */
.main {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
  margin-top: 50px;
  flex-direction: row;
  margin-bottom: -85px;
}

.inner {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 60px;
  gap: 30px;
}

/* =========================
      TABLET (max-width: 1024px)
========================= */
@media (max-width: 1024px) {
  .main {
    gap: 50px;
    margin-bottom: -40px;
  }

  .inner {
    width: 55%;
    margin-top: 30px;
    gap: 24px;
  }
}

/* =========================
      SMALL TABLET (max-width: 768px)
========================= */
@media (max-width: 768px) {
  .main {
    flex-direction: column;   /* stack vertically */
    align-items: center;
    gap: 40px;
    margin-bottom: 0;
  }

  /* RIGHT div comes above LEFT div */
  .calendly-inline-widget {
    order: -1;
  }

  .inner {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 22px;
  }
}

/* =========================
      MOBILE (max-width: 480px)
========================= */
@media (max-width: 480px) {
  .main {
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }

  .calendly-inline-widget {
    order: -1;
  }

  .inner {
    width: 100%;
    gap: 18px;
    margin-top: 15px;
    margin-bottom: 30px;
  }
}

/* =========================
      SMALL MOBILE (max-width: 360px)
========================= */
@media (max-width: 360px) {
  .inner {
    gap: 14px;
  }
}



.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 28px 60px; /* row-gap column-gap */
  margin-top: 15px;
}

/* Large Tablet (max-width: 1024px) */
@media (max-width: 1024px) {
  .logo-container {
    gap: 24px 40px;
  }
}

/* Tablet (max-width: 768px) */
@media (max-width: 768px) {
  .logo-container {
    gap: 20px 28px;
    margin-top: 10px;
   
  }
}

/* Mobile (max-width: 480px) */
@media (max-width: 480px) {
  .logo-container {
    gap: 16px 16px; /* tighter spacing for small screens */
    margin-top: 8px;
  }
}

/* Extra Small Mobile (max-width: 360px) */
@media (max-width: 360px) {
  .logo-container {
    gap: 12px;
    margin-top: 5px;
  }
}


  .logo-img {
    filter: brightness(0) invert(1);
    opacity: 1;
    transition: 0.3s ease;
  }

  .logo-item.blurred .logo-img {
    opacity: 0.25;
  }

  /*********************************
      TESTIMONIAL BOX
  *********************************/
 /* ============================
   BASE DESKTOP STYLES
============================ */
.testimonial {
  padding: 24px 28px;
  margin-top: 130px;
  border-radius: 12px;
  color: #fff;
  margin-left: 50px;
}

.text-block {
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 14px;
}

.author {
  display: flex;
  align-items: center;
  gap: 20px;
}

.identity {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.name {
  font-size: 18px;
  font-weight: 600;
}

.role {
  font-size: 13px;
  opacity: 0.8;
}

.brand {
  margin-left: auto;
  width: 110px;
  filter: brightness(0) invert(1);
}

/* ============================
   LARGE TABLET (max-width: 1024px)
============================ */
@media (max-width: 1024px) {
  .testimonial {
    margin-left: 30px;
    padding: 22px 24px;
  }

  .brand {
    width: 95px;
  }
}

/* ============================
   TABLET (max-width: 768px)
============================ */
@media (max-width: 768px) {
  .testimonial {
    margin-left: 0;
    margin-top: 90px;
    padding: 20px 22px;
  }

  .text-block {
    font-size: 16px;
    line-height: 24px;
  }

  .author {
    gap: 14px;
  }

  .name {
    font-size: 16px;
  }

  .role {
    font-size: 12px;
  }

  .brand {
    width: 85px;
  }
}

/* ============================
   MOBILE (max-width: 480px)
============================ */
@media (max-width: 480px) {
  .testimonial {
    margin-top: 60px;
    padding: 16px 18px;
    border-radius: 10px;
  }

  .text-block {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 10px;
  }

  .author {
    flex-direction: row;
    gap: 10px;
  }

  .name {
    font-size: 15px;
  }

  .role {
    font-size: 11px;
  }

  .brand {
    width: 70px;
  }
}

/* ============================
   SMALL MOBILE (max-width: 360px)
============================ */
@media (max-width: 360px) {
  .testimonial {
    padding: 14px 16px;
  }

  .brand {
    width: 60px;
  }
}

  /*********************************
      CALENDLY RIGHT-SIDE CARD
  *********************************/
  .calendly-inline-widget {
    width: 42%;
    height: 700px !important;
    border-radius: 18px;
    overflow: hidden;
    background: white;
    box-shadow:
      0 10px 25px rgba(0,0,0,0.18),
      0 20px 50px rgba(0,0,0,0.35);
  }

  /*********************************
      RESPONSIVE FIXES
  *********************************/
  @media (max-width: 1200px) {
    .main {
      flex-direction: column;
      align-items: center;
    }
    .inner, .calendly-inline-widget {
      width: 100%;
    }
    .calendly-inline-widget {
      height: 760px !important;
    }
  }
`;


