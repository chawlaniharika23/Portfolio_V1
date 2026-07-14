import { Search } from "lucide-react";

function Spotlight({ text, visible, showCursor }) {
  return (
    <div
      className={`
    absolute
    top-[30%]
    left-1/2
    -translate-x-1/2
    w-[700px]
    h-[72px]
    bg-white/80
    backdrop-blur-xl
    rounded-full
    shadow-lg
    flex
    items-center
    px-6
    transition-all
    duration-700
    ${visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
        }
  `}
    >
      <Search
        size={24}
        strokeWidth={2}
        className="text-gray-400 mr-4"
      />

      <div className="flex items-center">
        <span className="text-gray-500 text-xl font-medium">
          {text}
        </span>

        {showCursor && (
          <span className="ml-1 text-gray-500 animate-pulse">
            |
          </span>
        )}
      </div>
    </div>
  );
}

export default Spotlight;