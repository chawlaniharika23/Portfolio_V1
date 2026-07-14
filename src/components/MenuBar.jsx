import {
  FaApple,
  FaWifi,
  FaBatteryThreeQuarters,
} from "react-icons/fa";

function MenuBar() {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-full
        h-7
        px-5
        flex
        items-center
        justify-between
        bg-white/15
        backdrop-blur-lg
        border-b
        border-white/20
        text-[#2F2B28]
        text-[14px]
        font-medium
        z-[999]
      "
    >
      <div className="flex items-center gap-5">
        <FaApple className="text-lg" />

        <span className="font-semibold">Finder</span>

        <span>File</span>

        <span>Edit</span>

        <span>View</span>

        <span>Go</span>

        <span>Window</span>

        <span>Help</span>
      </div>

      <div className="flex items-center gap-4">
        <FaWifi />

        <FaBatteryThreeQuarters />

        <span>{time}</span>
      </div>
    </div>
  );
}

export default MenuBar;