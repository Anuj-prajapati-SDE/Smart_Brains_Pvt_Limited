import React from 'react'
import { Owner_1, Owner_2, Owner_3 } from "../../../assets/index";

const leadershipTeam = [
    {
        id: "ankit",
        name: "Ankit Gupta",
        role: "Director",
        image: Owner_1,
        quote: "Director",
        highlights: ["Strategic Business Leadership", ],
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
        ),
    },
    {
        id: "awneesh",
        name: " Awneesh Yadav",
        role: "Director",
        image: Owner_2,
        quote: "Director",
        highlights: ["Government Skilling Expert"],
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
        ),
    },
    {
        id: "paritosh",
        name: "Paritosh Gupta",
        role: "Director",
        image:Owner_3,
        quote: "Director",
        highlights: ["Technical Project Consulting"],
        icon: (
           <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
        ),
    },
];

const LeadershipCard = ({ member, index }) => {
    return (
        <div
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Card Image Section */}
            <div className="relative h-[340px] sm:h-[380px] md:h-[400px] overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a38] via-[#001a38]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Role badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/15 shadow-lg">
                        <span className="text-[#a9c7ff]">{member.icon}</span>
                        {member.role}
                    </span>
                </div>

                {/* Name & quote overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                        {member.name}
                    </h3>
                    <div className="relative pl-4 border-l-2 border-[#a9c7ff]/60">
                        <p className="text-xs sm:text-sm text-slate-200/90 italic font-light leading-relaxed">
                            {member.quote}
                        </p>
                    </div>
                </div>
            </div>

            {/* Card Content Section — Highlights */}
            {/* <div className="relative bg-white dark:bg-[#0f1419] p-5 sm:p-6 border-t-2 border-[#002a58] dark:border-[#a9c7ff]">
               
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#002a58]/[0.03] dark:bg-[#a9c7ff]/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                <div className="flex flex-col gap-2.5 relative z-10">
                    {member.highlights.map((highlight, hIndex) => (
                        <div
                            key={hIndex}
                            className="flex items-center gap-3 group/item"
                        >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#002a58] dark:bg-[#a9c7ff] group-hover/item:scale-125 transition-transform duration-300" />
                            <span className="text-xs sm:text-sm text-[#1a1a2e] dark:text-slate-300 font-medium tracking-wide">
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Bottom accent line with gradient */}
            <div className="h-1 bg-gradient-to-r from-[#002a58] via-[#0050a0] to-[#a9c7ff]" />
        </div>
    );
};

const AboutLeadership = () => {
    return (
        <section id="leadership" className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white dark:from-[#080b0c] dark:to-[#0c0e0f] border-b border-outline-variant/20 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-gutter">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14" data-animate="fade-up">
                    <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-bold">
                        Corporate Governance
                    </span>
                    <h2 className="text-3xl md:text-4xl text-[#002a58] dark:text-white mt-2 font-bold font-headline-lg">
                        Our Leadership Team
                    </h2>
                    <div className="w-16 h-1 bg-[#002a58] dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
                    {/* <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-lg mx-auto">
                        Guided by visionary leaders with decades of industry expertise, driving excellence across every vertical.
                    </p> */}
                </div>

                {/* 3-Card Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" data-animate="fade-up">
                    {leadershipTeam.map((member, index) => (
                        <LeadershipCard key={member.id} member={member} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutLeadership;


