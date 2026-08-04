 import React from "react";
 import client_1 from "../assets/images/our_clients/client_1.png";
import client_2 from "../assets/images/our_clients/client_2.png";
import client_3 from "../assets/images/our_clients/client_3.jpeg";
import client_4 from "../assets/images/our_clients/client_4.jpeg";
import client_5 from "../assets/images/our_clients/client_5.png";
import client_6 from "../assets/images/our_clients/client_6.png";
import client_7 from "../assets/images/our_clients/client_7.png";
import client_8 from "../assets/images/our_clients/client_8.png";
import client_9 from "../assets/images/our_clients/client_9.png";
import client_10 from "../assets/images/our_clients/client_10.png";
import client_11 from "../assets/images/our_clients/client_11.png";
import client_12 from "../assets/images/our_clients/client_12.png";
import client_13 from "../assets/images/our_clients/client_13.png";
import client_14 from "../assets/images/our_clients/client_14.png";
import client_15 from "../assets/images/our_clients/client_15.png";
import client_16 from "../assets/images/our_clients/client_16.png";
import client_17 from "../assets/images/our_clients/client_17.png";
import client_18 from "../assets/images/our_clients/client_18.png";

 const CompanySlider = () => {
  return (
    <>
     {/* Major Clients Section */}
          <section className="py-10 bg-surface-container-low relative overflow-hidden">
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
            <div className="max-w-[1280px] mx-auto px-gutter mb-10 relative z-10">
              <div className="text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
                  Trusted Worldwide
                </span>
                <h2 className="text-4xl md:text-5xl font-headline-lg text-on-surface leading-tight font-bold text-primary">
                  Our Major <span className="text-primary font-extrabold">Clients</span>
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
                    {[
                      { name: "BHUTANI", img: client_1 },
                      { name: "KRISUMI", img: client_2 },
                      { name: "ELAN", img: client_3 },
                      { name: "TATA", img: client_4 },
                      { name: "M3M", img: client_5 },
                      { name: "DLF", img: client_6 },
                      { name: "GODREJ", img: client_7 },
                      { name: "L&T", img: client_8 },
                      { name: "AMBUJA", img: client_9 },
                      { name: "RELIANCE", img: client_10 },
                      { name: "ADANI", img: client_11 },
                      { name: "MAHINDRA", img: client_12 },
                      { name: "WIPRO", img: client_13 },
                      { name: "HDFC", img: client_14 },
                      { name: "INFOSYS", img: client_15 },
                      { name: "TCS", img: client_16 },
                      { name: "ITC", img: client_17 },
                      { name: "HCL", img: client_18 },
                    ].map((client, j) => (
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

 export default CompanySlider