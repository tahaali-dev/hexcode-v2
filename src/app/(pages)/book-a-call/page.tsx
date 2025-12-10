"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { DyTitleH1, Dpara } from "@/app/Components/TypSetting";
import { testimonials } from "../../Static/testimonials";
import { useEffect } from "react";

const bgImg = "/img2.webp";

const imageList = [
  {
    src: "/companies/hexaclimate.svg",
    width: 108,
    height: 36,
    category: "Energy & Sustainability",
  },
  {
    src: "/companies/fuel-cycle.svg",
    width: 108,
    height: 18,
    category: "SAAS",
  },
  { src: "/companies/haven.svg", width: 108, height: 30, category: "Fintech" },
  { src: "/companies/30-sund.svg", width: 108, height: 36, category: "Travel" },
  { src: "/companies/MPL.svg", width: 68, height: 36, category: "Gaming" },
  { src: "/companies/delve.svg", width: 108, height: 36, category: "AI" },
  {
    src: "/companies/Brighterway (1).svg",
    width: 108,
    height: 31,
    category: "Healthcare",
  },
  {
    src: "/companies/scalix (1).svg",
    width: 108,
    height: 28,
    category: "Marketing Services",
  },
];

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

  const normalize = (value: string) => value.trim().toLowerCase();
  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name &&
      normalize(testimonial.name) === normalize("Michael Brod")
  );

  const t = filteredTestimonials[0];

  const hoveredCategories =
    hoveredIndex !== null
      ? getCategorySet(imageList[hoveredIndex].category)
      : null;

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
          fontSize={{ base: "64px", md: "48px", sm: "32px" }}
          lineHeight={{ base: "74px", md: "56px", sm: "40px" }}
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
          fontWeight="300"
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
                      className={`logo-img ${
                        hoveredIndex === index ? "active" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
         

          {/* ⭐ TESTIMONIAL SECTION ⭐ */}
            
          <div className="testimonial">
     
            <p className="text-block">{t.text}</p>

            <div className="author">
              <img src={t.image} alt={t.name} width={60} height={60} className="image" />

              <div className="identity">
                <p className="name">{t.name}</p>
                <p className="role">{t.title}</p>
              </div>

              <img
                className="brand"
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
          style={{}}
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
 /* ---------------------------------------------------------
   GENERAL WRAPPER
--------------------------------------------------------- */
width: 100%;
min-height: 100vh;
padding: 20px 0 120px 0;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
margin-top: -76px;
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
  background: rgba(0, 0, 0, 0.45);
  z-index: 5;
}

/* Content above overlay */
> * {
  position: relative;
  z-index: 5;
}

/* ---------------------------------------------------------
   TOP CONTENT (BOOK A CALL)
--------------------------------------------------------- */
.top-cont {
  width: 40%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 120px;
  margin-bottom: 60px;
}

@media (max-width: 900px) {
  .top-cont {
    width: 70%;
    margin-top: 70px;
  }
}

@media (max-width: 480px) {
  .top-cont {
    width: 90%;
    margin-top: 45px;
  }
}

/* ---------------------------------------------------------
   MAIN TWO-COLUMN LAYOUT
--------------------------------------------------------- */
.main {
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-top: 50px;
  margin-bottom: -85px;
  height: 525px;
}

/* LEFT SIDE */
.inner {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* ---------------------------------------------------------
   BREAKPOINT → STACK BELOW 900px
--------------------------------------------------------- */
@media (max-width: 900px) {
  .main {
    flex-direction: column-reverse; /* Calendly goes ABOVE */
    align-items: center;
    gap: 40px;
    height: auto;
    margin-top: 40px;
  }

  .inner {
    width: 100%;
    margin-bottom: 20px;
  }

  .calendly-inline-widget {
    width: 90% !important;
    height: 800px !important;
  }
}

@media (max-width: 480px) {
  .inner {
    width: 100%;
  }

  .calendly-inline-widget {
    height: 900px !important;


  }
}

/* ---------------------------------------------------------
   LOGO SECTION
--------------------------------------------------------- */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px 60px;
  margin-top: 15px;
}

@media (max-width: 900px) {
  .logo-container {
    gap: 20px 28px;
  }
}

@media (max-width: 480px) {
  .logo-container {
    gap: 14px 18px;
  }
}

.logo-img {
  filter: brightness(0) invert(1);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.logo-item.blurred .logo-img {
  opacity: 0.25;
}

/* ---------------------------------------------------------
   TESTIMONIAL BOX
--------------------------------------------------------- */
.testimonial {
  position: relative;
  padding: 20px 24px;
  margin-top: 120px;
  border-radius: 12px;
  color: #fff;
  margin-left: 50px;
}

/* WHITE VERTICAL LINE */
.testimonial::before {
  content: "";
  position: absolute;
  left: 16px;
  top: 20px;
  width: 4px;
  height: calc(65% - 40px);
  background: #fff;
 
}

@media (max-width: 900px) {
  .testimonial {
    margin-left: 0;
    padding-left: 50px;
  }

  .testimonial::before {
    left: 24px;
    height: calc(65% - 32px);
  }
}

@media (max-width: 480px) {
  .testimonial {
    padding-left: 40px;
  }

  .testimonial::before {
    left: 18px;
  }
}

.image {
  border-radius: 10%;
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
  margin-top: 20px;
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

@media (max-width: 480px) {
  .brand {
    width: 80px;
  }
}

/* ---------------------------------------------------------
   CALENDLY WIDGET
--------------------------------------------------------- */
.calendly-inline-widget {
  width: 40%;
  height: 525px !important;
  border-radius: 18px;
  overflow: hidden;

  box-shadow: 
    0 10px 25px rgba(0,0,0,0.18),
    0 20px 50px rgba(0,0,0,0.35);
}

@media (max-width: 900px) {
  .calendly-inline-widget {
    width: 80%;
    height: 820px !important;
  }
}

@media (max-width: 480px) {
  .calendly-inline-widget {
    height: 900px !important;
    width: 80%;
    border-radius: 12px;
  }
}

`;
