import { useState, useEffect } from "react";

import Wallpaper from "../components/Wallpaper";
import introWallpaper from "../assets/wallpapers/intro-wallpaper.jpg";
import MenuBar from "../components/MenuBar";
import Spotlight from "../components/Spotlight";
import Dock from "../components/Dock";
import Folder from "../components/Folder";
import PortfolioTitle from "../components/PortfolioTitle";

function Intro({ onOpenDesktop }) {
  const [stage, setStage] = useState("spotlight");
  const [searchText, setSearchText] = useState("Spotlight Search");

  useEffect(() => {
    const target = "portfolio";

    // Delete "Spotlight Search"
    const deleteInterval = setInterval(() => {
      setSearchText((prev) => {
        if (prev.length === 0) {
          clearInterval(deleteInterval);

          let index = 0;

          // Start typing
          const typeInterval = setInterval(() => {
            index++;

            setSearchText(target.slice(0, index));

            // Only after the ENTIRE word is typed
            if (index === target.length) {
              clearInterval(typeInterval);

              // Pause so the user can read "Portfolio"
              setTimeout(() => {
                setStage("spotlightFade");

                // Wait for Spotlight fade animation
                setTimeout(() => {
                  setStage("title");

                  // Wait before showing folder
                  // setTimeout(() => {
                  //   setStage("desktop");
                  // }, 700);

                }, 700);

              }, 600);
            }

          }, 140);

          return "";
        }

        return prev.slice(0, -1);
      });
    }, 100);

    return () => clearInterval(deleteInterval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Wallpaper image={introWallpaper} />

      <MenuBar />

      <Spotlight
        text={searchText}
        visible={stage !== "spotlightFade" && stage !== "title" && stage !== "desktop"}
        showCursor={stage === "spotlight"}
      />

      <PortfolioTitle
        visible={stage === "title" || stage === "desktop"}
      />

      <Folder
        title="My Portfolio"
        color="pink"
        size="large"
        visible={stage === "title"}
        onClick={onOpenDesktop}
        className="absolute left-1/2 top-[42%] -translate-x-1/2 z-20"
      />

      <Dock onFinderClick={onOpenDesktop} />
    </div>
  );
}

export default Intro;