import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const businessesData = [
  {
    name: "EPC Projects Oil,Gas & Energy",
    subVerticals: ["Airports", "Data Center", "Defence & Aerospace", "Road, Metro & Rail"],
    bgImage: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Infrastructure Developers Ltd.",
    companyCode: "SBINFRA",
    companyDesc: "Developing world-class transport nodes, national defense systems, and high-performance secure data storage facilities.",
    sharePrice: "₹452.85",
    shareChange: "+1.85%"
  },
  {
    name: "Skilling Projects",
    subVerticals: ["Power Generation", "Transmission", "Green Hydrogen", "Water Utility"],
    bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Green Energy & Power Ltd.",
    companyCode: "SBGREEN",
    companyDesc: "Pioneering sustainable power solutions through solar grids, wind turbine installations, and utility water purification.",
    sharePrice: "₹312.40",
    shareChange: "+2.40%"
  },
  {
    name: "Staffing Projects",
    subVerticals: ["Ports & Terminals", "Logistics Parks", "Rail Logistics", "Cold Chain"],
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Ports & Economic Zones Ltd.",
    companyCode: "SBPORTS",
    companyDesc: "Operating major international sea terminals, advanced dry ports, cargo logistics corridors, and temperature-controlled hubs.",
    sharePrice: "₹680.10",
    shareChange: "+0.95%"
  },
  {
    name: "STEAM Education",
    subVerticals: ["Cement", "Aggregates", "High-grade Steel", "Asphalt"],
    bgImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Cement & Steel Ltd.",
    companyCode: "SBMATERIALS",
    companyDesc: "Supplying core architectural assets with high-tensile reinforcement steel bars, aggregates, and eco-friendly cement brands.",
    sharePrice: "₹248.30",
    shareChange: "+1.20%"
  },
  {
    name: "CSR Projects",
    subVerticals: ["Broadcasting", "Entertainment", "Digital Publishing", "Out-of-home Media"],
    bgImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Media Broadcasting Ltd.",
    companyCode: "SBMEDIA",
    companyDesc: "Connecting audiences through regional news channels, entertainment productions, and modern digital print spaces.",
    sharePrice: "₹95.15",
    shareChange: "+3.60%"
  },
  {
    name: "IT Services",
    subVerticals: ["Managed Hybrid Cloud ", "DevOPS and Automation", "Network and Security ", "Monitoring ", "Server Management", "Web Hosting", " Help Desk", "System Integration"],
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Realty & Infrastructure Ltd.",
    companyCode: "SBREALTY",
    companyDesc: "Designing urban corporate complexes, integrated residential smart townships, high-performance IT parks, and retail corridors.",
    sharePrice: "₹820.70",
    shareChange: "+0.80%"
  },
  {
    name: "Construction and Earthworks",
    subVerticals: ["Sports Venues", "Athlete Training", "Equipment & Gear", "Sports Tech"],
    bgImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Sports & Arenas Ltd.",
    companyCode: "SBSPORTS",
    companyDesc: "Managing major regional sports complex infrastructures, athlete development academies, and tech-driven event hubs.",
    sharePrice: "₹143.20",
    shareChange: "+0.15%"
  },
  {
    name: "AgriTech Solutions SmartFarm Setup",
    subVerticals: ["Sports Venues", "Athlete Training", "Equipment & Gear", "Sports Tech"],
    bgImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Sports & Arenas Ltd.",
    companyCode: "SBSPORTS",
    companyDesc: "Managing major regional sports complex infrastructures, athlete development academies, and tech-driven event hubs.",
    sharePrice: "₹143.20",
    shareChange: "+0.15%"
  },
  {
    name: "Vocational & STEM Labs",
    subVerticals: ["Sports Venues", "Athlete Training", "Equipment & Gear", "Sports Tech"],
    bgImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop",
    companyName: "SmartBrains Sports & Arenas Ltd.",
    companyCode: "SBSPORTS",
    companyDesc: "Managing major regional sports complex infrastructures, athlete development academies, and tech-driven event hubs.",
    sharePrice: "₹143.20",
    shareChange: "+0.15%"
  }
];

