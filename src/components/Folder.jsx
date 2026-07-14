import pinkFolder from "../assets/icons/pink-folder.png";
import blueFolder from "../assets/icons/folder.png";

function Folder({
  title,
  className = "",
  visible,
  onClick,
  color = "blue",
  size = "small",
}) {
  const folderIcon = color === "pink" ? pinkFolder : blueFolder;

  const folderSize =
    size === "large" ? "w-[150px]" : "w-[95px]";
  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center
        cursor-pointer
        select-none
        transition-all
        duration-700
        hover:scale-110
        ${visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
        }
        ${className}
      `}
    >
      <img
        src={folderIcon}
        alt={title}
        className={folderSize}
      />

      <p className="-mt-2 text-base font-medium text-[#2A2A2A]">
        {title}
      </p>
    </div>
  );
}

export default Folder;