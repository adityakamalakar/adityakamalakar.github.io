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
      <div className="absolute top-28 left-6 md:left-12 hidden xl:block text-[11px] font-mono text-[#666666] tracking-widest space-y-1">
        <div>LAT 19°04'33" N // LONG 72°52'59" E</div>
        <div className="text-[#B8976C]/70">DATUM LEVEL ±0.000 FFL</div>
        <div>MUMBAI METROPOLITAN REGION</div>
      </div>

      <div className="absolute top-28 right-6 md:right-12 hidden xl:block text-[11px] font-mono text-[#666666] tracking-widest text-right space-y-1">
        <div className="text-[#B8976C]">B.ARCH // HIRAY ARCHITECTURE</div>
        <div>SCALE 1:1 ARCHITECTURAL DISCIPLINE</div>
        <div>AUTOCAD • REVIT • LUMION • D5</div>
      </div>

      {/* Main Hero Content - Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Architect Name Badge */}
            <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 bg-[#1A1A1A]/90 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#B8976C] rounded-full inline-block" />
              <span className="text-[11px] uppercase tracking-widest text-[#E5C79E] font-mono">
                Professional Architecture Portfolio & Freelance Practice
              </span>
            </div>

            {/* Architect Primary Identity */}
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-white mb-2">
                <span className="text-[#B8976C] font-serif font-light">{profileData.prefix} </span>
                {profileData.name}
              </h1>

              {/* Professional Subtitles */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-light text-[#A0A0A0] tracking-wider uppercase font-sans">
                <span>Architect</span>
                <span className="text-[#B8976C]">•</span>
                <span>Architectural Designer</span>
                <span className="text-[#B8976C]">•</span>
                <span>3D Visualizer</span>
              </div>
            </div>

            {/* Official Headline */}
            <div className="py-4 border-y border-[#262626]">
              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F5F3EF] leading-snug tracking-wide italic">
                "{profileData.headline}"
              </p>
            </div>

            {/* Narrative Subtext */}
            <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed max-w-2xl font-sans font-normal">
              {profileData.subheadline}
            </p>

            {/* The 3 Core Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Explore My Work
              </button>

              <button
                onClick={onViewServices}
                className="px-6 py-3.5 border border-[#444444] hover:border-[#B8976C] text-white hover:text-[#B8976C] font-medium text-xs uppercase tracking-widest transition-all duration-300 bg-[#1A1A1A]/40 text-center"
              >
                View My Services
              </button>

              <button
                onClick={onHireMe}
                className="px-6 py-3.5 border-2 border-[#B8976C] text-[#E5C79E] hover:bg-[#B8976C] hover:text-[#141414] font-medium text-xs uppercase tracking-widest transition-all duration-300 text-center"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Column: Ar. Aditya N. Kamalakar Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Decorative Architectural Drafting Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#B8976C] pointer-events-none z-20" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#B8976C] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#B8976C] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#B8976C] pointer-events-none z-20" />

              {/* Photo Box Container */}
              <div className="relative bg-[#181818] border border-[#2E2E2E] p-2 shadow-2xl overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
                  <img
                    src={profileData.photoUrl || 'images/aditya-kamalakar.jpg'}
                    alt="Ar. Aditya N. Kamalakar - Architect & 3D Visualizer"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Subtle architectural vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Level datum stamp on photo */}
                  <div className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-sm border border-[#333] px-2.5 py-1 text-[10px] font-mono text-[#E5C79E]">
                    ±0.00 FFL // PRINCIPAL ARCHITECT
                  </div>

                  {/* Bottom Portrait Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#141414]/95 backdrop-blur-md border border-[#333] p-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-serif text-sm font-medium">
                        Ar. Aditya N. Kamalakar
                      </span>
                      <span className="text-[10px] font-mono text-[#B8976C] border border-[#B8976C]/40 px-1 py-0.5">
                        B.Arch
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8C8C8C] mt-0.5 font-sans">
                      Dr. Baliram Hiray College of Architecture, Mumbai
                    </p>
                    <div className="pt-2 mt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#777]">
                      <span>AutoCAD • Revit • Lumion • D5</span>
                      <span className="text-[#B8976C]">Mumbai, IN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Three Pillars Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-[#222222] text-left">
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
