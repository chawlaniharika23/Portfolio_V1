function StackFolder({ image, title }) {
  return (
    <div className="relative w-[1500px]">
      <img
        src={image}
        alt={title}
        className="block w-full h-auto select-none"
      />

      <h2
        className="
          absolute
          top-[22px]
          left-[250px]
          text-[26px]
          font-semibold
          whitespace-nowrap
        "
        style={{ color: "#F6F1E8" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default StackFolder;