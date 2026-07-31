import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import HeroPage from './components/HeroPage'
import Businesses from './components/Businesses'
import client_1 from '../../assets/images/our_clients/client_1.png'
import client_2 from '../../assets/images/our_clients/client_2.png'
import client_3 from '../../assets/images/our_clients/client_3.jpeg'
import client_4 from '../../assets/images/our_clients/client_4.jpeg'
import client_5 from '../../assets/images/our_clients/client_5.png'
import client_6 from '../../assets/images/our_clients/client_6.png'
import client_7 from '../../assets/images/our_clients/client_7.png'
import client_8 from '../../assets/images/our_clients/client_8.png'
import client_9 from '../../assets/images/our_clients/client_9.png'
import client_10 from '../../assets/images/our_clients/client_10.png'
import client_11 from '../../assets/images/our_clients/client_11.png'
import client_12 from '../../assets/images/our_clients/client_12.png'
import client_13 from '../../assets/images/our_clients/client_13.png'
import client_14 from '../../assets/images/our_clients/client_14.png'
import client_15 from '../../assets/images/our_clients/client_15.png'
import client_16 from '../../assets/images/our_clients/client_16.png'
import client_17 from '../../assets/images/our_clients/client_17.png'
import client_18 from '../../assets/images/our_clients/client_18.png'
import Why_choose_image from '../../assets/images/AboutImage/AboutImage_1.jpeg'
import { Link } from 'react-router-dom'
// import { Owner_1, Owner_2} from '../../assets/index';

