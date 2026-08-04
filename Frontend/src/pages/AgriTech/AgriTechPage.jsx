import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
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
const AgriTechPage = () => {
  const animRef = useScrollAnimation()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonialSlides = [
    {
      id: 1,
      quote: "InHydro has a wide range of learning material which I used when entering the area of hydroponic farming. It must be said that their guides, tutorials, and workshops are very comprehensive and elaborate.",
      author: "Ravi Tiwari",
      location: "Haryana",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Wall-System_tmekfm.webp"
    },
    {
      id: 2,
      quote: "Setting up our commercial polyhouse and hydroponic farm with SmartBrains & InHydro was seamless. Their IoT climate controllers and nutrient advisory helped us double our yield in season one.",
      author: "Anand Sharma",
      location: "Punjab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/NFT-CHANNELS_achib0.webp"
    },
    {
      id: 3,
      quote: "The HaaS (Hydroponics as a Service) model eliminated our upfront CapEx risks. The team manages daily farm telemetry, water testing, and crop health with extreme professionalism.",
      author: "Priya Patel",
      location: "Gujarat",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Dutch-Bucket1-_fkqaww.webp"
    },
    {
      id: 4,
      quote: "InHydro’s food-grade HDPE NFT channels and Dutch buckets are top-notch. UV-stabilized, highly durable, and designed for optimal nutrient flow. Highly recommended for commercial growers.",
      author: "Vikram Reddy",
      location: "Telangana",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Untitled-design-74-e1769517128220_a2dcbn.webp"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonialSlides.length])

  const featuredProducts = [
    {
      id: "nft-channels",
      title: "HYDROPONICS NFT CHANNELS",
      subtitle: "Food-Grade & UV-Stabilized NFT Channels",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/NFT-CHANNELS_achib0.webp",
      desc: "InHydro manufactures best quality durable HDPE and UPVC NFT channels for excellent nutrient delivery and optimal plant growth which you need.",
      material: "FDA-Approved 100% Virgin HDPE & UPVC",
      features: [
        "100% Virgin UV-Stabilized Material",
        "Smooth Inner Surface for Rapid Flow",
        "Removable Top Lid for Easy Cleaning",
        "Prevents Algae & Root Disease"
      ],
      link: "https://inhydro.in/"
    },
    {
      id: "dutch-buckets",
      title: "HYDROPONICS DUTCH BUCKETS",
      subtitle: "Heavy-Duty Bato Buckets & Siphon Systems",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Dutch-Bucket1-_fkqaww.webp",
      desc: "InHydro manufactures Dutch Buckets in HDPE & PP, offering superior quality & durability efficient ideal for growing larger plants.",
      material: "FDA-Approved HDPE & Polypropylene (PP)",
      features: [
        "Dual Siphon Elbow Drain Kit",
        "Ideal for Tomatoes, Cucumbers & Peppers",
        "UV Weatherproof Heavy Duty Design",
        "Compatible with Drain-to-Waste & Recirculating"
      ],
      link: "https://inhydro.in/"
    },
    {
      id: "vertical-wall",
      title: "VERTICAL GARDEN WALL",
      subtitle: "Modular Space-Saving Living Walls",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Wall-System_tmekfm.webp",
      desc: "InHydro's vertical garden walls combine space-saving design ensuring efficient nutrient delivery and optimal plant growth and production.",
      material: "High-Density UV-Resistant PP Polymer",
      features: [
        "Built-in Micro Drip Irrigation Channels",
        "Expandable Modular Grid System",
        "Weatherproof Indoor & Outdoor Use",
        "Optimal Vertical Water Distribution"
      ],
      link: "https://inhydro.in/"
    },
    {
      id: "grow-light",
      title: "GROW LIGHT",
      subtitle: "Full-Spectrum LED Indoor Crop Lighting",
      image: "https://res.cloudinary.com/dobfsabnz/image/upload/v1785496513/Untitled-design-74-e1769517128220_a2dcbn.webp",
      desc: "InHydro grow lights power vertical gardens with efficient design and consistent light for faster, healthier plant growth year-round in indoor farming systems.",
      material: "Aviation-Grade Anodized Aluminum Housing",
      features: [
        "PAR Optimized Spectrum for All Growth Stages",
        "Ultra Energy Efficient LED Diodes",
        "Passive Cooling - Zero Noise Emission",
        "50,000+ Hours Operational Lifespan"
      ],
      link: "https://inhydro.in/"
    }
  ]

  const coreOfferings = [
    {
      id: 1,
      title: "HYDROPONICS FARM SOLUTIONS",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
      desc: "Complete setup of NFT systems, Dutch Buckets, Vertical Towers, Grow Bags and Indoor Farms for sustainable, high-yield crop production."
    },
    {
      id: 2,
      title: "GREENHOUSE INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=800&auto=format&fit=crop",
      desc: "Design and construction of climate-controlled greenhouses and polyhouses for commercial agriculture, protecting crops against environmental extremes."
    },
    {
      id: 3,
      title: "FARM AUTOMATION & IOT INTEGRATION",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      desc: "Smart farm automation with IoT sensors, climate control systems and remote monitoring — giving complete control over irrigation, nutrients and climate."
    },
    {
      id: 4,
      title: "AGRI-TECH & BUSINESS ADVISORY",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
      desc: "Expert consulting in hydroponic farming systems, crop planning, nutrient management, pest control and project feasibility — helping home growers, farmers and commercial businesses grow smart and scale fast."
    },
    {
      id: 5,
      title: "TRAINING & EDUCATION PROGRAMS",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      desc: "Practical training, workshops and certification courses for students, professionals and farmers — learn soilless farming, polyhouse setup and advanced vertical farming operations with hands-on experience."
    },
    {
      id: 6,
      title: "URBAN FARMING SOLUTIONS",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
      desc: "Modular, space-saving hydroponic farming systems for rooftops, balconies, kitchens and offices — bringing fresh vertical farming and soilless farming solutions closer to homes and cities. Grow anywhere, always."
    },
    {
      id: 7,
      title: "UTILITY & POST-HARVEST SOLUTIONS",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
      desc: "Integrated hydroponic farm infrastructure including RO water systems, solar power units, cold storage and packaging lines — ensuring a seamless farm-to-market journey for commercial growers."
    },
    {
      id: 8,
      title: "HYDROPONICS EQUIPMENT MANUFACTURING",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      desc: "Precision-made hydroponic equipment including NFT channels, Dutch buckets, net pots, and vertical systems — crafted in-house using food-grade HDPE and PP for home and commercial use."
    },
    {
      id: 9,
      title: "RESEARCH & INNOVATION",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      desc: "Continuous R&D to develop soilless crop production methods, optimize system performance and advance sustainable greenhouse farming technologies for the future."
    }
  ]

  const services = [
    {
      id: "business-consulting",
      icon: "handshake",
      title: "Business Consulting Service",
      subtitle: "Advisory & Feasibility Studies",
      desc: "InHydro offers industry-leading business planning, advisory services, and feasibility studies to help hydroponic enterprises thrive.",
      highlights: ["Feasibility Study", "Crop Advisory"]
    },
    {
      id: "haas",
      icon: "eco",
      title: "Hydroponics As A Service (HaaS)",
      subtitle: "Zero CapEx Turnkey Farming",
      desc: "Get a fully managed hydroponic farm for a fixed monthly fee with zero initial investment or operational challenges.",
      highlights: ["Zero Upfront CapEx", "Fixed Monthly"]
    },
    {
      id: "om-service",
      icon: "engineering",
      title: "Operation and Maintenance (O&M)",
      subtitle: "Full Spectrum System Management",
      desc: "End-to-end system management from installation to daily operations, optimizing system performance and ROI.",
      highlights: ["Daily Operations", "ROI Optimization"]
    },
    {
      id: "agronomy-service",
      icon: "agriculture",
      title: "Agronomy Service To Farmers",
      subtitle: "Precision Crop & Nutrient Mgmt",
      desc: "Expert crop nutrient management, pest control, and growth monitoring to maximize sustainable yields.",
      highlights: ["Nutrient Precision", "Yield Maximization"]
    },
    {
      id: "training-service",
      icon: "school",
      title: "Hydroponics Training Service",
      subtitle: "Fundamental & Advanced Skilling",
      desc: "Comprehensive fundamental and advanced hydroponic training with hands-on learning for individuals and corporate clients.",
      highlights: ["Hands-On Labs", "Certification"]
    },
    {
      id: "amc-service",
      icon: "verified_user",
      title: "Annual Maintenance Contract (AMC)",
      subtitle: "Preventative & Peak Performance",
      desc: "Year-long preventative maintenance plan with regular technical visits to ensure peak system efficiency and zero downtime.",
      highlights: ["Year-Long Plan", "Tech Visits"]
    }
  ]

  const stats = [
    { value: "90%", label: "Water Savings", icon: "water_drop" },
    { value: "10X", label: "Higher Yield", icon: "trending_up" },
    { value: "0%", label: "Chemical and PEST", icon: "eco" },
    { value: "50%", label: "Higher Plant Density", icon: "grid_view" }
  ]

  const advantages = [
    {
      icon: "water_drop",
      title: "Sustainable Resource Mgmt",
      desc: "Closed-loop hydroponic systems reduce water usage by up to 90% while recycling nutrients efficiently."
    },
    {
      icon: "insights",
      title: "Data-Driven Decisions",
      desc: "Continuous telemetry provides actionable insight for fertilizer balance, pH, and pest control."
    },
    {
      icon: "published_with_changes",
      title: "Turnkey Maintenance",
      desc: "Dedicated AMC and O&M packages guarantee high system uptime and hassle-free operation."
    },
    {
      icon: "military_tech",
      title: "Expert Agronomy Support",
      desc: "Seasoned agronomists deliver tailored crop recipes and continuous yield optimization."
    }
  ]

  return (
    <main className="mt-20 min-h-screen bg-background dark:bg-[#0c0e0f] text-on-surface dark:text-white" ref={animRef}>
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1600&auto=format&fit=crop"
            alt="Vertical hydroponic crops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 w-full">
          <div className="max-w-2xl">
            <span data-animate="fade-up" className="inline-block bg-white/10 border border-white/20 text-[#a9c7ff] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Modern AgriTech Verticals
            </span>
            <h1 data-animate="fade-up" data-animate-delay="0.1" className="font-headline-xl text-3xl sm:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
              AgriTech Solutions
            </h1>
            <p data-animate="fade-up" data-animate-delay="0.2" className="text-sm sm:text-base text-slate-300 font-light mb-6 leading-relaxed">
              Your complete partner for hydroponic farming systems, greenhouse construction, vertical farming and soilless solutions.
            </p>
            <div data-animate="fade-up" data-animate-delay="0.3">
              <Link to="/contact-us" className="inline-block px-5 py-3 bg-white text-primary hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md">
                Configure SmartFarm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hydroponics: Future of Farming Intro Section */}
      <section className="py-10 sm:py-14 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50 to-primary/5 dark:from-[#121517] dark:via-[#161a1d] dark:to-[#0c0e0f] border border-slate-200/80 dark:border-white/10 p-6 sm:p-10 shadow-lg overflow-hidden">
          {/* Subtle Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 dark:bg-[#a9c7ff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            {/* Top Pill Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 dark:bg-[#a9c7ff]/10 border border-primary/20 dark:border-[#a9c7ff]/20 rounded-full text-primary dark:text-[#a9c7ff] text-xs font-bold uppercase tracking-widest shadow-sm">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              Sustainable Agriculture Vision
            </span>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-white tracking-tight uppercase font-serif leading-tight">
              Hydroponics: Future of Farming
            </h2>

            {/* Main Paragraph */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed text-center max-w-3xl mx-auto">
              In a world facing climate change, and population growth, traditional farming methods are becoming increasingly unsustainable due to water scarcity, soil degradation, and the pressures of feeding a large population. Hydroponics, a method of growing plants without soil, offers a promising solution. At <strong className="text-primary dark:text-[#a9c7ff] font-bold">InHydro & SmartBrains</strong>, we’re at the forefront of this agricultural evolution, committed to promoting hydroponics as the future of farming.
            </p>

            {/* How We Operate in AgriTech - 3 Core Pillars */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1a1e21]/80 border border-slate-200/50 dark:border-white/5 shadow-sm hover:border-primary/30 dark:hover:border-[#a9c7ff]/30 transition-all">
                <div className="flex items-center gap-2 mb-2 text-primary dark:text-[#a9c7ff] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[20px] text-primary dark:text-[#a9c7ff]">precision_manufacturing</span>
                  <span>1. Smart Equipment</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Manufacturing FDA-approved, UV-stabilized virgin HDPE NFT channels, Dutch buckets, and vertical walls.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1a1e21]/80 border border-slate-200/50 dark:border-white/5 shadow-sm hover:border-primary/30 dark:hover:border-[#a9c7ff]/30 transition-all">
                <div className="flex items-center gap-2 mb-2 text-primary dark:text-[#a9c7ff] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[20px] text-primary dark:text-[#a9c7ff]">sensors</span>
                  <span>2. IoT & Automation</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Integrating automated fertigation, real-time nutrient sensors, and climate telemetry for maximum crop yield.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#1a1e21]/80 border border-slate-200/50 dark:border-white/5 shadow-sm hover:border-primary/30 dark:hover:border-[#a9c7ff]/30 transition-all">
                <div className="flex items-center gap-2 mb-2 text-primary dark:text-[#a9c7ff] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[20px] text-primary dark:text-[#a9c7ff]">psychology_alt</span>
                  <span>3. Turnkey Agronomy</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Delivering end-to-end HaaS, farm setup feasibility advisory, training labs, and continuous agronomy support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Stats Counter Bar */}
      <section className="bg-slate-100 dark:bg-[#121517] border-b border-slate-200/80 dark:border-white/5 py-10">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-animate="stagger-up">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#1a1e21] border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
              >
                {/* Top Hover Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-[#a9c7ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container with Rotate & Zoom Animation */}
                <div className="w-12 h-12 mb-3 rounded-2xl bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-[#a9c7ff] dark:group-hover:text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">{st.icon}</span>
                </div>

                {/* Stat Value with Hover Scale */}
                <div className="text-2xl sm:text-4xl font-black text-primary dark:text-[#a9c7ff] mb-1 font-mono group-hover:scale-105 transition-transform duration-300">
                  {st.value}
                </div>

                {/* Stat Label */}
                <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What We Do! / Our Core Offerings Section - Compact Layout */}
      <section className="py-8 sm:py-10 max-w-[1280px] mx-auto px-gutter">
        {/* Section Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-6" data-animate="fade-up">
          <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-full text-[11px] font-bold uppercase tracking-widest mb-2">
            Core AgriTech Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-white tracking-tight uppercase leading-tight font-serif">
            What We Do!
          </h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-2 rounded-full" />
        </div>

        {/* 6 Core Offerings Cards Grid (Compact Height) */}
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-animate="stagger-up">
            {coreOfferings.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-[#121517] rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Hover Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-[#a9c7ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Number Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-primary/90 dark:bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/20 shadow-sm">
                  0{idx + 1}
                </div>

                {/* Compact Image Header */}
                <div className="relative w-full h-36 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>

                {/* Compact Content Body */}
                <div className="p-4 flex flex-col flex-grow justify-between text-center bg-white dark:bg-[#121517]">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-primary dark:text-white mb-1.5 uppercase tracking-wide leading-snug group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-light leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydroponics Featured Products Section (FDA-Approved, UV-Stabilized) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#101315] border-t border-b border-slate-200/70 dark:border-white/5 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12" data-animate="fade-up">
            <h2 className="text-2xl sm:text-4xl font-semibold text-primary dark:text-white tracking-tight uppercase leading-tight font-serif">
              Hydroponics Featured Products
            </h2>
            
            {/* Tagline Subtitle Badge */}
            <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-[#a9c7ff]/10 border border-primary/20 dark:border-[#a9c7ff]/20 rounded-full text-primary dark:text-[#a9c7ff] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="material-symbols-outlined text-primary dark:text-[#a9c7ff] text-[18px]">verified</span>
              <span>Made From FDA-Approved, UV-Stabilized, 100% Virgin HDPE And PP Material</span>
            </div>
            
            <div className="w-16 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-4 rounded-full" />
          </div>

          {/* 4 Featured Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-animate="stagger-up">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white dark:bg-[#161a1d] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Header */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />
                  {/* <div className="absolute top-3 right-3 bg-primary/90 dark:bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    Virgin Grade
                  </div> */}
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between text-center">
                  <div>
                    <h3 className="text-base font-bold text-primary dark:text-white mb-2 uppercase tracking-wide leading-tight group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Read More Action Button */}
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="w-full py-2.5 px-4 bg-transparent hover:bg-primary text-primary hover:text-white dark:text-[#a9c7ff] dark:hover:bg-[#a9c7ff] dark:hover:text-primary border-2 border-primary dark:border-[#a9c7ff] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group/btn shadow-sm"
                    >
                      <span>READ MORE</span>
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Hydroponics Business Services Section - Compact Layout */}
      <section id="services" className="py-8 sm:py-10 max-w-[1280px] mx-auto px-gutter border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="text-center max-w-2xl mx-auto mb-6" data-animate="fade-up">
          <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] rounded-full text-[11px] font-bold uppercase tracking-widest mb-2">
            Commercial Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-primary dark:text-white uppercase font-serif">
            Our Hydroponics Services
          </h2>
          <div className="w-12 h-1 bg-primary dark:bg-[#a9c7ff] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* 6 Core Service Cards (Compact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-animate="stagger-up">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="group relative bg-white dark:bg-[#121517] rounded-xl border border-slate-200/80 dark:border-white/10 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Decorative Highlight Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-[#a9c7ff] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Row: Icon + Subtitle Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-[#a9c7ff] dark:group-hover:text-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-[22px]">{srv.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                    {srv.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-base font-bold text-primary dark:text-white mb-1.5 group-hover:text-primary dark:group-hover:text-[#a9c7ff] transition-colors leading-snug">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-3 line-clamp-3">
                  {srv.desc}
                </p>
              </div>

              {/* Know More Action Button */}
              <div className="pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-end">
                <a
                  href="https://inhydro.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 dark:bg-[#a9c7ff]/10 hover:bg-primary hover:text-white dark:hover:bg-[#a9c7ff] dark:hover:text-primary text-primary dark:text-[#a9c7ff] rounded-lg text-[11px] font-bold transition-all group/btn"
                >
                  <span>Know More</span>
                  <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose SmartBrains AgriTech */}
      <section className="py-24 max-w-[1280px] mx-auto px-gutter border-t border-slate-200/60 dark:border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5" data-animate="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-[#a9c7ff]">
              Why Choose SmartBrains
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary dark:text-white uppercase font-serif leading-tight">
              Pioneering High-Yield Hydroponic Excellence
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We bridge traditional farming with cutting-edge automation, custom nutrient formulations, and year-round operational reliability.
            </p>

            <div className="pt-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary-container transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
              >
                <span>Schedule Feasibility Consultation</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-animate="stagger-up">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#121517] border border-slate-200/60 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-[#a9c7ff]/10 text-primary dark:text-[#a9c7ff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">{adv.icon}</span>
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 text-sm uppercase tracking-wide">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonial & Farm Showcase Slider Section */}
      <section className="pb-16 sm:pb-20 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
        {/* Responsive 2-Column Card Slider (30% Left Fixed, 70% Right Slider) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-primary dark:bg-[#121517] border border-slate-200/50 dark:border-white/10 grid grid-cols-1 lg:grid-cols-10 min-h-[380px] sm:min-h-[440px]">
          
          {/* Left Column: Fixed Content (30% width) */}
          <div className="lg:col-span-3 p-6 sm:p-10 flex flex-col justify-between relative bg-primary dark:bg-[#121517] text-white">
          
          
            {/* Fixed Heading & Content */}
            <div className="my-auto space-y-4 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-white/20">
                Farm Showcase
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight text-white">
                Pioneering Hydroponic Excellence
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                Explore real commercial polyhouses, high-density NFT systems, and automated climate solutions built and backed by SmartBrains & InHydro.
              </p>
            </div>

            {/* Fixed Footer info */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold text-slate-200">SmartBrains & InHydro</span>
              <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full font-mono border border-white/10">100+ Projects</span>
            </div>
          </div>

          {/* Right Column: Sliding Image & Testimonial Showcase (70% width) */}
          <div className="lg:col-span-7 relative h-[300px] sm:h-[380px] lg:h-auto bg-slate-900 overflow-hidden group">
            {/* Top Right Live Badge */}
            <div className="absolute top-4 right-4 z-20 bg-primary/90 dark:bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-md">
              Hydroponics Site Showcase
            </div>

            {/* Left Chevron Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonialSlides.length - 1 : prev - 1))}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/20 shadow-lg"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonialSlides.length)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 active:scale-95 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/20 shadow-lg"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_right</span>
            </button>

            {/* Sliding Images */}
            {testimonialSlides.map((slide, idx) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.author}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />
            ))}

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Dynamic Quote & Slide Indicators Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-20 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <p className="text-xs sm:text-sm text-slate-100 font-light italic leading-relaxed font-serif">
                  "{testimonialSlides[currentSlide].quote}"
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-300">
                  — {testimonialSlides[currentSlide].author}, <span className="font-normal text-slate-400">{testimonialSlides[currentSlide].location}</span>
                </p>
              </div>

              {/* Slide Dots */}
              <div className="flex items-center gap-1.5 shrink-0 self-center sm:self-end">
                {testimonialSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

{/* Major Clients Section */}
      <section className="py-10 pb-20 relative overflow-hidden">
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
      {/* Bottom CTA Banner */}
      <section className="pb-24 max-w-[1280px] mx-auto px-gutter" data-animate="fade-up">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-[#003b7a] to-primary overflow-hidden p-8 sm:p-12 text-white shadow-2xl flex flex-col items-center text-center">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
            <span className="material-symbols-outlined text-[320px]">agriculture</span>
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-center text-center">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-widest text-[#a9c7ff] mb-4">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4 font-serif leading-tight">
              Ready To Modernize Your Hydroponic Enterprise?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 font-light mb-8 leading-relaxed">
              Connect with our team of agronomists and SmartFarm hardware specialists for custom HaaS plans, feasibility studies, and AMC contracts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="px-7 py-3.5 bg-white text-primary hover:bg-slate-100 transition-all font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg"
              >
                Contact AgriTech Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white dark:bg-[#181c1f] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden text-on-surface dark:text-white">
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 w-full bg-slate-900">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <div className="absolute bottom-3 left-4 bg-primary text-white dark:bg-[#a9c7ff] dark:text-primary text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {selectedProduct.material}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="text-xl font-black text-primary dark:text-white uppercase tracking-tight mb-1">
                {selectedProduct.title}
              </h3>
              <p className="text-xs font-semibold text-primary/80 dark:text-[#a9c7ff] mb-4">
                {selectedProduct.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {selectedProduct.desc}
              </p>

              {/* Key Specifications */}
              <div className="bg-slate-50 dark:bg-[#111416] p-4 rounded-2xl border border-slate-200/60 dark:border-white/5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-[#a9c7ff] mb-2.5">
                  Key Specifications & Advantages
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary dark:text-[#a9c7ff] text-[16px]">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-primary hover:bg-primary-container text-white text-center font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Visit Product Specs (InHydro)
                </a>
                <Link
                  to="/contact-us"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-primary dark:text-white text-center font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Inquire Bulk Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AgriTechPage
