import React from 'react';
import { profileData } from '../../data/profileData';

export const IndraprasthaStudioSection: React.FC = () => {
  const { futureStudio } = profileData;

  return (
    <section id="studio" className="py-24 bg-[#111111] text-white border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Identity */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 mb-4 bg-[#1A1A1A]">
            <span className="w-1.5 h-1.5 bg-[#B8976C]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
              Studio Vision & Future Practice
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white mb-3">
            {futureStudio.name}
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-[#C5A880] mb-6">
            "{futureStudio.tagline}"
          </p>

          <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
            {futureStudio.vision}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {futureStudio.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#181818] border border-[#282828] p-6 hover:border-[#B8976C] transition-all duration-300 relative group"
            >
              <div className="text-2xl font-serif text-[#B8976C] opacity-50 group-hover:opacity-100 transition-opacity mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-base font-serif font-medium text-white mb-2">
                {val.title}
              </h3>
              <p className="text-xs text-[#8C8C8C] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Professional Disclaimer Box */}
        <div className="bg-[#161616] border border-[#333333] p-5 sm:p-6 text-xs text-[#777777] leading-relaxed flex items-start space-x-3">
          <span className="text-[#B8976C] font-mono text-base mt-0.5">ⓘ</span>
          <div>
            <span className="font-mono uppercase tracking-wider text-[#999999] block mb-1">
              Professional Disclosure & Practice Context:
            </span>
            <p>{futureStudio.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
