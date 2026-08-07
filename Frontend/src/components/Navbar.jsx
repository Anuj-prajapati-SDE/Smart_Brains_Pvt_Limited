import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState(null) // 'business' | 'projects' | null

  // I MAKE CHANGES HERE
  const [activeBusinessSubmenu, setActiveBusinessSubmenu] = useState(null) // 'Staffing'
  const [activeHireSubmenu, setActiveHireSubmenu] = useState(null) // 'Emerging Technologies' | 'Web Development' | 'Mainframe Training'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const timeoutRef = useRef(null)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)
  const scrollStopTimeout = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)
      const isScrollingDown = currentScrollY > lastScrollY.current

      // Clear previous scroll stop timeout
      if (scrollStopTimeout.current) clearTimeout(scrollStopTimeout.current)

      if (currentScrollY <= 20) {
        gsap.to(headerRef.current, {
          width: '100%',
          maxWidth: '100%',
          top: '0px',
          y: '0px',
          borderRadius: '0px',
          boxShadow: '0 4px 30px rgba(0,0,0,0.02)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else if (currentScrollY <= 250) {
        // Show the shrunken floating navbar so user sees the shrink transition
        gsap.to(headerRef.current, {
          width: '92%',
          maxWidth: '1280px',
          top: '16px',
          y: '0px',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        if (isScrollingDown) {
          gsap.to(headerRef.current, {
            y: '-120px',
            width: '92%',
            maxWidth: '1280px',
            borderRadius: '24px',
            top: '16px',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        } else {
          gsap.to(headerRef.current, {
            width: '92%',
            maxWidth: '1280px',
            top: '16px',
            y: '0px',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        }
      }
      lastScrollY.current = currentScrollY

      // Set new scroll-stop timeout
      scrollStopTimeout.current = setTimeout(() => {
        if (window.scrollY > 20) {
          gsap.to(headerRef.current, {
            width: '92%',
            maxWidth: '1280px',
            top: '16px',
            y: '0px',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          })
        }
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount to capture initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollStopTimeout.current) clearTimeout(scrollStopTimeout.current)
    }
  }, [])

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleBusinessClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('business')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setTimeout(() => window.dispatchEvent(new CustomEvent('setActiveTab', { detail: { tab: 'verticals' } })), 100)
  }
  const handleSubLinkClick = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
    setIsMobileBusinessOpen(false)
    setIsMobileProjectsOpen(false)
  }

  const businesses = [
    { name: <>IT & ITeS</>, path: "/it-services" },
    { name: <>Staffing</>, path: "/staffing" },
    { name: <>Skilling</>, path: "/skilling" },
    { name: <>Vocational Labs</>, path: "/vocational-labs" },
    { name: <>AgriTech Solutions</>, path: "/agritech-hydroponices" },
    { name: <>CSR</>, path: "/csr" },
    { name: <>EPC Oil, Gas & Energy</>, path: "/epc-oil-gas-energy" },
    // { name: <>STEAM</>, path: "/steam" },
    // { name: <>Earthworks</>, path: "/earthworks" },
    // it will change it position after i complete this code 
    // {
    //   name: <>Hire Train & Deploy</>,
    //   path: "/hire-train-deploy"
    // }
  ]
  const Projects = [
    { name: <>Technology & Digital Infrastructure</>, path: "/projects/technology-digital-infrastructure" },
    { name: <>Workforce Solutions</>, path: "/projects/workforce-solutions" },
    { name: <>Education & Skill Development</>, path: "/projects/education-skill-development" },
    { name: <>Agriculture & Sustainability</>, path: "/projects/agriculture-sustainability" }
  ]

  // I MAKE CHANGES HERE 

  const staffingSubmenu = [
    {
      name: "Contract Staffing",
      path: "/staffing/contract"
    },
    {
      name: "Permanent Staffing",
      path: "/staffing/permanent"
    },
    {
      name: "RPO",
      path: "/staffing/rpo"
    },
    {
      name: "Managed Service Provider",
      path: "/staffing/managed"
    },
    {
      name: "Staff Augmentation",
      path: "/staffing/augmentation"
    },
    // {
    //   name: "Remote IT Staffing *",
    //   path: "/staffing/remote"
    // },
    // {
    //   name: "Project Based Staffing *",
    //   path: "/staffing/project"
    // },
  ]

  const hireSubmenu = [
    {
      name: "Emerging Technologies",
      path: "/hire/emerging-technologies"
    },
    {
      name: "Web Development",
      path: "/hire/web-development"
    },
    {
      name: "Mainframe Training *",
      path: "/hire/mainframe-training"
    },
  ]

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full z-50 mx-auto bg-gradient-to-r from-white/75 via-white/55 to-white/75 dark:from-on-background/75 dark:via-on-background/55 dark:to-on-background/75 backdrop-blur-lg border border-white/20 dark:border-outline/20 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
      >
        <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 px-gutter">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-md">
            <Link
              className={`relative group font-body-md text-body-md transition-colors duration-200 pb-1 ${location.pathname === '/about'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
              to="/about"
            >
              About
              <span className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <Link
              className={`relative group font-body-md text-body-md transition-colors duration-200 pb-1 flex items-center gap-xs ${location.pathname === '/#business' || location.pathname === '/infrastructure' || location.pathname === '/energy-utilities' || location.pathname === '/transport-logistics' || location.pathname === '/direct-to-consumers' || location.pathname === '/materials' || location.pathname === '/media' || location.pathname === '/real-estate' || location.pathname === '/sports' || location.hash === '#business'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
              to="/#business"
              onClick={handleBusinessClick}
              onMouseEnter={() => handleMouseEnter('business')}
              onMouseLeave={handleMouseLeave}
            >
              Business
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${activeDropdown === 'business' ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
              <span className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${location.pathname === '/#business' || location.hash === '#business' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <Link
              className={`relative group font-body-md text-body-md transition-colors duration-200 pb-1 ${location.pathname === '/partner' || location.hash === '#partner'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
              to="/#business"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  const element = document.getElementById('business')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
                setTimeout(() => window.dispatchEvent(new CustomEvent('setActiveTab', { detail: { tab: 'companies' } })), 100)
              }}
            >
              Partner
              <span className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${location.pathname === '/partner' || location.hash === '#partner' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>

            {/* <Link
              className={`relative group font-body-md text-body-md transition-colors duration-200 pb-1 flex items-center gap-xs ${location.pathname === '/#business' || location.hash === '#business'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
              to="/#business"
              onClick={handleBusinessClick}
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              Projects
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
              <span className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${location.pathname === '/#business' || location.hash === '#business' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link> */}
            <Link
              className={`relative group font-body-md text-body-md transition-colors duration-200 pb-1 ${location.pathname === '/contact-us'
                ? 'text-primary dark:text-primary-fixed-dim'
                : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
              to="/contact-us"
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 ${location.pathname === '/contact-us' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          </nav>
          <div className="flex items-center gap-sm">
            {/* <button className="hidden lg:flex items-center text-primary font-bold px-sm py-xs hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined mr-xs">search</span>
            </button> */}
            <Link to={'/contact-us'} className="hidden md:inline-block group relative overflow-hidden rounded-full bg-primary hover:bg-primary-container text-on-primary dark:bg-primary-fixed-dim dark:hover:bg-primary-fixed dark:text-on-primary-fixed px-sm py-[8px] md:px-md md:py-sm font-bold uppercase text-label-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative flex gap-x-1 overflow-hidden h-[14px] leading-[14px]">
                {["G", "e", "t", " ", "i", "n", " ", "T", "o", "u", "c", "h"].map((word, idx) => (
                  <span key={idx} className="relative inline-block overflow-hidden h-[14px]">
                    <span
                      className="block transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                      style={{ transitionDelay: `${idx * 0.06}s` }}
                    >
                      {word}
                    </span>
                    <span
                      className="absolute top-full left-0 block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                      style={{ transitionDelay: `${idx * 0.06}s` }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </Link>
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden items-center justify-center text-primary dark:text-primary-fixed-dim w-10 h-10 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Business Dropdown Menu (Desktop) */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-max max-w-[95vw] px-8 bg-white/95 dark:bg-[#1a1c1d]/95 backdrop-blur-lg border border-t-0 border-black/10 dark:border-white/10 shadow-md rounded-b-2xl transition-all duration-300 py-md ${activeDropdown === 'business'
            ? 'top-20 opacity-100 visible translate-y-0'
            : 'top-20 opacity-0 invisible -translate-y-2 pointer-events-none'
            } hidden md:block`}
          onMouseEnter={() => handleMouseEnter('business')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row flex-wrap justify-center items-center gap-md">

            {/* I make changes here for staffing drowdown menu */}
            {businesses.map((business, index) => {
              const isStaffing = business.path === "/staffing";

              const isHire = business.path === "/hire-train-deploy";

              return (

                <div key={index} className="relative group"

                  onMouseEnter={() => {
                    if (isStaffing) setActiveBusinessSubmenu("staffing");

                    if (isHire) setActiveHireSubmenu("hire");
                  }}

                  onMouseLeave={() => { setActiveBusinessSubmenu(null); setActiveHireSubmenu(null); }}>

                  <Link to={business.path} onClick={handleSubLinkClick}

                    className=" relative flex items-center gap-1 text-[14px] font-semibold pb-2 px-1 hover:text-primary " >

                    {business.name}


                    {(isStaffing || isHire) && (

                      <span
                        className={` material-symbols-outlined text-[18px] duration-300

${activeBusinessSubmenu === "staffing" || activeHireSubmenu === "hire" ? "rotate-180" : ""}`}>

                        keyboard_arrow_down

                      </span>

                    )}

                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />

                  </Link>



                  {/* STAFFING */}

                  {isStaffing && (

                    <div

                      className={` absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[260px] rounded-2xl bg-white shadow-lg border p-3 duration-300

${activeBusinessSubmenu === "staffing" ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                      {staffingSubmenu.map((item, i) => (

                        <Link

                          key={i}

                          to={item.path}

                          className=" block px-4 py-3 rounded-xl hover:bg-slate-100 ">

                          {item.name}

                        </Link>

                      ))}

                    </div>

                  )}



                  {/* HIRE */}

                  {isHire && (

                    <div

                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[260px] rounded-2xl bg-white shadow-lg border p-3 duration-300

${activeHireSubmenu === "hire" ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                      {hireSubmenu.map((item, i) => (

                        <Link key={i} to={item.path}

                          className="block px-4 py-3 rounded-xl hover:bg-slate-100">

                          {item.name}

                        </Link>

                      ))}

                    </div>

                  )}

                </div>

              );

            })}


          </div>
        </div>

        {/* Hire, Train, Deploy*/}


        {/* Projects Dropdown Menu (Desktop) */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-max max-w-[95vw] px-8 bg-white/95 dark:bg-[#1a1c1d]/95 backdrop-blur-lg border border-t-0 border-black/10 dark:border-white/10 shadow-md rounded-b-2xl transition-all duration-300 py-md ${activeDropdown === 'projects'
            ? 'top-20 opacity-100 visible translate-y-0'
            : 'top-20 opacity-0 invisible -translate-y-2 pointer-events-none'
            } hidden md:block`}
          onMouseEnter={() => handleMouseEnter('projects')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row flex-wrap justify-center items-center gap-md">
            {Projects.map((project, index) => (
              <Link
                key={index}
                to={project.path}
                onClick={handleSubLinkClick}
                style={{
                  transform: activeDropdown === 'projects' ? 'translateY(0)' : 'translateY(15px)',
                  opacity: activeDropdown === 'projects' ? 1 : 0,
                  transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05 + 0.1}s, opacity 0.4s ease ${index * 0.05 + 0.1}s, color 0.2s`
                }}
                className="relative group text-[14px] font-semibold text-center leading-tight text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim pb-2 px-1"
              >
                {project.name}
                <span className="absolute bottom-0 left-0 h-[1px] rounded-full bg-gradient-to-r from-[#002a58] to-[#004080] dark:from-[#a9c7ff] dark:to-[#004080] transition-all duration-300 w-0 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        <div
          className={`absolute left-0 w-full bg-white/95 dark:bg-[#1a1c1d]/95 backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg transition-all duration-300 overflow-y-auto ${isMobileMenuOpen
            ? 'top-20 opacity-100 visible max-h-[85vh] py-md'
            : 'top-20 opacity-0 invisible max-h-0 pointer-events-none'
            } md:hidden block z-40`}
        >
          <div className="px-gutter flex flex-col gap-sm">
            <Link
              className="py-xs px-sm font-bold text-body-md text-on-surface hover:text-primary dark:text-surface-variant dark:hover:text-primary-fixed-dim border-b border-outline-variant/10"
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="flex flex-col border-b border-outline-variant/10 pb-xs">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileBusinessOpen(!isMobileBusinessOpen);
                }}
                className="flex justify-between items-center py-xs px-sm font-bold text-body-md text-on-surface hover:text-primary dark:text-surface-variant dark:hover:text-primary-fixed-dim text-left"
              >
                <span>Business</span>
                <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isMobileBusinessOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>

              <div
                className={`pl-md flex flex-col gap-xs border-l border-outline-variant/30 ml-sm transition-all duration-300 ease-in-out origin-top ${isMobileBusinessOpen
                  ? 'max-h-[500px] opacity-100 mt-xs py-1'
                  : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
                  }`}
              >
                {businesses.map((business, index) => (
                  <Link
                    key={index}
                    to={business.path}
                    onClick={handleSubLinkClick}
                    className="py-xs text-[14px] font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary"
                  >
                    {business.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* <div className="flex flex-col border-b border-outline-variant/10 pb-xs">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileProjectsOpen(!isMobileProjectsOpen);
                }}
                className="flex justify-between items-center py-xs px-sm font-bold text-body-md text-on-surface hover:text-primary dark:text-surface-variant dark:hover:text-primary-fixed-dim text-left"
              >
                <span>Projects</span>
                <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>

              <div
                className={`pl-md flex flex-col gap-xs border-l border-outline-variant/30 ml-sm transition-all duration-300 ease-in-out origin-top ${isMobileProjectsOpen
                  ? 'max-h-[500px] opacity-100 mt-xs py-1'
                  : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
                  }`}
              >
                {Projects.map((project, index) => (
                  <Link
                    key={index}
                    to={project.path}
                    onClick={handleSubLinkClick}
                    className="py-xs text-[14px] font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div> */}

            <Link
              className="py-xs px-sm font-bold text-body-md text-on-surface hover:text-primary dark:text-surface-variant dark:hover:text-primary-fixed-dim border-b border-outline-variant/10"
              to="/#business"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  const element = document.getElementById('business')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
                setTimeout(() => window.dispatchEvent(new CustomEvent('setActiveTab', { detail: { tab: 'companies' } })), 100)
                setIsMobileMenuOpen(false)
              }}
            >
              Partner
            </Link>

            <Link
              className="py-xs px-sm font-bold text-body-md text-on-surface hover:text-primary dark:text-surface-variant dark:hover:text-primary-fixed-dim border-b border-outline-variant/10"
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile Menu CTA - Get In Touch */}
            <div className="py-md px-sm">
              <button
                onClick={() => {
                  navigate("/contact-us");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-center group relative overflow-hidden rounded-full bg-primary hover:bg-primary-container text-on-primary dark:bg-primary-fixed-dim dark:hover:bg-primary-fixed dark:text-on-primary-fixed py-sm font-bold uppercase text-label-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-xs"
              >
                <span className="relative flex gap-x-1 overflow-hidden h-[14px] leading-[14px]">
                  {["G", "e", "t", " ", "i", "n", " ", "T", "o", "u", "c", "h"].map((word, idx) => (
                    <span key={idx} className="relative inline-block overflow-hidden h-[14px]">
                      <span
                        className="block transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                        style={{ transitionDelay: `${idx * 0.06}s` }}
                      >
                        {word}
                      </span>
                      <span
                        className="absolute top-full left-0 block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
                        style={{ transitionDelay: `${idx * 0.06}s` }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar