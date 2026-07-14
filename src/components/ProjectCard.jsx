import { useState } from "react";
import { motion } from "framer-motion";

import featuresPaper from "../assets/projects/dna/features-paper.png";
import problemPaper from "../assets/projects/dna/problem-paper.png";
import techPaper from "../assets/projects/dna/tech-paper.png";
import learningsPaper from "../assets/projects/dna/learnings-paper.png";
import linkPaper from "../assets/projects/dna/link-paper.png";

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
                    className="absolute inset-0 w-full h-full overflow-hidden bg-[#9E1F1F]"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    {/* TITLE */}

                    <h2
                        className="
              absolute
              top-[95px]
              left-1/2
              -translate-x-1/2
              z-40
              text-[55px]
              text-white
              whitespace-nowrap
            "
                        style={{
                            fontFamily:
                                "'Big Shoulders Stencil Display', sans-serif",
                            fontWeight: 800,
                            textShadow: "4px 5px 0px rgba(0, 0, 0, 0.45)",
                        }}
                    >
                        {project.title}
                    </h2>

                    {/* FEATURES */}

                    <ScrapSection
                        image={featuresPaper}
                        className="absolute left-[15px] top-[-20px] w-[350px] z-10"
                        title="Features"
                        titleClassName="top-[95px] left-[115px]"
                        contentClassName="top-[135px] left-[70px] w-[245px]"
                    >
                        {project.features.map((feature) => (
                            <p key={feature}>• {feature}</p>
                        ))}
                    </ScrapSection>

                    {/* PROBLEM + SOLUTION */}

                    <ScrapSection
                        image={problemPaper}
                        className="absolute left-[300px] top-[120px] w-[330px] z-30"
                        title="Problem + Solution"
                        titleClassName="top-[72px] left-[55px]"
                        contentClassName="top-[125px] left-[42px] w-[255px]"
                    >
                        <p>{project.problem}</p>

                        <p className="mt-5">{project.solution}</p>
                    </ScrapSection>

                    {/* TECH STACK */}

                    <ScrapSection
                        image={techPaper}
                        className="absolute right-[20px] top-[5px] w-[300px] z-10"
                        title="Tech Stack"
                        titleClassName="top-[70px] left-[95px]"
                        contentClassName="top-[105px] left-[95px] w-[170px]"
                    >
                        {project.techStack.map((tech) => (
                            <p key={tech}>• {tech}</p>
                        ))}
                    </ScrapSection>

                    {/* WHAT I LEARNED */}

                    <ScrapSection
                        image={learningsPaper}
                        className="absolute right-[5px] bottom-[-15px] w-[340px] z-20"
                        title="What I Learned"
                        titleClassName="top-[70px] left-[75px]"
                        contentClassName="top-[115px] left-[70px] w-[230px]"
                    >
                        {project.learnings.map((learning) => (
                            <p key={learning}>• {learning}</p>
                        ))}
                    </ScrapSection>

                    {/* LINKS */}

                    <ScrapSection
                        image={linkPaper}
                        className="absolute left-[10px] bottom-[-20px] w-[350px] z-20"
                        title="Links"
                        titleClassName="top-[75px] left-[145px]"
                        contentClassName="top-[115px] left-[135px]"
                    >
                        <div className="flex flex-col gap-2">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="font-bold underline"
                                >
                                    View GitHub
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
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </ScrapSection>

                    {/* PROJECT STATUS */}

                    <p
                        className="
    absolute
    bottom-[12px]
    right-[350px]
    z-50
    text-[12px]
    text-white/70
    tracking-wide
  "
                        style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 400,
                        }}
                    >
                        Status: In Development
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

function ScrapSection({
    image,
    title,
    children,
    className = "",
    titleClassName = "",
    contentClassName = "",
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className={`
          drop-shadow-[8px_10px_6px_rgba(0,0,0,0.35)]
          ${className}
        `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{
                y: hovered ? -12 : 0,
                scale: hovered ? 1.04 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            style={{
                zIndex: hovered ? 100 : undefined,
            }}
        >
            <img
                src={image}
                alt=""
                draggable={false}
                className="w-full select-none"
            />

            <h3
                className={`
            absolute
            text-[25px]
            text-black
            whitespace-nowrap
            ${titleClassName}
          `}
                style={{
                    fontFamily: "'Fjalla One', sans-serif",
                    fontWeight: 400,
                }}
            >
                {title}
            </h3>

            <div
                className={`
            absolute
            text-[14px]
            leading-[1.65]
            text-left
            text-black
            ${contentClassName}
          `}
                style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

export default ProjectCard;