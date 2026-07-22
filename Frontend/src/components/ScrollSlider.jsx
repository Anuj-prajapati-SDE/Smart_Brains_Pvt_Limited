

function Slidebar ({ImgArray}){
  return(
    <>
          <section className="py-24 bg-surface-container-low relative overflow-hidden">
        {/* Inline Styles for Animation */}
        <style>
          {`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}
        </style>

        {/* Decorative background blurs */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-gutter mb-16 relative z-10">
          <div className="text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Trusted Worldwide
            </span>
            <h2 className="text-4xl md:text-5xl font-headline-lg text-primary leading-tight">
              Our Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#83aef5] font-extrabold">Clients</span>
            </h2>
          </div>
        </div>

        {/* Sliders Container */}
        <div className="relative w-full flex flex-col gap-6 pause-on-hover z-10">

          {/* Fade Edges for the marquee effect */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface-container-low to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface-container-low to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 - Left Scrolling */}
          <div className="flex w-max animate-scroll-left gap-6 px-4">
            {[...Array(2)].map((_, i) => (
              <div key={`row1-${i}`} className="flex gap-6 items-center">
                {ImgArray.map((client, j) => (
                  <div key={j} className="flex items-center justify-center w-[200px] h-[90px] bg-white rounded-2xl shadow-sm border border-outline-variant/40 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group p-4">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-full object-contain "
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Slidebar