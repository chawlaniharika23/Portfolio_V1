import finder from "../assets/dock/finder.png";
import safari from "../assets/dock/safari.png";
import mail from "../assets/dock/mail.png";
import vscode from "../assets/dock/vscode.png";
import github from "../assets/dock/github.png";
import pages from "../assets/dock/pages.png";
import trash from "../assets/dock/trash.png";
import { useState } from "react";

function Dock({ onFinderClick }) {
  const [shakeTrash, setShakeTrash] = useState(false);
  const apps = [
    {
      image: finder,
      label: "Finder",
      action: "finder",
    },
    {
      image: safari,
      label: "Safari",
      action: "safari",
    },
    {
      image: mail,
      label: "Mail",
      action: "mail",
    },
    {
      image: vscode,
      label: "VS Code",
      action: "vscode",
    },
    {
      image: github,
      label: "GitHub",
      action: "github",
    },
    {
      image: pages,
      label: "Resume",
      action: "resume",
    },
    {
      image: trash,
      label: "Trash",
      action: "trash",
    },
  ];

  return (
    <div
      className="
        fixed
        bottom-2
        left-1/2
        -translate-x-1/2
        flex
        items-end
        gap-2
        px-6
        py-4
        rounded-[30px]
        bg-white/35
        backdrop-blur-2xl
        border
        border-white/30
        shadow-[0_18px_50px_rgba(0,0,0,0.22)]
        z-[999]
      "
    >
      {apps.map((app, index) => (
        <div className="relative group">
          <img
            src={app.image}
            alt={app.label}
            draggable={false}
            onClick={() => {
              switch (app.action) {
                case "finder":
                  if (onFinderClick) {
                    onFinderClick();
                  }
                  break;

                case "safari":
                  window.open("https://google.com/", "_blank");
                  break;

                case "mail":
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=chawlaniharika23@gmail.com",
                    "_blank"
                  );
                  break;

                case "vscode":
                  window.open(
                    "https://github.com/chawlaniharika23/Portfolio_V1",
                    "_blank"
                  );
                  break;

                case "github":
                  window.open(
                    "https://github.com/chawlaniharika23",
                    "_blank"
                  );
                  break;

                case "resume":
                  window.open("/resume.pdf", "_blank");
                  break;

                case "trash":
                  setShakeTrash(true);

                  setTimeout(() => {
                    setShakeTrash(false);
                  }, 400);

                  break;

                default:
                  break;
              }
            }}
            className={`w-14 h-14 object-contain cursor-pointer select-none transition-all duration-300 ease-out hover:scale-125 hover:-translate-y-2 ${app.action === "trash" && shakeTrash
                ? "animate-trashShake"
                : ""
              }`}
          />

          <div
            className="
      absolute
      bottom-[78px]
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
    "
          >
            {app.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dock;