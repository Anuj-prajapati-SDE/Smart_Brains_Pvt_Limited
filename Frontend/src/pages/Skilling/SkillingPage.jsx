import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { GraduationCap, Briefcase, Handshake, Globe } from 'lucide-react'
import SkillingSlider from './SkillingSlider'
import APSSDC_Logo from '../../assets/images/SkillingPage/s1.png'
import NTPC_Logo from '../../assets/images/SkillingPage/s2.png'
import Powergrid_Logo from '../../assets/images/SkillingPage/s3.png'
import GAIL_Logo from '../../assets/images/SkillingPage/s4.png'

{/*Import Smart Brains Skill Development Porject Sction images */}
import Skill_Development_1 from '../../assets/images/SkillingPage/sd1.png'
import Skill_Development_2 from '../../assets/images/SkillingPage/sd2.png'
import Skill_Development_3 from '../../assets/images/SkillingPage/sd3.png'
import Skill_Development_4 from '../../assets/images/SkillingPage/sd4.png'
import Skill_Development_5 from '../../assets/images/SkillingPage/sd5.png'
import Skill_Development_6 from '../../assets/images/SkillingPage/sd6.png'
import Skill_Development_7 from '../../assets/images/SkillingPage/sd7.png'
import Skill_Development_8 from '../../assets/images/SkillingPage/sd8.png'

