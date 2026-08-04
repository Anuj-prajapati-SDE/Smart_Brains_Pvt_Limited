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
          Empowering Enterprises with Future-Ready Digital Solutions
            </h2>
           
            <div className="h-1 w-16 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* 2x2 Grid of Split Cards */}
          <div data-animate="stagger-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Card 1: Education */}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-gradient-to-br from-primary via-[#002a58] to-[#00152b] text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                  alt="Advancing Education and Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-primary/90" />
              </div>
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/15 backdrop-blur-md mb-3">
                      DIGITAL TRANSFORMATION IT SER
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
                  src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop"
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
                    Security &amp; Risk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-3 leading-snug tracking-tight group-hover:text-[#004080] dark:group-hover:text-[#a9c7ff] transition-colors">
                    CYBERSECURITY &amp; COMPLIANCE
                  </h3>
                  <ExpandableText
                    text="Protecting Businesses in a Connected World"
                    limit={120}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed"
                    isDarkBg={false}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
                  alt="Sustainability and CSR"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Card 4: SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS*/}
            <div className="grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-3xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 bg-gradient-to-br from-primary via-[#002a58] to-[#00152b] text-white transition-all duration-500 group min-h-[280px] relative">
              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between order-2 sm:order-1 relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 text-[#a9c7ff] rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/15 backdrop-blur-md mb-3">
                    Software &amp; Applications
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug tracking-tight text-white group-hover:text-[#a9c7ff] transition-colors">
                    SOFTWARE DEVELOPMENT &amp; DIGITAL SOLUTIONS
                  </h3>
                  <ExpandableText
                    text="Building Intelligent Business Applications"
                    limit={120}
                    className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed"
                    isDarkBg={true}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 relative h-56 sm:h-full overflow-hidden bg-slate-900 order-1 sm:order-2">
                <img
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop"
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