import React from 'react';
import { profileData } from '../../data/profileData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101010] border-t border-[#222222] text-[#8C8C8C] text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222222]">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-[#B8976C] flex items-center justify-center bg-[#1A1A1A]">
                <span className="font-serif text-[#B8976C] text-sm font-semibold">AK</span>
              </div>
              <span className="text-white font-serif text-lg tracking-wider">
                {profileData.prefix} {profileData.name}
              </span>
            </div>
            <p className="text-xs text-[#737373] leading-relaxed">
              Architectural Designer & 3D Visualizer graduated from Dr. Baliram Hiray College of
              Architecture, Mumbai. Dedicated to buildable precision, detailed working drawings, and
              photorealistic visualization.
            </p>
            <div className="text-xs text-[#B8976C] font-mono">
              Mumbai, Maharashtra | Available Globally
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-mono mb-4 text-[#C5A880]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('drawings')}
                  className="hover:text-white transition-colors"
                >
                  Technical Drawing Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Freelance Services & Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About & Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-white transition-colors"
                >
                  Indraprastha Studio Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Client Enquiry Form
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Technical Specializations */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-mono mb-4 text-[#C5A880]">
              Specializations
            </h4>
            <ul className="space-y-1.5 text-xs text-[#737373]">
              <li>• Good-for-Construction (GFC) Sets</li>
              <li>• Municipal Approval / DCR Documentation</li>
              <li>• Staircase & Joinery Detailing</li>
              <li>• Photorealistic Lumion & D5 Rendering</li>
              <li>• 4K Cinematic Walkthrough Animation</li>
              <li>• Residential Villa & Apartment Architecture</li>
            </ul>
          </div>

          {/* Col 4: Contact & Channels */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-mono mb-4 text-[#C5A880]">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-xs">
              <p>
                <span className="text-[#555] block">Email:</span>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-white hover:text-[#B8976C] transition-colors"
                >
                  {profileData.contact.email}
                </a>
              </p>
              <p>
                <span className="text-[#555] block">WhatsApp:</span>
                <a
                  href={`https://wa.me/${profileData.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#B8976C] transition-colors"
                >
                  {profileData.contact.phone}
                </a>
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#8C8C8C] hover:text-[#B8976C] border border-[#333] px-2.5 py-1"
                >
                  LinkedIn
                </a>
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#8C8C8C] hover:text-[#B8976C] border border-[#333] px-2.5 py-1"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#555] space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Ar. Aditya N. Kamalakar. All architectural designs,
            drawings, and 3D renderings displayed are original portfolio works.
          </div>
          <div className="flex items-center space-x-6">
            <span className="italic text-[11px] text-[#666]">
              Indraprastha Architects & Design Studio (Future Studio Identity)
            </span>
            <button
              onClick={scrollToTop}
              className="text-[#8C8C8C] hover:text-white flex items-center space-x-1 font-mono uppercase text-[11px] tracking-wider"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
