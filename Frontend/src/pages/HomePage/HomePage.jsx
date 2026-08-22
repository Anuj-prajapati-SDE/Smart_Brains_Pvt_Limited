import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import HeroPage from './components/HeroPage'
import Businesses from './components/Businesses'
import Why_choose_image from '../../assets/images/AboutImage/AboutImage_1.jpeg'
import { Link } from 'react-router-dom'
import CompanySlider from '../../components/CompanySlider'
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
      <section className="bg-surface-container-low py-12 sm:py-16 lg:py-24 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[60px] sm:blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-gutter relative z-10">

          {/* Centered Header */}
          <div data-animate="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 border border-primary/20">
              Why Choose SmartBrains
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline-lg text-primary mb-3 sm:mb-4 font-bold leading-tight">
              Trusted <span className="bg-clip-text text-primary font-bold">Execution</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">

            {/* Left Side: Dramatic Image Presentation */}
            <div data-animate="fade-left" className="w-full lg:w-1/2 relative px-0 sm:px-4 lg:px-0 mb-4 sm:mb-6 lg:mb-0">
              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square shadow-xl sm:shadow-2xl group w-full">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
                  alt="Architectural Excellence"
                  src={Why_choose_image}
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent mix-blend-multiply opacity-60"></div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-4 left-4 sm:bottom-6 sm:-left-4 lg:bottom-8 lg:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 sm:p-5 lg:p-7 rounded-xl sm:rounded-[1.5rem] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] border border-white/60 dark:border-slate-800/60 z-20 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-500 max-w-[calc(100%-2rem)] sm:max-w-none">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#83aef5] shrink-0">
                    16<span className="text-[#83aef5]">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider text-on-surface-variant border-l-2 border-outline-variant/30 pl-3 sm:pl-4 lg:pl-6 leading-tight sm:leading-relaxed">
                    Years of <br /> Dedicated <br /> Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Feature List */}
            <div data-animate="stagger-up" className="w-full lg:w-1/2 flex flex-col gap-3.5 sm:gap-4 lg:gap-5 relative z-20 mt-4 sm:mt-6 lg:mt-0">

              {/* Item 1 */}
              <div className="group bg-white dark:bg-slate-900 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-row gap-3.5 sm:gap-5 lg:gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                    precision_manufacturing
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg lg:text-xl font-headline-md text-primary mb-1 sm:mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors font-bold">
                    Integrated Solutions
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm lg:text-base font-normal">
                    We deliver end-to-end Skilling Projects, IT & ITeS Projects, EPC, Agritech, STEM education, and digital transformation solutions through innovative design, advanced technology, and seamless execution.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group bg-white dark:bg-slate-900 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-row gap-3.5 sm:gap-5 lg:gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                    schedule
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg lg:text-xl font-headline-md text-primary mb-1 sm:mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors font-bold">
                    On-Time Delivery
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm lg:text-base font-normal">
                    Our experienced project teams ensure timely execution through structured planning, efficient resource management, and uncompromising quality standards across every engagement.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group bg-white dark:bg-slate-900 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-[2rem] border border-outline-variant/40 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-row gap-3.5 sm:gap-5 lg:gap-6 items-start relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-500 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                    verified
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg lg:text-xl font-headline-md text-primary mb-1 sm:mb-2 group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors font-bold">
                    Technical Excellence
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm lg:text-base font-normal">
                    Driven by highly qualified engineers, agronomists, educators, and technology professionals, we provide reliable, sustainable, and future-ready solutions that create long-term value.
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
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-primary dark:text-white uppercase tracking-tight leading-tight">
          Empowering Enterprises with Future-Ready Digital Solutions
            </h2>
           
            <div className="h-1 w-16 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* 2x2 Grid of Split Cards */}
          <div data-animate="stagger-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1: Education */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-gradient-to-br from-primary via-[#002a58] to-[#00152b] text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-5 relative h-56 sm:h-full  overflow-hidden bg-slate-900">
                <img
                  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1785850031/ChatGPT_Image_Aug_4_2026_06_55_52_PM_cojnmu.png"
                  alt="Advancing Education and Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-primary/90" />
              </div>
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/15 backdrop-blur-md mb-3">
                      DIGITAL TRANSFORMATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug tracking-tight text-white group-hover:text-[#a9c7ff] transition-colors">
                 Innovative IT Solutions for the Digital Enterprise
                  </h3>
                  <ExpandableText
                    text="We empower businesses with cutting-edge IT solutions, cloud technologies, enterprise applications, cybersecurity, and digital transformation services. Our experienced professionals help organizations modernize their infrastructure, improve operational efficiency, and accelerate business growth through innovative technology solutions."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed"
                    isDarkBg={true}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Model Vocational Labs */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-white dark:bg-[#121517] text-on-surface dark:text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900">
                <img
                  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1785851169/ChatGPT_Image_Aug_4_2026_07_15_50_PM_qcmacc.png"
                  alt="Model Vocational Labs and Training Centers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-primary/20 dark:border-[#a9c7ff]/20 mb-3">
                  IT INFRASTRUCTURE &amp; DATA CENTERS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-3 leading-snug tracking-tight group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                    Modern Infrastructure & Managed IT Services
                  </h3>
                  <ExpandableText
                    text="We design, deploy, and manage scalable IT infrastructure including data centers, cloud platforms, network architecture, server virtualization, storage solutions, and disaster recovery systems. Our services ensure maximum uptime, security, and business continuity for enterprises of all sizes."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed"
                    isDarkBg={false}
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Sustainability & CSR */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-white dark:bg-[#121517] text-on-surface dark:text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between order-2 sm:order-1 relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-primary/20 dark:border-[#a9c7ff]/20 mb-3">
                   ADVANCED DIGITAL SOLUTIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-3 leading-snug tracking-tight group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                  Building Intelligent Business Applications
                  </h3>
                  <ExpandableText
                    text="From custom software development to enterprise applications, web platforms, mobile applications, AI-powered solutions, and business process automation, we deliver scalable digital products that transform customer experiences and improve organizational productivity."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed"
                    isDarkBg={false}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1785852357/ChatGPT_Image_Aug_4_2026_07_24_41_PM_rtywrv.png"
                  alt="Sustainability and CSR"
                  className="w-full h-full object-[80% 100%] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Card 4: SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS*/}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-gradient-to-br from-primary via-[#002a58] to-[#00152b] text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between order-2 sm:order-1 relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/15 backdrop-blur-md mb-3">
                     CYBERSECURITY &amp; COMPLIANCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug tracking-tight text-white group-hover:text-[#a9c7ff] transition-colors">
                    Protecting Businesses in a Connected World
                  </h3>
                  <ExpandableText
                    text="Our comprehensive cybersecurity solutions safeguard your digital assets through threat monitoring, endpoint protection, network security, vulnerability assessments, security audits, compliance management, and 24×7 Security Operations Center (SOC) services."
                    limit={120}
                    className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed"
                    isDarkBg={true}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://res.cloudinary.com/dobfsabnz/image/upload/v1785851982/Screenshot_2026-08-04_192431_xbuxq9.png"
                  alt="AgriTech and Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent sm:bg-gradient-to-l sm:from-transparent sm:to-primary/90" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Major Clients Section */}
     <CompanySlider/>
      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-10 sm:my-14 lg:my-20">
        <div
          data-animate="scale-up"
          className="max-w-[1280px] mx-auto bg-gradient-to-br from-primary via-[#003366] to-[#001f3f] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#a9c7ff]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/10 text-[#a9c7ff] rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-white/15">
              Start Your Journey
            </span>
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black mb-3 sm:mb-4 tracking-tight uppercase leading-tight">
              Ready to Build the Future?
            </h4>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 font-light opacity-90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Connect with our specialists today to discuss your next industrial project or institutional curriculum upgrade.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold uppercase text-xs sm:text-sm tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default HomePage