import { IoChevronBack } from "react-icons/io5";

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        top-5
        left-5
        w-14
        h-14
        rounded-2xl
        bg-white/35
        backdrop-blur-xl
        border
        border-white/30
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-xl
        active:scale-95
        z-[999]
      "
    >
      <IoChevronBack
        className="text-3xl text-[#403C37]"
      />
    </button>
  );
}

export default BackButton;