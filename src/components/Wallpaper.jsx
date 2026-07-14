function Wallpaper({ image }) {
  return (
    <img
      src={image}
      alt=""
      draggable={false}
      className="
        fixed
        inset-0
        w-full
        h-full
        object-cover
        select-none
        -z-10
      "
    />
  );
}

export default Wallpaper;