function PortfolioTitle({ visible }) {
    return (
      <h1
        className={`
          absolute
          top-[27%]
          left-1/2
          -translate-x-1/2
          text-[170px]
          leading-none
          text-[#40393C]
          font-normal
          select-none
          transition-all
          duration-700
          z-10
          ${
            visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        style={{ fontFamily: "Anton" }}
      >
        Portfolio
      </h1>
    );
  }
  
  export default PortfolioTitle;