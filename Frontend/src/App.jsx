import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './pages/About/AboutPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import SteamPage from './pages/SteamPage/SteamPage';
import ConstructionPage from './pages/ConstructionPage/ConstructionPage';
import ContactUs from './pages/ContactUs/ContactUs';

// IT Services Sub-Vertical Pages
import HybridCloudServices from './pages/HomePage/BusinessServicesPages/HybridCloudServices';
import DevOpsAutomationServices from './pages/HomePage/BusinessServicesPages/DevOPSAutomationServices';
import NetworkSecurityServices from './pages/HomePage/BusinessServicesPages/NetworkSecurityServices';
import MonitoringService from './pages/HomePage/BusinessServicesPages/MonitoringService';
import ServerManagementServices from './pages/HomePage/BusinessServicesPages/ServerManagementServices';
import WebHostingServices from './pages/HomePage/BusinessServicesPages/WebHostingServices';
import HelpDeskServices from './pages/HomePage/BusinessServicesPages/HelpDeskServices';
import SystemIntegrationServices from './pages/HomePage/BusinessServicesPages/SystemIntegrationServices';
import IT_Services from './pages/IT_Services/IT_Services';

// I MAKE CHANGES HERE I ADD THESE ROUTES 
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import ForgotPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';

// STAFFING SUBMENU 
import ContractStaffing from './pages/StaffingSubMenu/ContractStaffing';


// Business Dropdown Pages
import EPCOilGasEnergyPage from './pages/EPCOilGasEnergy/EPCOilGasEnergyPage';
import SkillingPage from './pages/Skilling/SkillingPage';
import StaffingPage from './pages/Staffing/StaffingPage';
import CSRPage from './pages/CSR/CSRPage';
import EarthworksPage from './pages/Earthworks/EarthworksPage';
import AgriTechPage from './pages/AgriTech/AgriTechPage';
import VocationalLabsPage from './pages/VocationalLabs/VocationalLabsPage';

// Projects Dropdown Pages
import TechDigitalInfraPage from './pages/Projects/TechDigitalInfraPage';
import WorkforceSolutionsPage from './pages/Projects/WorkforceSolutionsPage';
import EducationSkillDevPage from './pages/Projects/EducationSkillDevPage';
import AgriSustainabilityPage from './pages/Projects/AgriSustainabilityPage';
import PermanentStaffing from './pages/StaffingSubMenu/PermanentStaffing';
import RPO from './pages/StaffingSubMenu/RPO';
import ManagedServiceProvider from './pages/StaffingSubMenu/ManagedServiceProvider';
import StaffAugmentation from './pages/StaffingSubMenu/StaffAugmentation';
import RemoteIt from './pages/StaffingSubMenu/RemoteIt';
import ProjectBased from './pages/StaffingSubMenu/ProjectBased';
import HIreTrainDeploy from './pages/HireTrainDeploy/HIreTrainDeploy';
import WebDevlopment from './pages/HireSubMenu/WebDevlopment';
import EmergingTechnology from './pages/HireSubMenu/EmergingTechnology';
import MainFrameTraining from './pages/HireSubMenu/MainFrameTraining';


function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [showBackTop, setShowBackTop] = useState(false)
  const [dashOffset, setDashOffset] = useState(138.23007675795088)
  const circumference = 138.23007675795088

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      const offset = circumference * (1 - scrollPercent)
      setDashOffset(offset)

      if (scrollTop > 50) {
        setShowBackTop(true)
      } else {
        setShowBackTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>

        {/* Added by me */}
        <Route path="/admin-dashboard" element={<Dashboard/>} /> 
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/login" element={<Auth />} />

        {/* Staffing Dropdown Routes */}
        <Route path="/staffing/contract" element={<ContractStaffing/>} />
        <Route path="/staffing/permanent" element={<PermanentStaffing/>} />
        <Route path="/staffing/rpo" element={<RPO/>} />
        <Route path="/staffing/managed" element={<ManagedServiceProvider/>} />
        <Route path="/staffing/augmentation" element={<StaffAugmentation/>} />
        <Route path="/staffing/remote" element={<RemoteIt/>} />
        <Route path="/staffing/project" element={<ProjectBased/>} />

        {/* Hire, Train, Deploy Routes */}
        <Route path="/hire-train-deploy" element={<HIreTrainDeploy />} />

        {/* Hire Submenu Routes */}
        <Route path="/hire/web-development" element={<WebDevlopment />} />
        <Route path="/hire/emerging-technologies" element={<EmergingTechnology />} />
        <Route path="/hire/mainframe-training" element={<MainFrameTraining />} />

        {/* Added by me */}

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/steam" element={<SteamPage />} />
        <Route path="/construction" element={<ConstructionPage />} />

        {/* Business Dropdown Routes */}
        <Route path="/epc-oil-gas-energy" element={<EPCOilGasEnergyPage />} />
        <Route path="/skilling" element={<SkillingPage />} />
        <Route path="/staffing" element={<StaffingPage />} />
        <Route path="/csr" element={<CSRPage />} />
        <Route path="/earthworks" element={<EarthworksPage />} />
        <Route path="/agritech-hydroponices" element={<AgriTechPage />} />
        <Route path="/vocational-labs" element={<VocationalLabsPage />} />

        {/* Projects Dropdown Routes */}
        <Route path="/projects/technology-digital-infrastructure" element={<TechDigitalInfraPage />} />
        <Route path="/projects/workforce-solutions" element={<WorkforceSolutionsPage />} />
        <Route path="/projects/education-skill-development" element={<EducationSkillDevPage />} />
        <Route path="/projects/agriculture-sustainability" element={<AgriSustainabilityPage />} />

        {/* IT Services Sub-Vertical Routes */}
        <Route path="/it-services" element={<IT_Services />} />
        <Route path="/managed-hybrid-cloud" element={<HybridCloudServices />} />
        <Route path="/devops-and-automation" element={<DevOpsAutomationServices />} />
        <Route path="/network-and-security" element={<NetworkSecurityServices />} />
        <Route path="/monitoring" element={<MonitoringService />} />
        <Route path="/server-management" element={<ServerManagementServices />} />
        <Route path="/web-hosting" element={<WebHostingServices />} />
        <Route path="/help-desk" element={<HelpDeskServices />} />
        <Route path="/system-integration" element={<SystemIntegrationServices />} />


      </Routes>
      <Footer /> 

      <div 
        onClick={scrollToTop}
        className={`back-top ${showBackTop ? 'back-top-show' : ''}`}
      >
        <svg width={50} height={50} viewBox="0 0 50 50">
          <circle
            cx={25}
            cy={25}
            r={22}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={4}
            fill="none"
          />
          <circle
            cx={25}
            cy={25}
            r={22}
            stroke="#fff"
            strokeWidth={4}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%"
            }}
          />
        </svg>
        <svg
          className="up-arrow"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V4M12 4L6 10M12 4L18 10"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Router>
  )
}

export default App
