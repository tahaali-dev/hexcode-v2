"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { DyTitleH1, Dpara } from "@/app/Components/TypSetting";
import { testimonials } from "../../Static/testimonials";
import { useEffect } from "react";
import { DashedContainer } from "@/app/Components/Containers";

const bgImg = "/img2.webp";

const imageList = [
  {
    src: "/companies/hexaclimate.svg",
    width: 88,
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
    <>
      {/* TWO COLUMN LAYOUT */}
      <DashedContainer showLines={true} leftBottom rightBottom>
        <WrapperDemo>
          <div className="inner">
            <div className="top-cont">
              <DyTitleH1
                fontSize={{ base: "56px", md: "48px", sm: "32px" }}
                lineHeight={{ base: "64px", md: "56px", sm: "40px" }}
                fontWeight={700}
                textTransform="uppercase"
                color="#000"
                textAlign="left"
                className="prime-animated"
              >
                BOOK A CALL
              </DyTitleH1>

              <Dpara
                fontSize="18px"
                lineHeight="26px"
                fontWeight="300"
                color="#000"
                className="mw-85"
              >
                Your go-to solution for web and mobile apps, like many founders,
                startups, and agencies do.
              </Dpara>
            </div>

            {/* BOTTOM GROUP - Logos and Testimonial */}
            <div className="bottom-group">
              <div className="logo-section">
                <Dpara
                  fontSize="16px"
                  lineHeight="24px"
                  fontWeight="400"
                  color="#000"
                  className="text-uppercase"
                  textAlign={{ base: "center", md: "center", sm: "center" }}
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
                          className={`logo-img ${hoveredIndex === index ? "active" : ""
                            }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

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
          </div>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/shabbir-hexcode/30min"
            style={{}}
          ></div>


          <div className="top-cont-mobile">
            <DyTitleH1
              fontSize={{ base: "56px", md: "48px", sm: "32px" }}
              lineHeight={{ base: "64px", md: "56px", sm: "40px" }}
              fontWeight={700}
              textTransform="uppercase"
              color="#000"
              textAlign="left"
              className="prime-animated"
            >
              BOOK A CALL
            </DyTitleH1>

            <Dpara
              fontSize="18px"
              lineHeight="26px"
              fontWeight="300"
              color="#000"
              className="mw-85"
              textAlign="center"
            >
              Your go-to solution for web and mobile apps, like many founders,
              startups, and agencies do.
            </Dpara>
          </div>

        </WrapperDemo>



      </DashedContainer>
    </>
  );
};

export default Page;

/* -----------------------------------------------------------
   STYLES
----------------------------------------------------------- */

const WrapperDemo = styled.div`
 /* ---------------------------------------------------------
   GENERAL WRAPPER
--------------------------------------------------------- */
width: 100%;
display: flex;
justify-content: center;
gap:48px;
// background:red;
padding:48px;



/* ---------------------------------------------------------
   MAIN TWO-COLUMN LAYOUT
--------------------------------------------------------- */

.top-cont-mobile{
  display: none;
}

/* LEFT SIDE */
.inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* TOP CONTENT - HEADING */
.top-cont {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* BOTTOM GROUP - Logos and Testimonial */
.bottom-group {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* LOGO SECTION */
.logo-section {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content:center;
  flex-wrap: wrap;
  gap: 24px 28px;
}

.logo-img {
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
  padding: 24px;
  border-radius: 12px;
  color: #000;
box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

/* WHITE VERTICAL LINE */
.testimonial::before {
  content: "";
  position: absolute;
  left: 0;
  top: 20px;
  width: 4px;
  height: calc(65% - 40px);
  background: #fff;
  border-radius: 2px;
}

.image {
  border-radius: 10%;
}

.text-block {
  font-size: 18px;
  line-height: 28px;
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

/* ---------------------------------------------------------
   CALENDLY WIDGET - FULL HEIGHT
--------------------------------------------------------- */
.calendly-inline-widget {
  flex-shrink: 0;
  width: 540px;
  height: 830px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px dashed #8f8f8f33;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

/* ---------------------------------------------------------
   RESPONSIVE BREAKPOINTS
--------------------------------------------------------- */
@media (max-width: 1100px) {
    gap: 40px;
    padding: 40px;

  .inner {
    max-width: 450px;
  }

  .calendly-inline-widget {
    width: 420px;
  }
}

@media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  
  .top-cont-mobile{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .inner {
    width: 100%;
    max-width: 600px;
    align-items: center;
    text-align: center;
  }

  .top-cont {
    display: none;
  }

  .logo-section {
    align-items: center;
  }

  .logo-container {
    justify-content: center;
    gap: 20px 28px;
  }

  .testimonial {
    padding-left: 50px;
    text-align: left;
  }

  .testimonial::before {
    left: 24px;
  }

  .calendly-inline-widget {
    width: 100%;
    max-width: 500px;
    height: 700px !important;
  }
}

@media (max-width: 480px) {
    padding: 24px;

  .inner {
    gap: 30px;
  }

  .logo-container {
    gap: 14px 18px;
  }

  .testimonial {
    padding-left: 30px;
  }

  .testimonial::before {
    left: 18px;
  }

  .brand {
    width: 80px;
    display:none;
  }

  .calendly-inline-widget {
    min-height: unset;
    height: 700px !important;
    border-radius: 12px;
  }
}

`;