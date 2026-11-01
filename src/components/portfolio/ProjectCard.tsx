import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group bg-[#181818] border border-[#262626] hover:border-[#B8976C]/60 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.featured && (
            <span className="bg-[#B8976C] text-[#141414] text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 shadow">
              Featured
            </span>
          )}
          <span className="bg-[#141414]/90 backdrop-blur-sm border border-[#333] text-white text-[10px] font-mono px-2 py-0.5">
            {project.year}
          </span>
        </div>

        {/* Location tag bottom right of image */}
        <div className="absolute bottom-3 right-3 bg-[#141414]/85 backdrop-blur-sm border border-[#333] text-[#A0A0A0] text-[11px] font-mono px-2 py-0.5 flex items-center space-x-1">
          <svg className="w-3 h-3 text-[#B8976C]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{project.location}</span>
        </div>

        {/* Drawings Indicator Pill if drawings available */}
        {project.drawings && project.drawings.length > 0 && (
          <div className="absolute bottom-3 left-3 bg-[#B8976C]/90 text-[#141414] text-[10px] font-mono font-medium px-2 py-0.5 flex items-center space-x-1 shadow">
            <span>📐 {project.drawings.length} Drawings</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Typology */}
          <span className="text-[11px] uppercase tracking-wider font-mono text-[#B8976C] block mb-1">
            {project.typology}
          </span>

          {/* Title */}
          <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#E5C79E] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-[#8C8C8C] mt-1.5 line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Aditya's Contribution Highlight */}
        <div className="pt-3 border-t border-[#242424] text-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-1">
            My Contribution:
          </span>
          <p className="text-[#A5A5A5] line-clamp-2 text-xs italic">
            "{project.myContribution[0]}"
          </p>
        </div>

        {/* Footer: Software Stack & Action */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex flex-wrap gap-1 max-w-[70%]">
            {project.softwareUsed.slice(0, 3).map((soft, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono bg-[#202020] text-[#8C8C8C] px-1.5 py-0.5 border border-[#2C2C2C]"
              >
                {soft}
              </span>
            ))}
            {project.softwareUsed.length > 3 && (
              <span className="text-[10px] font-mono text-[#666]">
                +{project.softwareUsed.length - 3}
              </span>
            )}
          </div>

          <span className="text-xs font-mono text-[#B8976C] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
            <span>Details</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
