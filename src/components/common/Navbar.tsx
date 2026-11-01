import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profileData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isJobMode: boolean;
  setIsJobMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isJobMode,
  setIsJobMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'drawings', label: 'Technical Drawings' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About & Bio' },
    { id: 'studio', label: 'Future Studio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group flex items-center space-x-3 focus:outline-none"
        >
          <div className="w-10 h-10 border border-[#B8976C] flex items-center justify-center bg-[#1A1A1A] group-hover:border-[#E5C79E] transition-colors">
            <span className="font-serif text-[#B8976C] font-semibold text-lg tracking-widest">
              AK
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-base font-medium tracking-wider font-serif">
                {profileData.prefix} {profileData.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#B8976C] border border-[#B8976C]/40 px-1.5 py-0.5 rounded-none font-mono">
                B.Arch
              </span>
            </div>
            <p className="text-[#8C8C8C] text-xs font-sans tracking-wide">
              Architect & 3D Visualizer
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 transition-colors duration-200 relative ${
                activeSection === item.id
                  ? 'text-[#B8976C] font-medium'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B8976C]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action: Job Application Toggle & CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => setIsJobMode(!isJobMode)}
            className={`text-xs px-3 py-1.5 border transition-all flex items-center space-x-1.5 ${
              isJobMode
                ? 'border-[#B8976C] bg-[#B8976C]/10 text-[#E5C79E]'
                : 'border-[#333333] text-[#8C8C8C] hover:border-[#555] hover:text-white'
            }`}
            title="Toggle Recruiter / Job Application Mode"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isJobMode ? 'bg-[#4ade80] animate-pulse' : 'bg-[#555]'
              }`}
            />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              {isJobMode ? 'Job Mode Active' : 'Job Mode'}
            </span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="text-xs uppercase tracking-widest bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-semibold px-4 py-2 transition-all shadow-sm hover:shadow-md"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setIsJobMode(!isJobMode)}
            className={`text-[10px] px-2 py-1 border font-mono uppercase ${
              isJobMode
                ? 'border-[#B8976C] text-[#E5C79E] bg-[#B8976C]/10'
                : 'border-[#333] text-[#888]'
            }`}
          >
            {isJobMode ? 'Job' : 'Client'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#B8976C] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#2A2A2A] px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-sm tracking-wide ${
                activeSection === item.id
                  ? 'text-[#B8976C] font-medium'
                  : 'text-[#C0C0C0]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#262626] flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-2.5 bg-[#B8976C] text-[#141414] text-xs uppercase tracking-widest font-semibold"
            >
              Hire Me / Send Enquiry
            </button>
            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className="w-full text-center py-2 border border-[#333] text-white text-xs tracking-wider"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
