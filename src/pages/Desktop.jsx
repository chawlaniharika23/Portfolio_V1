import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Wallpaper from "../components/Wallpaper";
import MenuBar from "../components/MenuBar";
import Dock from "../components/Dock";
import Folder from "../components/Folder";
import DesktopFolders from "../components/DesktopFolders";
import AboutWindow from "../components/AboutWindow";

function Desktop() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [foldersVisible, setFoldersVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFoldersVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Wallpaper />

      <MenuBar />

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.08, 1] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        className="absolute left-1/2 top-[36%] -translate-x-1/2 z-20"
      >
        <Folder
          title="My Portfolio"
          color="pink"
          size="large"
          visible={true}
        />
      </motion.div>

      <DesktopFolders
        visible={foldersVisible}
        onAboutOpen={() => setAboutOpen(true)}
      />

      {aboutOpen && (
        <AboutWindow
          onClose={() => setAboutOpen(false)}
        />
      )}

      <Dock onFinderClick={handleOpenPortfolio} />
    </div>
  );
}

export default Desktop;