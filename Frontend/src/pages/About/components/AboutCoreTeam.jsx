const coreTeam = [
  {
    id: 1,
    name: "Mrinal Bhargava",
    role: "Director",
    dept: "engineering",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785849226/ChatGPT_Image_Aug_4_2026_06_41_06_PM_zeivii.png",
  },
  {
    id: 2,
    name: "Rajnesh Yadav",
    role: "Director",
    dept: "technology",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785836787/Gemini_Generated_Image_ltl70lltl70lltl7_cfxlb3.png",
  },
  {
    id: 3,
    name: "Partha Saha",
    role: "CTO",
    dept: "operations",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785502237/WhatsApp_Image_2026-07-31_at_6.19.41_PM_qrusfx.jpg",
  },
  {
    id: 4,
    name: "Binit Kumar",
    role: "PROJECT HEAD",
    dept: "skills",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785841844/WhatsApp_Image_2026-08-04_at_4.37.52_PM_rjrqba.jpg",
  },
  {
    id: 5,
    name: "Saptmanyu Ray",
    role: "CFO",
    dept: "accounts",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785835584/Gemini_Generated_Image_4fo96i4fo96i4fo9_c7ihjy.png",
  },
  {
    id: 6,
    name: "Anand Panday",
    role: "PROJECT LEAD",
    dept: "technology",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785835070/WhatsApp_Image_2026-08-04_at_11.56.00_AM_1_jnuwss.jpg",
  },
  {
    id: 7,
    name: "Amit Singh",
    role: "PROJECT HEAD SKILL",
    dept: "accounts",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785835958/ChatGPT_Image_Aug_4_2026_03_00_07_PM_ibvnty.png",
  },
  {
    id: 8,
    name: "Anmol Goyal",
    role: "PROJECT MANAGER FINANCE",
    dept: "skills",
    image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785834901/WhatsApp_Image_2026-08-04_at_12.00.08_PM_ipp5xf.jpg",
  }
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#002a58]/40 dark:hover:border-[#a9c7ff]/40 transition-all duration-500 ease-out overflow-hidden">
      {/* Top Accent Strip in Brand Palette */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#002a58] dark:bg-[#a9c7ff] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Full Width Image Container (Medium Height) */}
      <div className="relative w-full h-60 sm:h-72 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details Container */}
      <div className="p-4 sm:p-4.5 text-center flex flex-col items-center justify-center">
        <h3 className="text-base sm:text-[17px] font-extrabold text-[#002a58] dark:text-white tracking-tight leading-snug">
          {member.name}
        </h3>
        <span className="inline-block text-[11px] sm:text-xs font-bold text-[#002a58]/80 dark:text-[#a9c7ff] uppercase tracking-wider mt-1.5 px-3 py-0.5 rounded-full bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 border border-[#002a58]/10 dark:border-[#a9c7ff]/20">
          {member.role}
        </span>
      </div>
    </div>
  );
};

const AboutCoreTeam = () => {
  return (
    <section
      id="cards"
      className="relative py-20 bg-slate-50/50 dark:bg-[#080b0c] border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" data-animate="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#121517] border border-slate-200/80 dark:border-slate-800/80 text-[9.5px] font-extrabold uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#002a58] dark:bg-[#a9c7ff] animate-pulse" />
            Our Professionals
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002a58] dark:text-white mt-1.5 tracking-tight uppercase leading-snug">
            OUR CORE TEAM MEMBERS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] via-blue-600 to-[#a9c7ff] dark:from-[#a9c7ff] dark:to-white mx-auto mt-4 rounded-full shadow-xs" />
        </div>

        {/* 4 Members Per Row Grid */}
        <div data-animate="stagger-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {coreTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreTeam;
