import BackButton from "../../components/BackButton";

import gridPaper from "../../assets/about/grid-paper.jpg";
import profile from "../../assets/about/profile.png";
import polaroid from "../../assets/about/polaroid.png";
import tape from "../../assets/about/tape.png";

import cpp from "../../assets/tech/cplusplus.svg";
import css from "../../assets/tech/css.svg";
import figma from "../../assets/tech/figma.svg";
import git from "../../assets/tech/git.svg";
import github from "../../assets/tech/github.svg";
import html from "../../assets/tech/html5.svg";
import javascript from "../../assets/tech/javascript.svg";
import linux from "../../assets/tech/linux.svg";
import mongodb from "../../assets/tech/mongodb.svg";
import mysql from "../../assets/tech/mysql.svg";
import python from "../../assets/tech/python.svg";
import react from "../../assets/tech/react.svg";
import tailwind from "../../assets/tech/tailwindcss.svg";

function About({ onBack }) {
  const techStack = [
    { icon: cpp, name: "C++" },
    { icon: html, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: javascript, name: "JavaScript" },
    { icon: react, name: "React" },

    { icon: tailwind, name: "Tailwind CSS" },
    { icon: python, name: "Python" },
    { icon: mysql, name: "MySQL" },
    { icon: mongodb, name: "MongoDB" },
    { icon: git, name: "Git" },

    { icon: github, name: "GitHub" },
    { icon: figma, name: "Figma" },
    { icon: linux, name: "Linux" },
  ];
  return (
    <div
      className="min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(${gridPaper})`,
        backgroundSize: "600px",
      }}
    >
      <BackButton onClick={onBack} />

      <div className="max-w-7xl mx-auto px-24 py-20 flex justify-between items-start">

        {/* LEFT */}

        <div className="relative w-[420px]">

          <img
            src={tape}
            alt=""
            draggable={false}
            className="
    absolute
    top-[-45px]
    left-[-40px]
    w-[250px]
    rotate-[-30deg]
    z-20
  "
          />

          <img
            src={polaroid}
            alt=""
            className="w-full relative z-10"
            draggable={false}
          />

          <img
            src={profile}
            alt=""
            className="
              absolute
              left-[48px]
              top-[60px]
              w-[305px]
              rounded-md
              z-0
            "
            draggable={false}
          />

        </div>

        {/* RIGHT */}

        <div className="w-[700px]">

          <h1
            className="
              text-[60px]
              text-[#BE1E2D]
              font-serif
              leading-none
              mb-5
            "
          >
            About Me
          </h1>

          <p className="text-[20px] leading-10 mb-10">
            Hi, I'm Niharika Chawla, a Computer Science student driven by
            curiosity and a passion for building meaningful technology. I enjoy
            exploring different areas of computer science, from software
            development and algorithms to artificial intelligence and system
            design, while continuously learning, creating, and solving
            real-world problems.
          </p>

          {/* INFORMATION */}

          <div className="space-y-10">

            <div className="grid grid-cols-[220px_1fr]">

              <h2 className="font-bold text-xl">
                Currently Working On
              </h2>

              <div className="space-y-1 text-lg">
                <p>Data Structures & Algorithms</p>
                <p>Artificial Intelligence & Machine Learning</p>
                <p>UI/UX Design & Prototyping</p>
                <p>Building Projects</p>
              </div>

            </div>

            <div className="grid grid-cols-[220px_1fr]">

              <h2 className="font-bold text-xl">
                Tech Stack
              </h2>

              <div className="grid grid-cols-5 gap-5">

                {techStack.map((tech, index) => (

                  <div
                    key={index}
                    className="relative group"
                  >

                    <div
                      className="
            w-14
            h-14
            rounded-xl
            bg-white/60
            border
            border-[#D8D2C5]
            shadow-sm
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        draggable={false}
                        className="
              w-8
              h-8
              object-contain
            "
                      />
                    </div>

                    {/* Tooltip */}

                    <div
                      className="
            absolute
            bottom-[72px]
            left-1/2
            -translate-x-1/2
            px-3
            py-1
            rounded-lg
            bg-[#2C2C2C]
            text-white
            text-xs
            whitespace-nowrap
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-200
            pointer-events-none
            z-50
          "
                    >
                      {tech.name}
                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="grid grid-cols-[220px_1fr]">

              <h2 className="font-bold text-xl">
                Beyond Code
              </h2>

              <p className="text-lg leading-8">
                Beyond code, I'm passionate about thoughtful
                design, continuous learning, and creating
                experiences that are as enjoyable to use as
                they are to build.
              </p>

            </div>

            <div className="grid grid-cols-[220px_1fr]">

              <h2 className="font-bold text-xl">
                Reach Me
              </h2>

              <div className="space-y-2 text-lg">

                <p>
                  Phone Number :{" "}
                  <a
                    className="font-bold"
                  >
                    +91 9569866699
                  </a>
                </p>

                <p>
                  Email :{" "}
                  <a
                    className="font-bold"
                  >
                    chawlaniharika23@gmail.com
                  </a>
                </p>

                <p>
                  LinkedIn :{" "}
                  <a
                    href="https://www.linkedin.com/in/niharika-chawla-6a773a331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    linkedin.com/in
                  </a>
                </p>

                <p>
                  GitHub :{" "}
                  <a
                    href="https://github.com/chawlaniharika23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    github.com/chawlaniharika23
                  </a>
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;