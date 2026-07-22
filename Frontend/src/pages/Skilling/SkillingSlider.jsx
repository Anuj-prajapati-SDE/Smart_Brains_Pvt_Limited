import React from 'react'
import { useState } from "react";
import Slider_1 from '../../assets/images/SkillingSlider/slider1.png'
import Slider_2 from '../../assets/images/SkillingSlider/slider2.png'
import Slider_3 from '../../assets/images/SkillingSlider/slider3.png'
import Slider_4 from '../../assets/images/SkillingPage/sd2.png'
import Slider_5 from '../../assets/images/SkillingPage/sd3.png'

const projects = [
    {
        id: "apssdc",
        name: "APSSDC Skill Initiative",
        category: "State Mission",
        image: Slider_1,
        description: "Placement-linked vocational training program for unemployed youth of Andhra Pradesh, implementing courses in Manual Metal Arc Welding, Mine Electrician, Fitter, and Junior Instrumentation.",
        highlights: ["600+ Trainees Target", "Andhra Pradesh Location", "Placement Linked"]
    },
    {
        id: "ntpc",
        name: "NTPC CSR Skilling",
        category: "CSR Partnership",
        image: Slider_2,
        description: "Imparting placement-linked vocational skill development training under NTPC CSR programs in Noida, Ghaziabad, Vizag, and Auraiya, targeting Domestic Electrician solutions.",
        highlights: ["1400+ Unemployed Youth", "Domestic Electrician Trade", "Four Key Locations"]
    },
    {
        id: "powergrid",
        name: "Powergrid CSR Program",
        category: "CSR Partnership",
        image: Slider_3,
        description: "Approved training partner executing Powergrid's CSR skill training for the unemployed youth of Vizag and Panchkula in Assistant Electricity Meter Reading, Cash Collecting, and Industrial Electrical domains.",
        highlights: ["480+ Trainees Graduated", "Vizag & Panchkula", "Approved Training Partner"]
    },
    {
        id: "gail",
        name: "GAIL SDI Raebareli",
        category: "CSR Partnership",
        image: Slider_4,
        description: "Residential skilling and employability program at Skill Development Institute (SDI) Raebareli, providing comprehensive training in Pipe Fitter, Industrial Electrician, DEO, and Industrial Welder.",
        highlights: ["1020+ Target Candidates", "Residential with Food", "Raebareli Center"]
    },
    {
        id: "ddugky",
        name: "DDU-GKY National Program",
        category: "National Mission",
        image: Slider_5,
        description: "Empowering rural youth through placement-linked training courses configured alongside state skill missions, sector councils, and technical global firms for sustainable livelihoods.",
        highlights: ["Rural Youth Focused", "Industry Aligned", "Placement Tracked"]
    }
];

const SkillingSlider = () => {
    const [activeProjectId, setActiveProjectId] = useState("apssdc");

    const handlePrev = () => {
        const currentIndex = projects.findIndex(p => p.id === activeProjectId);
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setActiveProjectId(projects[prevIndex].id);
    };

    const handleNext = () => {
        const currentIndex = projects.findIndex(p => p.id === activeProjectId);
        const nextIndex = (currentIndex + 1) % projects.length;
        setActiveProjectId(projects[nextIndex].id);
    };

    return (
        <section id="leadership" className="pb-10 mt-6 bg-gradient-to-b from-[#f8f9fa] to-white dark:from-[#080b0c] dark:to-[#0c0e0f] border-b border-outline-variant/20">
            {/* Added style block to ensure transitions are smooth on all pages */}
            <style>{`
                .accordion-card {
                    transition: width 0.75s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease, box-shadow 0.5s ease;
                }
                .accordion-image {
                    transition: transform 1.0s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
                }
            `}</style>
            
            <div className="max-w-[1280px] mx-auto px-gutter">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12" data-animate="fade-up">
                    <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-bold">
                        Corporate Governance
                    </span>
                    <h2 className="font-headline-lg text-3xl md:text-4xl text-[#002a58] dark:text-white mt-2 font-bold font-headline-lg">
                        Our Associations & Partnerships
                    </h2>
                    <div className="w-16 h-1 bg-[#002a58] dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
                </div>

                {/* Interactive Accordion Slider (Visible on all screens) */}
                <div className="flex h-[420px] sm:h-[480px] md:h-[550px] w-full mt-8 md:mt-12">
                    {projects.map((project) => {
                        const isActive = activeProjectId === project.id;
                        return (
                            <div
                                key={project.id}
                                onClick={() => setActiveProjectId(project.id)}
                                className={`relative overflow-hidden rounded-sm sm:rounded-xl accordion-card shadow-lg ${isActive
                                    ? "w-[96%] bg-slate-900"
                                    : "w-[1%] bg-slate-800 hover:bg-slate-700 cursor-pointer"
                                    }`}
                                style={{ width: isActive ? "96%" : "1%" }}
                            >
                                {/* Background Project Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className={`p-2 w-full h-full object-top accordion-image ${isActive
                                            ? "object-fill scale-105"
                                            : "object-cover scale-100 opacity-60 hover:opacity-85"
                                            }`}
                                    />
                                    {/* Dark overlay with dynamic opacity based on focus state */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-[#002a58]/10 transition-opacity duration-500 ${isActive ? "opacity-90" : "opacity-80"
                                        }`} />
                                </div>

                                {/* Active State View Details */}
                                <div
                                    className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-10 transition-all duration-500 delay-100 ${isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                                        }`}
                                >
                                    <div>
                                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#a9c7ff] font-bold mb-1 sm:mb-2 inline-block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-sm sm:text-xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                                            {project.name}
                                        </h3>

                                        {/* Description Block */}
                                        <div className="relative pl-3 sm:pl-5 border-l-2 border-[#a9c7ff] my-2 sm:my-4 md:my-5 max-w-xl">
                                            <p className="text-[10px] sm:text-sm md:text-base text-slate-200 font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Bullet Highlights */}
                                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-5 pt-2 sm:pt-4 md:pt-5 border-t border-white/10">
                                            {project.highlights.map((highlight, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-white/10 border border-white/10 text-[8px] sm:text-[10px] md:text-xs text-slate-200 font-medium flex items-center gap-1 sm:gap-1.5 backdrop-blur-md"
                                                >
                                                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#a9c7ff]" />
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Inactive State Vertical Sidebar Text Overlay */}
                                <div
                                    className={`absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-end pb-6 sm:pb-12 pointer-events-none transition-opacity duration-300 ${!isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <div
                                        className="text-white font-bold tracking-widest uppercase select-none transition-all duration-300 flex items-center justify-center gap-2 sm:gap-4"
                                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                    >
                                        <span className="text-[8px] sm:text-xs text-[#a9c7ff] tracking-widest font-medium opacity-80">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-end mt-6 gap-3">
                    {/* Left Arrow Button */}
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#002a58] hover:text-white dark:hover:bg-blue-500 dark:hover:text-slate-950 hover:border-transparent hover:shadow-md active:scale-95 transition-all duration-200"
                        aria-label="Previous Project"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#002a58] hover:text-white dark:hover:bg-blue-500 dark:hover:text-slate-950 hover:border-transparent hover:shadow-md active:scale-95 transition-all duration-200"
                        aria-label="Next Project"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SkillingSlider;
