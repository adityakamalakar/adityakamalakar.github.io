import React from 'react';
import { profileData } from '../../data/profileData';

export const BiographySection: React.FC = () => {
  const { education, bioParagraphs, interests, softwareSkills } = profileData;

  return (
    <div className="space-y-16">
      {/* 2-Column Story & Degree Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 bg-[#1A1A1A]">
            <span className="w-1.5 h-1.5 bg-[#B8976C]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
              Professional Profile & Background
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white">
            Architecture Grounded in Reality, Visualized with Poetics
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
            {bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Core Areas of Interest */}
          <div className="pt-6 border-t border-[#242424]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8976C] block mb-3">
              Core Architectural Interests:
            </span>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#1A1A1A] text-white border border-[#333] px-3 py-1.5 font-sans"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dr. Baliram Hiray College of Architecture Highlight */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#181818] border-2 border-[#B8976C]/40 p-6 sm:p-8 relative">
            <div className="absolute top-0 right-0 bg-[#B8976C] text-[#141414] text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest">
              B.Arch Credentials
            </div>

            <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-1">
              Alma Mater
            </span>
            <h3 className="text-xl font-serif text-white font-medium mb-1">
              {education.institution}
            </h3>
            <div className="text-xs font-mono text-[#B8976C] mb-4">
              {education.degree} • {education.location}
            </div>

            <p className="text-xs text-[#8C8C8C] leading-relaxed mb-6">
              {education.description}
            </p>

            <div className="space-y-2 pt-4 border-t border-[#282828]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-2">
                Curricular Disciplines & Studio Mastery:
              </span>
              {education.coreFocus.map((focus, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-[#BFBFBF]">
                  <span className="text-[#B8976C] font-mono">▸</span>
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Philosophy Quote */}
          <div className="p-5 border-l-2 border-[#B8976C] bg-[#161616] text-xs text-[#8C8C8C] italic leading-relaxed">
            "A design that cannot be detailed cannot be built; a detail that ignores spatial poetry
            cannot inspire. The architect's true duty is the harmonization of both."
          </div>
        </div>
      </div>

      {/* Software & Technical Skills Matrix */}
      <div className="pt-10 border-t border-[#242424]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8976C] block mb-1">
            Technical Proficiency Matrix
          </span>
          <h3 className="text-2xl font-serif text-white">
            Software Engines & Documentation Capabilities
          </h3>
          <p className="text-xs text-[#8C8C8C] mt-1">
            Real-world studio and freelance competency across drafting, BIM, parametric modeling,
            ray-traced rendering, and post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softwareSkills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-[#181818] border border-[#282828] p-6 space-y-5"
            >
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C79E] pb-2 border-b border-[#2A2A2A]">
                {category.category}
              </h4>

              <div className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-[#B8976C] font-mono text-[11px]">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1 bg-[#262626] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#B8976C] to-[#E5C79E]"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    <span className="text-[10px] text-[#666] font-mono block">
                      {skill.experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
