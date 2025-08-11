// desktop Hex ---------
const VisualIdentityHex = "/serImgs/VI.png";
const WebAndProduct = "/serImgs/W&P.png";
const CreativeDev = "/serImgs/CD.png";
const ConsultingHexImg = "/serImgs/CON.png";

// Mobile Hex ---------
const VisualIdentityMobile = "/serImgs/VIMob.png";
const WebAndProductMobile = "/serImgs/W&PMob.png";
const CreativeDevMobile = "/serImgs/CDMob.png";
const ConsultingMobile = "/serImgs/CONMob.png";

//  icons ------
const VIIcon = "/icons/visualIdentityIcon.svg";
const WPIcon = "/icons/websiteandproduct.svg";
const CDIcon = "/icons/creativedev.svg";
const ConIcon = "/icons/consulting.svg";

//  about
const Team1 = "/aboutImgs/Frame 2018780416.webp";
const Team2 = "/aboutImgs/Frame 20187804161.webp";
const Team3 = "/aboutImgs/Frame 20187804164.webp";
const ThinkIcon = "icons//think.svg";
const BuilderIcon = "icons//builder.svg";
const LearnerIcon = "/icons/lerner.svg";



export const cardsData = [
  {
    title: "Visual Identity",
    bgcolor: "#81D0FF",
    para1: `This is how your brand looks. Your logo, colors, fonts, and images. All the things that make people recognise you quickly. We help you stay consistent so your brand feels familiar wherever people see it.`,
    tags: [
      "Logo Design",
      "Color and Typography",
      "Brand Style Guide",
      "Marketing Collateral",
      "Social Media Graphics",
      "Packaging Design",
    ],
    image: VisualIdentityHex,
    icon: VIIcon,
    mobileImage: VisualIdentityMobile,
    projects: ["Starbrite Dental", "Volt"],
    testimonial: "Karun Kaushik",
    tagBg: "#0000000D"
  },
  {
    title: "Website & Product",
    bgcolor: "#C3ABFF",
    para1: `We design websites and apps that are easy to use and look good. People should be able to find what they need and enjoy the experience. No clutter, no confusion just simple, clean design that works.`,
    tags: [
      "UX Research",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Design System",
      "Mobile Apps Design",
      "Responsive Design",
      "Website",
    ],
    image: WebAndProduct,
    icon: WPIcon,
    mobileImage: WebAndProductMobile,
    projects: ["Sensyrtech", "Tinker Village"],
    testimonial: "Steve Manz",
    tagBg: "#0000000D"
  },
  {
    title: "Creative Dev",
    bgcolor: "#FBC1D4",
    para1: `This is where your design turns real. We build your site or app, add smooth animations or small interactive touches, and make sure it works well on every screen. What you see in the design comes to life here.`,
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Full-Stack dev",
      "JS & TS",
      "AWS",
      "Strapi",
      "Contentful",
      "E-Commerce",
      "SaaS",
      "No-Code"
    ],
    image: CreativeDev,
    icon: CDIcon,
    mobileImage: CreativeDevMobile,
    projects: ["Install IoT", "ABC Studios"],
    testimonial: "Taher Lokhandwala",
    tagBg: "#0000000D"
  },
  {
    title: "Consulting",
    bgcolor: "#181010",
    para1: `We help make your product or website clearer, easier to use, and better looking. Whether you're starting fresh or improving something existing, we give simple, practical design advice that works.`,
    para2: "",
    image: ConsultingHexImg,
    icon: ConIcon,
    mobileImage: ConsultingMobile,
    projects: ["Starbrite Dental", "Volt"],
    tagBg: "#0000000D"
  },
];


export const aboutCardData = [
  {
    title: "Forward Thinkers",
    bgcolor: "#FED35B",
    para1: `We don’t just focus on what’s needed today. We think a few steps ahead and try to design in a way that’s ready for what’s coming next. It helps us build things that last and stay useful as your product grows.`,
    image: Team1,
    icon: ThinkIcon,
    mobileImage: Team1,
  },
  {
    title: "Zero to One Builders",
    bgcolor: "#C3ABFF",
    para1: `We like starting from scratch. Whether it’s a rough idea or a blank screen, we enjoy turning early thoughts into real products. We work closely with teams to bring their ideas to life, step by step.`,
    image: Team2,
    icon: BuilderIcon,
    mobileImage: Team2,
  },

  {
    title: "Continuous Learners",
    bgcolor: "#81D0FF",
    para1: `We’re always learning. New tools, better ways of working, or simply asking more questions we believe staying curious helps us improve and do better work over time.`,
    image: Team3,
    icon: LearnerIcon,
    mobileImage: Team3,
  },


];