const ExpandableText = ({ text, limit = 120, className = "", isDarkBg = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (text.length <= limit) {
    return <p className={className}>{text}</p>;
  }

  const buttonColorClass = isDarkBg
    ? "text-white/80 hover:text-white"
    : "text-primary dark:text-[#a9c7ff] hover:opacity-80";

  return (
    <div className="flex flex-col items-start">
      <p className={className}>
        {isExpanded ? text : `${text.slice(0, limit)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none inline-flex items-center gap-1 ${buttonColorClass}`}
      >
        {isExpanded ? "View Less" : "..view more"}
        <span className="material-symbols-outlined text-sm">
          {isExpanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </button>
    </div>
  );
};

const HomePage = () => {
  const animRef = useScrollAnimation()

  return (
    <main className="mt-20" ref={animRef}>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <HeroPage></HeroPage>
      </section>
      {/* Conglomerate Businesses Grid Dashboard Section */}
      <Businesses />

      {/* Why Choose Us Section - Clean Modern Corporate */}
      <section className="bg-surface-container-low py-20 lg:py-20 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">

          {/* Centered Header */}
          <div data-animate="fade-up" className="text-center max-w-3xl mx-auto mb-16 lg:mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Why Choose SmartBrains
            </span>
            <h2 className="text-4xl md:text-5xl font-headline-lg text-primary mb-6 font-bold leading-tight">
             Trusted <span className="bg-clip-text text-primary font-bold">Execution</span>
            </h2>
            {/* <p className="text-lg text-on-surface-variant">
              Our  is reflected in our three-pillared approach to every project, delivering precision, timeliness, and unmatched quality.
            </p> */}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Side: Dramatic Image Presentation */}
            <div data-animate="fade-left" className="w-full lg:w-1/2 relative px-4 sm:px-10 lg:px-0">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square shadow-2xl group">
                <img
                  className="w-full h-full object-cover object-contain transition-transform duration-[2s] group-hover:scale-105"
                  alt="Architectural Excellence"
                  src={Why_choose_image}
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent mix-blend-multiply opacity-60"></div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-2 sm:bottom-12 sm:-left-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-[1.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-white/50 dark:border-slate-800/50 z-20 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#83aef5]">
                    16<span className="text-[#83aef5]">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant border-l-2 border-outline-variant/30 pl-4 sm:pl-6 leading-relaxed">
                    Years of <br /> Dedicated <br /> Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Feature List */}
            <div data-animate="stagger-up" className="w-full lg:w-1/2 flex flex-col gap-6 relative z-20 mt-8 lg:mt-0">

              {/* Item 1 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                   Integrated Solutions
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    We deliver end-to-end Skilling Projects, IT & ITeS Projects,  EPC, Agritech, STEM education, and digital transformation solutions through innovative design, advanced technology, and seamless execution.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                   On-Time Delivery
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                   Our experienced project teams ensure timely execution through structured planning, efficient resource management, and uncompromising quality standards across every engagement.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-headline-md text-primary mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
               Technical Excellence
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                    Driven by highly qualified engineers, agronomists, educators, and technology professionals, we provide reliable, sustainable, and future-ready solutions that create long-term value
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leading with Empathy Section - Modern Classic Corporate */}
      <section className="bg-slate-50 dark:bg-[#0c0e0f] py-20 lg:py-24 overflow-hidden relative border-t border-b border-slate-200/60 dark:border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] bg-[radial-gradient(#002a58_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">

          {/* Centered Header */}
          <div data-animate="fade-up" className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] font-bold text-xs tracking-widest uppercase mb-4 border border-primary/20">
              Social Impact &amp; Sustainability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-primary dark:text-white uppercase tracking-tight leading-tight font-serif">
              Leading with <span className="text-primary dark:text-[#a9c7ff]">Empathy</span>
            </h2>
           
            <div className="h-1 w-16 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* 2x2 Grid of Split Cards */}
          <div data-animate="stagger-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1: Education */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-primary text-white transition-all duration-300 group min-h-[260px]">
              <div className="sm:col-span-5 relative h-52 sm:h-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                  alt="Advancing Education and Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent sm:hidden" />
              </div>
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between bg-primary">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-white/10 text-[#a9c7ff] rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                    Education &amp; Skilling
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                    Advancing Education &amp; Technology
                  </h3>
                  <ExpandableText
                    text="SmartBrains plays a significant role in ensuring that every child, especially those from vulnerable communities, receives the opportunity to build a better future through education."
                    limit={120}
                    className="text-xs sm:text-sm opacity-90 leading-relaxed font-light"
                    isDarkBg={true}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Model Vocational Labs */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#121517] text-on-surface dark:text-white transition-all duration-300 group min-h-[260px]">
              <div className="sm:col-span-5 relative h-52 sm:h-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop"
                  alt="Model Vocational Labs and Training Centers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                    Infrastructure &amp; Labs
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-3 leading-snug">
                    Model Vocational Labs &amp; Training Centers
                  </h3>
                  <ExpandableText
                    text="We build sustainable villages, focusing on water, agriculture, health, education, community engagement, income generation, and entrepreneurship for a better society."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed"
                    isDarkBg={false}
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Sustainability & CSR */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#121517] text-on-surface dark:text-white transition-all duration-300 group min-h-[260px]">
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between order-2 sm:order-1">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                    Community &amp; CSR
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-3 leading-snug">
                    Sustainability &amp; CSR Initiatives
                  </h3>
                  <ExpandableText
                    text="We proudly support YUVA 2.0 project in New Delhi, empowering marginalized communities through solar PV training. Our comprehensive program safeguards youth from addiction, offering care, mentorship, and a purposeful life."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed"
                    isDarkBg={false}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-52 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
                  alt="Sustainability and CSR"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 4: AgriTech & Technology */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-primary text-white transition-all duration-300 group min-h-[260px]">
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between order-2 sm:order-1 bg-primary">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-white/10 text-[#a9c7ff] rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                    AgriTech &amp; Green Tech
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
                    AgriTech &amp; Technology Solutions
                  </h3>
                  <ExpandableText
                    text="As every living creature on this planet depends on nature for sustenance, environmental protection has become more important than ever before. We continue to pave this path of embracing sustainability & safeguarding the environment with our continuous efforts."
                    limit={120}
                    className="text-xs sm:text-sm opacity-90 leading-relaxed font-light"
                    isDarkBg={true}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-52 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop"
                  alt="AgriTech and Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

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
      {/* CTA Section */}
      <section data-animate="scale-up" className="bg-primary py-xl m-20 rounded-xl">
        <div className="max-w-[1280px] mx-auto px-gutter text-center text-on-primary">
          <h2 className="font-headline-lg text-headline-lg mb-md">
            Ready to Build the Future?
          </h2>
          <p className="font-body-lg text-body-lg mb-lg opacity-80 max-w-2xl mx-auto">
            Connect with our specialists today to discuss your next industrial
            project or institutional curriculum upgrade.
          </p>
          <div className="flex justify-center gap-md">
            <Link to={'/contact-us'} className="bg-on-primary text-primary px-xl py-sm font-bold uppercase text-label-sm tracking-widest transition-all hover:scale-105">
                Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>

  )
}

export default HomePage