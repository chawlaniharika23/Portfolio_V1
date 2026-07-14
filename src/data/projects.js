import dnaThrift from "../assets/projects/dna/dna-thrift.png";
import portfolioCover from "../assets/projects/portfolio/portfolio-cover.png";

export const projects = [
    {
        id: 1,
        title: "DNA Campus Thrift",
        cover: dnaThrift,

        features: [
            "Campus-only marketplace",
            "Clothing listings",
            "Image uploads",
            "Search and filtering",
            "Buyer-seller interaction",
        ],

        problem:
            "Students lack a focused campus platform for buying and selling affordable pre-loved clothing.",

        solution:
            "DNA Campus Thrift creates a college-exclusive marketplace where students can list and discover items.",

        techStack: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
        ],

        learnings: [
            "Full-stack architecture",
            "API design",
            "Database modelling",
            "Reusable React components",
            "UI/UX prototyping",
        ],

        github: "https://github.com/chawlaniharika23",
        demo: "",
    },

    {
        id: 2,
        title: "Portfolio",
        cover: portfolioCover,
      
        problem:
          "Traditional developer portfolios often feel static and repetitive, making it difficult to express personality while presenting technical work.",
      
        solution:
          "Portfolio reimagines a personal portfolio as an interactive desktop-inspired experience with folders, animations, and project interactions.",
      
        features: [
          "Interactive desktop interface",
          "Animated folder navigation",
          "Project card flip interactions",
          "Embedded resume viewer",
          "Skills and certifications showcase",
          "Responsive UI components",
        ],
      
        learnings: [
          "React component architecture",
          "State-based UI interactions",
          "Framer Motion animations",
          "Reusable component design",
          "UI/UX prototyping",
          "Figma to React implementation",
        ],
      
        github: "https://github.com/chawlaniharika23/Portfolio_V1",
      
        demo: "",
      
        status: "In Development",
      }
];