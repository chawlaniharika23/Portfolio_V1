import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[900px] h-[550px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
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
          className="
            absolute
            inset-0
            w-full
            h-full
            bg-[#F5EFE3]
            p-12
            overflow-y-auto
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
        

          <div className="space-y-5 text-lg">
            <Detail label="About" text={project.about} />

            <Detail label="Problem" text={project.problem} />

            <Detail label="Solution" text={project.solution} />

            <Detail label="Tech Stack" text={project.techStack} />

            <Detail label="Features" text={project.features} />

            <Detail label="My Role" text={project.role} />

            <Detail label="Status" text={project.status} />
          </div>

          <div className="flex gap-5 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  px-6
                  py-3
                  bg-[#EF3D3D]
                  text-white
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  px-6
                  py-3
                  border-2
                  border-[#EF3D3D]
                  text-[#EF3D3D]
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Detail({ label, text }) {
  return (
    <div className="grid grid-cols-[150px_1fr] gap-5">
      <h3 className="font-bold text-[#EF3D3D]">
        • {label}
      </h3>

      <p>{text}</p>
    </div>
  );
}

export default ProjectCard;