const partnersData = [
  {
    name: "IT OEM & Service",
    subVerticals: ["Cloud Solutions", "AI Integration", "Cybersecurity", "IoT Systems"],
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780487550/Screenshot_334_puuvqr.png",
    companyName: "TechCorp Global Alliances",
    companyCode: "TECHCORP",
    companyDesc: "Collaborating to deliver cutting-edge digital transformation and enterprise-grade technology ecosystems.",
    sharePrice: "₹1,245.00",
    shareChange: "+4.20%"
  },
  {
    name: "State Skill Mission",
    subVerticals: ["Cloud Solutions", "AI Integration", "Cybersecurity", "IoT Systems"],
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132733/Screenshot_319_xkuhku.png",
    companyName: "TechCorp Global Alliances",
    companyCode: "TECHCORP",
    companyDesc: "Collaborating to deliver cutting-edge digital transformation and enterprise-grade technology ecosystems.",
    sharePrice: "₹1,245.00",
    shareChange: "+4.20%"
  },
  {
    name: "Sector Skill Council",
    subVerticals: ["Investment Banking", "Venture Capital", "Asset Management", "FinTech Services"],
    bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132739/Screenshot_320_jwbmki.png",
    companyName: "Apex Financial Holdings",
    companyCode: "APEXFIN",
    companyDesc: "Providing strategic capital, robust financial structuring, and innovative fiscal solutions for large-scale projects.",
    sharePrice: "₹890.50",
    shareChange: "-1.15%"
  },
  {
    name: "Central Government Skill Project & Schemes",
    subVerticals: ["Carbon Neutrality", "Waste Management", "Green Certifications", "Eco-Logistics"],
    bgImage: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132747/Screenshot_321_rq4cua.png",
    companyName: "EcoVision Enterprises",
    companyCode: "ECOVIS",
    companyDesc: "Driving environmental compliance, sustainable supply chains, and green operational frameworks.",
    sharePrice: "₹342.75",
    shareChange: "+2.80%"
  },
  {
    name: "Empanelment with PSUs",
    subVerticals: ["Carbon Neutrality", "Waste Management", "Green Certifications", "Eco-Logistics"],
    bgImage: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=500&auto=format&fit=crop",
    largeImage: "https://res.cloudinary.com/dobfsabnz/image/upload/v1780132756/Screenshot_322_mgyovw.png",
    companyName: "EcoVision Enterprises",
    companyCode: "ECOVIS",
    companyDesc: "Driving environmental compliance, sustainable supply chains, and green operational frameworks.",
    sharePrice: "₹342.75",
    shareChange: "+2.80%"
  }
];

const itServicesRoutes = {
  "Managed Hybrid Cloud": "/managed-hybrid-cloud",
  "DevOPS and Automation": "/devops-and-automation",
  "Network and Security": "/network-and-security",
  "Monitoring": "/monitoring",
  "Server Management": "/server-management",
  "Web Hosting": "/web-hosting",
  "Help Desk": "/help-desk",
  "System Integration": "/system-integration"
};

