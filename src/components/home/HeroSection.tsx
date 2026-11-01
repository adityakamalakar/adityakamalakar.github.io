import React from 'react';
import { profileData } from '../../data/profileData';

interface HeroSectionProps {
  onExploreWork: () => void;
  onViewServices: () => void;
  onHireMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onViewServices,
  onHireMe,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#141414] text-white"
    >
      {/* Subtle Architectural Grid & Linework Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #B8976C 1px, transparent 1px),
            linear-gradient(to bottom, #B8976C 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial vignette gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/70 via-transparent to-[#141414] pointer-events-none" />

      {/* Architectural Coordinates & Datum Accents */}
      <div className="absolute top-28 left-6 md:left-12 hidden md:block text-[11px] font-mono text-[#666666] tracking-widest space-y-1">
        <div>LAT 19°04'33" N // LONG 72°52'59" E</div>
        <div className="text-[#B8976C]/70">DATUM LEVEL ±0.000 FFL</div>
        <div>MUMBAI METROPOLITAN REGION</div>
      </div>

      <div className="absolute top-28 right-6 md:right-12 hidden md:block text-[11px] font-mono text-[#666666] tracking-widest text-right space-y-1">
        <div className="text-[#B8976C]">B.ARCH // HIRAY ARCHITECTURE</div>
        <div>SCALE 1:1 ARCHITECTURAL DISCIPLINE</div>
        <div>AUTOCAD • REVIT • LUMION • D5</div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Architect Name Badge */}
        <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 bg-[#1A1A1A]/80 px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#B8976C] rounded-full inline-block" />
          <span className="text-xs uppercase tracking-widest text-[#E5C79E] font-mono">
            Professional Architecture Portfolio & Freelance Practice
          </span>
        </div>

        {/* Architect Primary Identity */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white mb-4">
          <span className="text-[#B8976C] font-serif font-light">{profileData.prefix} </span>
          {profileData.name}
        </h1>

        {/* Professional Subtitles */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-light text-[#A0A0A0] tracking-wider uppercase mb-8 font-sans">
          <span>Architect</span>
          <span className="text-[#B8976C]">•</span>
          <span>Architectural Designer</span>
          <span className="text-[#B8976C]">•</span>
          <span>3D Visualizer</span>
        </div>

        {/* Official Headline */}
        <div className="relative max-w-3xl mx-auto my-6 py-6 px-4 border-y border-[#262626]">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#F5F3EF] leading-snug tracking-wide italic">
            "{profileData.headline}"
          </p>
        </div>

        {/* Narrative Subtext */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#8C8C8C] leading-relaxed mb-10 font-sans font-normal">
          {profileData.subheadline}
        </p>

        {/* The 3 Core Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore My Work
          </button>

          <button
            onClick={onViewServices}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#444444] hover:border-[#B8976C] text-white hover:text-[#B8976C] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 bg-[#1A1A1A]/40 backdrop-blur-sm hover:-translate-y-0.5"
          >
            View My Services
          </button>

          <button
            onClick={onHireMe}
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-[#B8976C] text-[#E5C79E] hover:bg-[#B8976C] hover:text-[#141414] font-medium text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </div>

        {/* Three Pillars Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#222222] text-left">
          <div className="p-4 border-l-2 border-[#B8976C]/60 bg-[#171717]/60">
            <span className="text-[10px] font-mono text-[#B8976C] uppercase tracking-wider block mb-1">
              01 // Architectural Rigor
            </span>
            <h3 className="text-sm font-serif text-white font-medium mb-1">
              B.Arch Academic Precision
            </h3>
            <p className="text-xs text-[#737373]">
              Educated at Dr. Baliram Hiray College of Architecture, Mumbai, blending design poetics
              with code compliance.
            </p>
          </div>

          <div className="p-4 border-l-2 border-[#B8976C]/60 bg-[#171717]/60">
            <span className="text-[10px] font-mono text-[#B8976C] uppercase tracking-wider block mb-1">
              02 // Good-For-Construction
            </span>
            <h3 className="text-sm font-serif text-white font-medium mb-1">
              Zero-Tolerance Detailing
            </h3>
            <p className="text-xs text-[#737373]">
              Accurate column grids, staircase geometries, wet area sunken slabs, and custom joinery
              packs for contractors.
            </p>
          </div>

          <div className="p-4 border-l-2 border-[#B8976C]/60 bg-[#171717]/60">
            <span className="text-[10px] font-mono text-[#B8976C] uppercase tracking-wider block mb-1">
              03 // Photorealistic CGI
            </span>
            <h3 className="text-sm font-serif text-white font-medium mb-1">
              Atmospheric Visualization
            </h3>
            <p className="text-xs text-[#737373]">
              High-definition Lumion and D5 rendering with authentic lighting, PBR materials, and 4K
              walkthrough animations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
