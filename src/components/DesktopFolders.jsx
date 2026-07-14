import { motion } from "framer-motion";
import Folder from "./Folder";

function DesktopFolders({ visible, onAboutOpen }) {
    const folders = [
        { title: "Resume", x: -390, y: -30 },
        { title: "About Me", x: 270, y: -30, onClick: onAboutOpen, },

        { title: "Projects", x: -240, y: 170 },
        { title: "Skills", x: 375, y: 190 },

        { title: "Contact", x: 10, y: 300 },
        { title: "Certifications", x: 0, y: -130 },
    ];

    return (
        <>
            {folders.map((folder, index) => (
                <motion.div
                    key={folder.title}
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: 0.6,
                    }}
                    animate={
                        visible
                            ? {
                                x: folder.x,
                                y: folder.y,
                                opacity: 1,
                                scale: 1,
                            }
                            : {
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0.6,
                            }
                    }
                    transition={{
                        duration: 0.8,
                        delay: index * 0.12,
                        type: "spring",
                        stiffness: 120,
                    }}
                    className="absolute left-1/2 top-[33%] -translate-x-1/2 -translate-y-1/2"
                >
                    <Folder
                        title={folder.title}
                        color="blue"
                        size="small"
                        visible={true}
                        onClick={folder.onClick}
                    />
                </motion.div>
            ))}
        </>
    );
}

export default DesktopFolders;