const Businesses = () => {
  const [activeTab, setActiveTab] = useState('verticals') // 'verticals' or 'companies'
  const [activeVertical, setActiveVertical] = useState(0)
  const [activePartner, setActivePartner] = useState(0)
  const [popupImage, setPopupImage] = useState(null)

  // Listen to external active business updates from the Navbar dropdown
  React.useEffect(() => {
    if (window.__pendingActiveBusinessIndex !== undefined) {
      setActiveVertical(window.__pendingActiveBusinessIndex)
      setActiveTab('verticals')
      delete window.__pendingActiveBusinessIndex
    }

    const handleActiveBusiness = (e) => {
      const { index } = e.detail
      if (index !== undefined) {
        setActiveVertical(index)
        setActiveTab('verticals')
      }
    }

    window.addEventListener('setActiveBusiness', handleActiveBusiness)

    // Listen for tab switch events from Navbar Partner link
    const handleActiveTab = (e) => {
      if (e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab)
      }
    }
    window.addEventListener('setActiveTab', handleActiveTab)

    return () => {
      window.removeEventListener('setActiveBusiness', handleActiveBusiness)
      window.removeEventListener('setActiveTab', handleActiveTab)
    }
  }, [])

  const activeData = activeTab === 'verticals' ? businessesData[activeVertical] : partnersData[activePartner]

  return (
    <section
      className="max-w-[1280px] mx-auto px-gutter bg-surface scroll-mt-10"
      id='business'
    >

      {/* Header with Navigation Tabs */}
      <div className="flex flex-row justify-between items-center sm:items-end border-b border-outline-variant/60 pb-xs mb-sm py-md  gap-xs w-full">
        <h2 className="font-headline-lg text-[15px] sm:text-[24px] md:text-headline-lg font-black tracking-wide text-[#2e3132] uppercase leading-tight max-w-[60%] sm:max-w-none">
          {activeTab === 'companies' ? 'Affiliations & Partnerships' : 'Businesses'}
        </h2>

        {/* Tab Switcher */}
        <div className="flex gap-sm sm:gap-md font-bold text-[12px] sm:text-body-md shrink-0 ml-auto">
          <button
            onClick={() => setActiveTab('verticals')}
            className={`pb-sm relative transition-colors duration-300 group ${activeTab === 'verticals'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-secondary hover:text-primary'
              }`}
          >
            Bussiness
            <span className={`absolute bottom-[-5px] left-0 h-[3px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${activeTab === 'verticals' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
          </button>

          <button
            onClick={() => setActiveTab('companies')}
            className={`pb-sm relative transition-colors duration-300 group ${activeTab === 'companies'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-secondary hover:text-primary'
              }`}
          >
            Partner
            <span className={`absolute bottom-[-5px] left-0 h-[3px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${activeTab === 'companies' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md items-stretch">

        {/* Left Side: Navigation Cards */}
        <div className="lg:col-span-6">
          {activeTab === 'verticals' ? (
            <div className="grid grid-cols-2 gap-sm">
              {businessesData.map((item, index) => {
                const isActive = activeVertical === index
                return (
                  <div
                    key={index}
                    onClick={() => setActiveVertical(index)}
                    className={`relative overflow-hidden cursor-pointer h-[90px] sm:h-[120px] rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-sm select-none group ${isActive
                        ? 'bg-gradient-to-r from-[#00142e] via-[#002a58] to-[#004080]'
                        : 'bg-slate-900 border border-outline-variant/30 hover:border-primary/50'
                      }`}
                  >
                    {/* Background Image (only show if not active) */}
                    {!isActive && (
                      <>
                        <img
                          src={item.bgImage}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
                      </>
                    )}

                    {/* Card Content */}
                    <div className="absolute inset-0 p-sm sm:p-md flex flex-col justify-between z-10">
                      {/* Top: Name Text */}
                      <span className="font-headline-md text-[13px] sm:text-[16px] md:text-[18px] font-bold text-white tracking-wide leading-snug">
                        {item.name}
                      </span>

                      {/* Bottom: Progress line on left, Arrow icon on right */}
                      <div className="flex items-center justify-between w-full mt-auto">
                        {/* Left Bottom: Progress Line */}
                        <div className="flex-grow max-w-[65%] flex items-center h-[2px]">
                          <span className={`h-[2px] rounded-full transition-all duration-500 ${isActive
                              ? 'w-full bg-gradient-to-r from-[#a9c7ff] to-white'
                              : 'w-0 group-hover:w-[50px] bg-gradient-to-r from-[#002a58] to-[#a9c7ff]'
                            }`} />
                        </div>

                        {/* Right Bottom: Arrow Icon */}
                        <span className={`material-symbols-outlined text-white text-[18px] sm:text-[24px] font-bold transition-all duration-300 ${isActive
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                          }`}>
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            // Partner View: Show partners boxes matching the verticals size and layout
            <div className="grid grid-cols-2 gap-sm">
              {partnersData.map((item, index) => {
                const isActive = activePartner === index
                return (
                  <div
                    key={index}
                    onClick={() => setActivePartner(index)}
                    className={`relative overflow-hidden cursor-pointer h-[90px] sm:h-[120px] rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-sm select-none group ${isActive
                        ? 'bg-gradient-to-r from-[#00142e] via-[#002a58] to-[#004080]'
                        : 'bg-slate-900 border border-outline-variant/30 hover:border-primary/50'
                      }`}
                  >
                    {/* Background Image (only show if not active) */}
                    {!isActive && (
                      <>
                        <img
                          src={item.bgImage}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
                      </>
                    )}

                    {/* Card Content */}
                    <div className="absolute inset-0 p-sm sm:p-md flex flex-col justify-between z-10">
                      {/* Top: Name Text */}
                      <span className="font-headline-md text-[13px] sm:text-[16px] md:text-[18px] font-bold text-white tracking-wide leading-snug">
                        {item.name}
                      </span>

                      {/* Bottom: Progress line on left, Arrow icon on right */}
                      <div className="flex items-center justify-between w-full mt-auto">
                        {/* Left Bottom: Progress Line */}
                        <div className="flex-grow max-w-[65%] flex items-center h-[2px]">
                          <span className={`h-[2px] rounded-full transition-all duration-500 ${isActive
                              ? 'w-full bg-gradient-to-r from-[#a9c7ff] to-white'
                              : 'w-0 group-hover:w-[50px] bg-gradient-to-r from-[#002a58] to-[#a9c7ff]'
                            }`} />
                        </div>

                        {/* Right Bottom: Arrow Icon */}
                        <span className={`material-symbols-outlined text-white text-[18px] sm:text-[24px] font-bold transition-all duration-300 ${isActive
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                          }`}>
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Right Side: Active Vertical Detail Panel */}
        <div className="lg:col-span-6 relative overflow-hidden rounded-lg min-h-[300px] sm:min-h-[400px] lg:min-h-[512px] shadow-lg group">
          {/* Main Large Image */}
          <img
            src={activeData.largeImage}
            alt={activeData.name}
            onClick={() => {
              if (activeTab === 'companies') {
                setPopupImage(activeData.largeImage)
              }
            }}
            className={`absolute inset-0 cursor-pointer w-full h-full transition-all duration-700 ease-in-out scale-100 hover:scale-[1.02] ${
              activeTab === 'companies' ? 'object-contain' : 'object-cover'
            }`}
          />

          {/* Overlay Gradient for contrast - only on business verticals */}
          {activeTab === 'verticals' && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
          )}

          {/* Overlay for partner view to show the eye icon on hover */}
          {activeTab === 'companies' && (
            <div
              onClick={() => setPopupImage(activeData.largeImage)}
              className="absolute cursor-pointer inset-0 bg-black/0 hover:bg-black/35 transition-all duration-300 flex items-center justify-center z-20"
            >
              {/* Eye Icon Circle */}
              <div className="w-14 h-14 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">visibility</span>
              </div>
            </div>
          )}

          {/* Panel Detail Content overlay - only on business verticals */}
          {activeTab === 'verticals' && (
            <div className="absolute inset-x-0 bottom-0 p-md sm:p-lg text-white z-20 flex flex-col justify-end">
              <div className="flex flex-wrap items-center gap-x-sm gap-y-xs text-xs sm:text-body-md font-semibold text-slate-100 tracking-wide mb-sm">
                {activeData.subVerticals.map((sub, i) => {
                  const trimmedSub = sub.trim();
                  const route = activeData.name === "IT Services" ? itServicesRoutes[trimmedSub] : null;
                  return (
                    <React.Fragment key={i}>
                      {route ? (
                        <Link to={route} className="hover:text-primary-fixed-dim cursor-pointer transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-primary-fixed-dim">
                          {sub}
                        </Link>
                      ) : (
                        <span className="hover:text-primary-fixed-dim cursor-pointer transition-colors duration-200">
                          {sub}
                        </span>
                      )}
                      {i < activeData.subVerticals.length - 1 && (
                        <span className="text-white/30 font-light select-none">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Thin divider line */}
              <hr className="border-t border-white/20 w-full my-sm" />

              {/* Explore More link */}
              <div className="mt-xs">
                <Link
                  to={activeData.name === "IT Services" ? "/it-services" : activeData.name === "STEAM Education" ? "/steam" : "/construction"}
                  className="text-white hover:text-primary-fixed-dim transition-colors text-label-sm font-bold uppercase tracking-widest inline-flex items-center gap-xs relative group"
                >
                  <span className="underline underline-offset-4 decoration-2">Explore More</span>
                  <span className="material-symbols-outlined text-[16px] transform transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Modal Popup Viewer for Certificate Images */}
      {popupImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white dark:bg-[#1a1c1d] p-2 rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'zoomIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-105 transition-transform"
              onClick={() => setPopupImage(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              src={popupImage}
              alt="Certificate Viewer"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Inject custom keyframe animations */}
      <style>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

export default Businesses
