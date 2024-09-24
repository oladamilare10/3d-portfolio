type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Dreycode Technology",
    fullName: "Dreycode Technology",
    email: "dreycodetechnology@gmail.com",
  },
  hero: {
    name: "Dreycode Technology",
    p: ["We develop applications tailored for your specific needs."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Welcome to Dreycode Technologies, 
      where innovation meets execution. 
      We are a team of passionate software developers 
      committed to transforming your ideas into reality with 
      precision and creativity. At Dreycode, our expertise 
      spans across mobile app development, website design, 
      PC application creation, and digital marketing. 
      Whether you need a sleek, user-friendly app, a 
      dynamic and engaging website, or a powerful 
      desktop application, our developers have the 
      skills and experience to bring your vision to life.`,
    },
    experience: {
      p: "What We have accomplished so far",
      h2: "Milestones.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Our works",
      h2: "Projects.",
      content: `Following projects showcases Our skills and experience through
    real-world examples of our works with different companies around the world. 
    Each project is briefly described with
    links to code repositories and live demos in it. It reflects our
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
