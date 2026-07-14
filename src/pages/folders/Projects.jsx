import BackButton from "../../components/BackButton";
import ProjectCard from "../../components/ProjectCard";

import { projects } from "../../data/projects";

import gridPaper from "../../assets/about/grid-paper.jpg";

function Projects({ onBack }) {
  return (
    <div
      className="relative min-h-screen overflow-y-auto bg-repeat"
      style={{
        backgroundImage: `url(${gridPaper})`,
        backgroundSize: "450px",
      }}
    >
      {/* BACK BUTTON */}

      <div className="fixed top-8 left-8 z-50">
        <BackButton onClick={onBack} />
      </div>

      {/* PAGE CONTENT */}

      <div className="flex flex-col items-center px-10 py-16">
        {/* TITLE */}

        <h1
          className="
    text-[120px]
    leading-none
    text-[#C51F2F]
    mb-16
  "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
          }}
        >
          Projects
        </h1>

        {/* PROJECT LIST */}

        <div className="flex w-full flex-col items-center gap-28">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-start"
            >
              {/* PROJECT TITLE */}

              <h2
                className="
    text-[35px]
    leading-none
    text-[#C51F2F]
    mb-8
  "
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                }}
              >
                {project.title}
              </h2>

              {/* PROJECT CARD */}

              <div
                className="
          relative
          p-8
          bg-[#F5EFE3]
          border
          border-[#D7CFC1]
          rounded-[4px]
          shadow-[0_20px_50px_rgba(0,0,0,0.20)]
        "
              >
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SPACE */}

        <div className="h-24" />
      </div>
    </div>
  );
}

export default Projects;