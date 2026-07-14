import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[900px] h-[550px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}

        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.cover}
            alt={project.title}
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>

        {/* BACK */}

        <div
          className="absolute inset-0 w-full h-full bg-[#9E1F1F] px-8 py-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* PROJECT TITLE */}

          <h2
            className="text-[52px] leading-none text-white mb-10"
            style={{
              fontFamily:
                "'Big Shoulders Stencil Display', sans-serif",
              fontWeight: 800,
              textShadow: "4px 5px 0px rgba(0,0,0,0.45)",
            }}
          >
            {project.title}
          </h2>

          {/* DETAILS */}

          <div className="grid grid-cols-3 gap-5">
            {/* PROBLEM + SOLUTION */}

            <ProjectSection title="Problem + Solution">
              <p>{project.problem}</p>

              <p className="mt-3">
                {project.solution}
              </p>
            </ProjectSection>

            {/* FEATURES */}

            <ProjectSection title="Features">
              {project.features.map((feature) => (
                <p key={feature}>• {feature}</p>
              ))}
            </ProjectSection>

            {/* OUTCOMES */}

            <ProjectSection title="Outcomes">
              {project.learnings.map((learning) => (
                <p key={learning}>• {learning}</p>
              ))}
            </ProjectSection>
          </div>

          {/* LINKS */}

          <div
            className="
              absolute
              left-8
              right-8
              bottom-4.5
              h-[60px]
              bg-[#F3E9D7]
              flex
              items-center
              px-6
            "
          >
            <h3
              className="mr-15 text-[26px]"
              style={{
                fontFamily: "'Fjalla One', sans-serif",
              }}
            >
              Links
            </h3>

            <div
              className="flex items-center gap-8 text-[15px]"
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-bold underline"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-bold underline"
                >
                  Live Demo ↗
                </a>
              )}
            </div>

            <p
              className="ml-auto text-[12px] opacity-60"
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Status: In Development
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectSection({ title, children }) {
  return (
    <div
      className="
        h-[335px]
        bg-[#F3E9D7]
        px-5
        py-3
      "
    >
      <h3
        className="text-[26px] mb-6"
        style={{
          fontFamily: "'Fjalla One', sans-serif",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      <div
        className="text-[15px] leading-[1.7]"
        style={{
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ProjectCard;