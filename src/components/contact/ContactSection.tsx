import React from 'react';
import { profileData } from '../../data/profileData';

interface ContactSectionProps {
  onScrollToEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onScrollToEnquiry }) => {
  const { contact } = profileData;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Hello Ar. Aditya, I viewed your architectural portfolio and would like to connect.'
    );
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#141414] text-white border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading and Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 bg-[#1A1A1A]">
              <span className="w-1.5 h-1.5 bg-[#B8976C]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
                Initiate Conversation
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Let's Discuss Your Next Space
            </h2>

            <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
              Available for full-time architectural design positions, BIM coordination, freelance
              working drawing packages, custom interior transformations, and 3D visualization
              commissions across India and internationally.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleWhatsAppDirect}
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>💬 Quick WhatsApp Message</span>
              </button>

              <button
                onClick={onScrollToEnquiry}
                className="px-6 py-3.5 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Detailed Project Brief Form
              </button>
            </div>
          </div>

          {/* Right Column: Direct Channels Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Channel 1: Email */}
            <div className="bg-[#181818] border border-[#282828] p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block">
                Official Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-white hover:text-[#B8976C] transition-colors font-mono break-all block"
              >
                {contact.email}
              </a>
              <p className="text-[11px] text-[#666]">
                Typical reply time: within 12 - 24 hours
              </p>
            </div>

            {/* Channel 2: WhatsApp & Phone */}
            <div className="bg-[#181818] border border-[#282828] p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block">
                Phone & WhatsApp
              </span>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white hover:text-[#B8976C] transition-colors font-mono block"
              >
                {contact.phone}
              </a>
              <p className="text-[11px] text-[#666]">
                Available Mon–Sat: 10:00 AM – 7:30 PM IST
              </p>
            </div>

            {/* Channel 3: Studio Base */}
            <div className="bg-[#181818] border border-[#282828] p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block">
                Practice Location
              </span>
              <div className="text-sm text-white font-serif">
                {contact.location}
              </div>
              <p className="text-[11px] text-[#666]">
                B.Arch: Dr. Baliram Hiray College of Architecture
              </p>
            </div>

            {/* Channel 4: Social & Professional Links */}
            <div className="bg-[#181818] border border-[#282828] p-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block">
                Professional Networks
              </span>
              <div className="flex flex-col space-y-1.5 text-xs">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#B8976C] transition-colors"
                >
                  ↗ LinkedIn Profile
                </a>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#B8976C] transition-colors"
                >
                  ↗ Instagram Studio Feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
