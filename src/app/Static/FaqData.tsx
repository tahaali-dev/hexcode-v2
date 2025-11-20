import { type ReactNode } from 'react';

export interface FaqItem {
 title: string;
 content: ReactNode;
}

export const faqData: FaqItem[] = [
 {
  title: "What services do you offer as a design agency?",
  content: (
   <p className="px-lg pb-lg color-02">
    We offer a range of design services, including website design,
    mobile app design, UX/UI design, product strategy, branding, and
    custom graphic design. Our goal is to create exceptional digital
    experiences that align with your brand and engage your audience.
   </p>
  ),
 },
 {
  title: "How much does a design project cost?",
  content: (
   <p className="px-lg pb-lg color-02">
    The cost of a design project depends on its scope and complexity. We
    offer fixed pricing or hourly rates based on your specific needs.
    Contact us for a free consultation and quote tailored to your project.
   </p>
  ),
 },
 {
  title: "What is your design process?",
  content: (
   <p className="px-lg pb-lg color-02">
    Our process includes discovery, research, wireframing, design
    development, feedback loops, and final delivery. We work closely with
    you to understand your needs and goals, ensuring the final design
    reflects your vision and enhances user experience.
   </p>
  ),
 },
 {
  title: "How do you ensure the designs are user-friendly?",
  content: (
   <p className="px-lg pb-lg color-02">
    We prioritize user experience (UX) in every design. Our team conducts
    research, testing, and usability studies to ensure your design is
    intuitive, accessible, and optimized for your audience’s needs.
   </p>
  ),
 },
 {
  title: "How do I communicate with your team during the project?",
  content: (
   <p className="px-lg pb-lg color-02">
    We make communication easy through tools like Slack, email, and
    project management platforms. You’ll receive regular updates and have
    direct access to our team for feedback and collaboration.
   </p>
  ),
 },
 {
  title: "Do you offer ongoing design support after the project is completed?",
  content: (
   <p className="px-lg pb-lg color-02">
    Absolutely! We offer ongoing support, including updates, revisions,
    and maintenance, to ensure your digital product stays current and
    continues to perform at its best.
   </p>
  ),
 },
 {
  title: "How do I start a design project with your agency?",
  content: (
   <p className="px-lg pb-lg color-02">
    Starting is easy! Reach out to us via our contact page or schedule a
    free consultation. We’ll discuss your project, goals, and timeline,
    and begin crafting a custom solution for your business.
   </p>
  ),
 },
 {
  title: "Why should I choose your design agency?",
  content: (
   <p className="px-lg pb-lg color-02">
    We combine creativity with strategy to deliver designs that drive
    results. Our team is dedicated to understanding your goals and
    crafting designs that not only look great but also perform well,
    helping you connect with your audience and grow your business.
   </p>
  ),
 },
];
