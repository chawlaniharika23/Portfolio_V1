import { motion } from "framer-motion";

function FolderLayer({
  image,
  name,
  title,
  titleClassName = "",
  activeFolder,
  setActiveFolder,
  className = "",
}) {
  return (
    <motion.div
    onClick={() => {
      console.log(name);
      setActiveFolder(name);
    }}
      whileHover={{
        y: -18,
        scale: 1.015,
        filter: "brightness(1.05)",
      }}
      transition={{
        type: "spring",
        stiffness: 340,
        damping: 20,
      }}
      className={`
        absolute
        left-1/2
        -translate-x-1/2
        cursor-pointer
        ${className}
      `}
    >
      <img
        src={image}
        alt={title}
        draggable={false}
        className="
  block
  w-full
  select-none
  transition-all
  duration-300
  drop-shadow-[0_18px_35px_rgba(0,0,0,0.22)]
  hover:drop-shadow-[0_35px_70px_rgba(0,0,0,0.35)]
"
      />

      <h2
        className={`
    absolute
    text-[26px]
    font-bold
    tracking-[-0.02em]
    whitespace-nowrap
    select-none
    ${titleClassName}
  `}
        style={{ fontFamily: "Manrope" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default FolderLayer;