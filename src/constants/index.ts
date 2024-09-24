import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  php,
  charity,
  gideon,
  allbills,
  dreycode,
  dreycodeWhite,
  cloud,
  classroom,
  speaker,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Custom AI Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: speaker,
  },
  {
    title: "Become a Development",
    icon: classroom,
  },
  {
    title: "Cloud Services",
    icon: cloud,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences: TExperience[] = [
  {
    title: "Launch and Initial Client Successes",
    companyName: "Milestone",
    icon: dreycodeWhite,
    iconBg: "#383E56",
    date: "since - April 2020",
    points: [
      "Objective: Successfully launch Dreycode Technologies and secure the first set of clients.",
    "Details: Establish a strong online presence with a professional website and social media channels. Acquire the first five clients, delivering projects that showcase the team’s capabilities in mobile app development, website design, PC applications, and digital marketing.",
    "Outcome: Building a portfolio of successful projects and earning client testimonials to establish credibility and trust in the market."
    ],
  },
  {
    title: "Team Expansion and Skill Diversification",
    companyName: "Milestone",
    icon: dreycode,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Objective: Expand the team to enhance service offerings and handle more complex projects.",
      "Details: Hire additional developers, designers, and digital marketers with specialized skills to diversify the company’s capabilities. Invest in team training and professional development to stay ahead of industry trends and technologies.",
      "Outcome: Increased capacity to take on larger and more varied projects, leading to greater revenue and a stronger market presence."
    ],
  },
  {
    title: "Develop a Flagship Product or Service",
    companyName: "Milestone",
    icon: dreycodeWhite,
    iconBg: "#383E56",
    date: "",
    points: [
      "Objective: Create and launch a flagship product or service that differentiates Dreycode Technologies in the marketplace.",
      "Details: Identify a gap in the market or a recurring client need that can be addressed by developing a unique software solution, tool, or platform. Launch the product with a targeted marketing campaign to generate interest and attract new clients.",
      "Outcome: Establishing Dreycode Technologies as an innovator in the industry, leading to new revenue streams and enhanced brand recognition."
    ],
  },
  {
    title: "Expansion into New Markets and Strategic Partnerships",
    companyName: "Milestone",
    icon: dreycode,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Objective: Expand the company’s reach by entering new markets and forming strategic partnerships.",
      "Details: Explore opportunities to enter new geographic regions or industries. Develop partnerships with other tech companies, marketing firms, or industry associations to expand the company’s service offerings and client base.",
      "Outcome: Increased market share, access to new client segments, and strengthened competitive advantage through strategic alliances and collaborations."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Drey proved me wrong.",
    name: "Andrew",
    designation: "CEO",
    company: "Charity West Palm Inc.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Drey does.",
    name: "Olasunkanmi",
    designation: "CEO",
    company: "House Of Thobs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Drey optimized our website, our traffic increased by 35%. We can't thank them enough!",
    name: "Oyindamola",
    designation: "CEO",
    company: "Delight luxurious",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "GiDeon AI",
    description:
      "Web-based smart AI platform that allows users to ask anything and gives response based on data it has been trained with, ability to also provide solutions to complex problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gideon,
    sourceCodeLink: "https://github.com/oladamilare10/gideonAIApp",
  },
  {
    name: "Charity West Palm",
    description:
      "Web application that enables users to donate to the specific charity organization, the web application has both 2 payment options which is stripe, and crypto payment options available",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: charity,
    sourceCodeLink: "https://github.com/oladamilare10/charityWestPalmApp",
  },
  {
    name: "All Bills Arena Wallet app",
    description:
      "A comprehensive Crypto trading app with which allows users to trade their cryptocurrency to cash and purchase airtime, pay utility bills, and also purchase gift cards in one place.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: allbills,
    sourceCodeLink: "https://github.com/oladamilare10/flutterwavePayment",
  },
];

export { services, technologies, experiences, testimonials, projects };