const csrProjectsData = [
  {

    image: APSSDC_Logo, // Assign APSSDC_Logo here once imported
    logoPlaceholderText: "APSSDC",
    description: (
      <>
        SmartBrains comes under the MoU with Andhra Pradesh State Skill Development Corporation (APSSDC) as Training Partner for implementing Placement Linked Skill Development program for Unemployed Youth of Andhra Pradesh in <strong className="font-semibold text-slate-800 dark:text-white">April 2018</strong>. The <strong className="font-semibold text-slate-800 dark:text-white">total allocate target of 600 trainee</strong> had went through the course like Manual Metal Arc Welding, Mine Electrician, Fitter and Junior Instrumentation Technician.
      </>
    )
  },
  {

    image: NTPC_Logo, // Assign NTPC_Logo here once imported
    logoPlaceholderText: "NTPC",
    description: (
      <>
        SmartBrains collaboration with NTPC, for imparting Placement Linked Vocational Skill Development Program under their CSR program in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2018</strong>. The purpose of this training to provide employability to <strong className="font-semibold text-slate-800 dark:text-white">1400 unemployed youth</strong> who will get train in the domain of Electrician Domestic Solutions. This program was executed in Noida, Ghaziabad, Vizag and Auraiya.
      </>
    )
  },
  {

    image: Powergrid_Logo, // Assign Powergrid_Logo here once imported
    logoPlaceholderText: "POWERGRID",
    description: (
      <>
        SmartBrains teams up with Powergrid in <strong className="font-semibold text-slate-800 dark:text-white">Oct 2020</strong>, as "Approved Training Partner" for execution of its CSR program in skillin for the un-employed youth of Vizag and Panchkula. SmartBrains successfully completed training and placement of <strong className="font-semibold text-slate-800 dark:text-white">480 youth</strong> who had completed their training in the domain of Assistant Electricty Meter Reading / Cash Collector and Industial Electrician.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  },
  {

    image: GAIL_Logo, // Assign GAIL_Logo here once imported
    logoPlaceholderText: "GAIL",
    description: (
      <>
        SmartBrains comes under the MoU with GAIL Limited for the execution of "Skilling and Employability Program" at their centre SDI - Raebareli in <strong className="font-semibold text-slate-800 dark:text-white">Nov 2023</strong>. A <strong className="font-semibold text-slate-800 dark:text-white">target of 1020 candidates</strong> has been awarded to SmartBrains for the of PIO | Industial Electrician | Pipe Fitter | Data Entry Operator | Industrial Welder domain trainig. Its a residential Project along with food.
      </>
    )
  }
];

// Data structure for the 8 Skill Development Projects.
// You can replace the default imported logos with your specific project images as needed.
const skillDevelopmentProjects = [
  { id: 1, image: Skill_Development_1, placeholder: "Samagra Shiksha", alt: "Samagra Shiksha" },
  { id: 2, image: Skill_Development_2, placeholder: "SDI Raebareli", alt: "Skill Development Institute Raebareli" },
  { id: 3, image: Skill_Development_3, placeholder: "DDU-GKY HP 2018", alt: "DDU-GKY HP 2018" },
  { id: 4, image: Skill_Development_4, placeholder: "DDU-GKY HP 2022", alt: "DDU-GKY HP 2022" },
  { id: 5, image: Skill_Development_5, placeholder: "DDU-GKY HP 2022", alt: "DDU-GKY HP 2022" },
  { id: 6, image: Skill_Development_6, placeholder: "DDU-GKY AP 2022", alt: "DDU-GKY AP 2022" },
  { id: 7, image: Skill_Development_7, placeholder: "DDU-GKY UP 2018", alt: "DDU-GKY UP 2018" },
  { id: 8, image: Skill_Development_8, placeholder: "DDU-GKY UP 2022", alt: "DDU-GKY UP 2022" },
];

const CsrCard = ({ proj }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[360px] sm:min-h-[390px] flex-shrink-0 snap-start snap-always relative bg-white dark:bg-[#121517] border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
    >
      {/* Logo / Image Container (Edge-to-Edge full width) */}
      <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800/50 flex items-center justify-center p-2">
        {proj.image ? (
          <img
            src={proj.image}
            alt="CSR Partner Logo"
            className="w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
            {proj.logoPlaceholderText}
          </div>
        )}
      </div>

      {/* Description Content (with padding) */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <p className={`text-[12px] sm:text-[13px] text-slate-600 dark:text-slate-400 font-light leading-relaxed text-justify ${!isExpanded ? 'line-clamp-4' : ''}`}>
            {proj.description}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-blue-600 dark:text-[#a9c7ff] hover:underline self-start mt-3 transition-all focus:outline-none flex items-center gap-1 group/btn"
        >
          <span>{isExpanded ? "View Less" : "View More"}</span>
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SkillingPage = () => {
  const animRef = useScrollAnimation()
  const scrollContainerRef = useRef(null);

  const scrollCsr = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <main className="mt-20 min-h-screen bg-slate-50 dark:bg-[#0c0e0f] text-on-surface" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
            alt="Classroom training session"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Skill Development &amp; CSR
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">
              Skill Development &amp; CSR
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Employability and skill training program configured alongside state skill missions, sector skill Councils, and CSR centric initiatives.
            </p>
            {/* <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Register For Batches
              </Link>
            </div> */}
          </div>
        </div>
      </section>

     {/* Skilling Slider Section */}
   
      <section className="py-16  sm:py-20 max-w-[1280px] mx-auto px-gutter relative overflow-hidden border-t border-slate-200/50 dark:border-slate-800/40">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] bg-[radial-gradient(#002a58_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Text Content & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-animate="fade-up">
            <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-3.5 py-1.5 rounded-lg self-start mb-4">
              Overview & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#002a58] dark:text-white font-black tracking-tight leading-tight uppercase mb-6">
              Empowering India's Youth Through Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white mb-6 rounded-full" />
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 text-justify">
              Smart Brains bridges the gap between education and industry. In collaboration with state skill missions, sector councils, and premier corporate partners, we deliver high-impact, placement-linked vocational training to empower youth nationwide.
            </p>

            {/* Grid of Key Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800/40">
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-[#002a58]/5 dark:bg-white/5 text-[#002a58] dark:text-white flex items-center justify-center mb-3 shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#002a58] dark:text-white">1.5+ </span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Lakhs Youth Trained </span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#a9c7ff]/10 text-blue-600 dark:text-[#a9c7ff] flex items-center justify-center mb-3 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-[#a9c7ff]">80%+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Placement Rate</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-[#002a58]/5 dark:bg-white/5 text-[#002a58] dark:text-white flex items-center justify-center mb-3 shadow-sm">
                  <Handshake className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#002a58] dark:text-white">50+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Skill/CSR Partners</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#a9c7ff]/10 text-blue-600 dark:text-[#a9c7ff] flex items-center justify-center mb-3 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-[#a9c7ff]">20+</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">States Reached</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6" data-animate="stagger-up">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-[#121517]/40 border border-slate-200/60 dark:border-slate-800/40 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 flex items-center justify-center text-[#002a58] dark:text-[#a9c7ff] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002a58] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-[#a9c7ff] transition-colors">
                    State Skill Missions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Collaborating with various state skill development corporations to implement placement-linked vocational training.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-[#121517]/40 border border-slate-200/60 dark:border-slate-800/40 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 flex items-center justify-center text-[#002a58] dark:text-[#a9c7ff] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002a58] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-[#a9c7ff] transition-colors">
                    CSR Collaborations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Partnering with public sector giants (NTPC, GAIL, Powergrid) to fund and execute residential skilling programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-[#121517]/40 border border-slate-200/60 dark:border-slate-800/40 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 flex items-center justify-center text-[#002a58] dark:text-[#a9c7ff] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002a58] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-[#a9c7ff] transition-colors">
                    NSDC & SSC Alignment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Accredited courses certified by national bodies ensuring high industry standard and official validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Our Associations & Partnerships  Slider*/}
  <SkillingSlider />
      {/* Smart Brains Skill Development Porject Section */}
      <section className="py-12 max-w-[1280px] mx-auto px-gutter relative overflow-hidden border-t border-slate-200/50 dark:border-slate-800/40">
       

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-3.5 py-1.5 rounded-lg">
            Corporate Social Responsibility
          </span>
          <h2 className="text-3xl md:text-4xl text-[#002a58] dark:text-white mt-4 font-black tracking-tight leading-tight uppercase">
         Our Skills Development Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#002a58] via-blue-500 to-[#a9c7ff] mx-auto mt-4 rounded-full" />
          
        </div>

        {/* Fully responsive 8-image grid: 4 columns per row on desktop (lg), 2 on tablet (sm), 1 on mobile */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          data-animate="stagger-up"
        >
          {skillDevelopmentProjects.map((proj, idx) => (
            <div 
              key={proj.id}
              className="bg-white dark:bg-[#121517]/40 border border-slate-100 dark:border-slate-800/40 rounded-xl p-5 flex flex-col justify-center items-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden aspect-[1.6/1] w-full"
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {proj.image ? (
                  <img 
                    src={proj.image} 
                    alt={proj.alt}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500">
                    <svg className="w-8 h-8 stroke-current stroke-[1.25]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold">{proj.placeholder}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Major CSR Projects Section */}
      <section className="py-10 max-w-[1280px] mx-auto px-gutter relative overflow-hidden border-t border-slate-200/50 dark:border-slate-800/40">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#002a58_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
          <span className="text-xs uppercase tracking-widest text-[#002a58] dark:text-[#a9c7ff] font-extrabold bg-[#002a58]/5 dark:bg-[#a9c7ff]/10 px-3 py-1 rounded-md">
            Corporate Social Responsibility
          </span>
          <h2 className="text-3xl md:text-4xl text-[#002a58] dark:text-white mt-4 font-black tracking-tight leading-tight uppercase">
            Major CSR Projects by SmartBrains_
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#002a58] to-blue-500 dark:from-[#a9c7ff] dark:to-white mx-auto mt-3 rounded-full" />
        </div>

        {/* CSR Cards Slider Container */}
        <div className="relative" data-animate="stagger-up">
          {/* Horizontal scroll rail showing exactly 4 cards on desktop */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {csrProjectsData.map((proj, idx) => (
              <CsrCard key={idx} proj={proj} />
            ))}
          </div>

          {/* Bottom Control Section (Status text on left, workable arrows on right) */}
          <div className="flex items-center justify-end mt-4">
            {/* <div className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
              Swipe or use controls to browse ({csrProjectsData.length} Projects)
            </div> */}

            <div className="flex gap-3">
              {/* Left Arrow Button */}
              <button
                onClick={() => scrollCsr('left')}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#002a58] hover:text-white dark:hover:bg-blue-500 dark:hover:text-slate-950 hover:border-transparent hover:shadow-md active:scale-95 transition-all duration-200"
                aria-label="Previous Project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={() => scrollCsr('right')}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#002a58] hover:text-white dark:hover:bg-blue-500 dark:hover:text-slate-950 hover:border-transparent hover:shadow-md active:scale-95 transition-all duration-200"
                aria-label="Next Project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Connect With Us Section */}
      <section className="pb-10 max-w-[1280px] mx-auto px-gutter relative overflow-hidden">
        <div 
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#002a58] via-[#004080] to-blue-900 text-white p-8 md:p-12 shadow-2xl flex flex-col items-center text-center gap-8"
          data-animate="fade-up"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          {/* Text Content */}
          <div className="max-w-2xl relative z-10 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-2 mb-4 tracking-tight leading-tight uppercase">
              Ready to build future-proof skills?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Connect with our training and placement experts today to find out about upcoming batches, corporate partnerships, or custom vocational training models.
            </p>
          </div>

          {/* Buttons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center relative z-10">
            <Link 
              to="/contact-us" 
              className="inline-flex justify-center items-center px-6 py-3.5 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg text-center w-full sm:w-auto"
            >
              Contact Us Now
            </Link>
           
          </div>
        </div>
      </section>
    

      
    </main>
  )
}

export default SkillingPage;


