import React, { useState } from 'react';
import { Project, ProjectDrawing } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquireSimilar: (projectTitle: string) => void;
  onOpenDrawingLightbox: (drawing: ProjectDrawing) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onEnquireSimilar,
  onOpenDrawingLightbox,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'gallery' | 'drawings' | 'specs'>('gallery');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allImages = [project.coverImage, ...(project.galleryImages || [])];
  const uniqueImages = Array.from(new Set(allImages));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Window */}
      <div className="relative bg-[#181818] border border-[#333333] w-full max-w-5xl max-h-[92vh] overflow-y-auto z-10 shadow-2xl flex flex-col text-white">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#181818]/95 backdrop-blur-md border-b border-[#2A2A2A] px-6 py-4 flex items-center justify-between z-20">
          <div>
            <span className="text-[11px] font-mono text-[#B8976C] uppercase tracking-widest block">
              {project.typology} // {project.location}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-white font-medium">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onEnquireSimilar(project.title)}
              className="hidden sm:inline-block text-xs uppercase tracking-wider bg-[#B8976C] text-[#141414] font-semibold px-3 py-1.5 hover:bg-[#A38054] transition-colors"
            >
              Inquire Similar
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center border border-[#333] text-[#888] hover:text-white hover:border-white transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-6 px-6 pt-4 border-b border-[#242424] text-xs font-mono tracking-wider">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'gallery'
                ? 'text-[#B8976C] font-semibold'
                : 'text-[#888] hover:text-white'
            }`}
          >
            Visual Gallery ({uniqueImages.length})
            {activeTab === 'gallery' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8976C]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('drawings')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'drawings'
                ? 'text-[#B8976C] font-semibold'
                : 'text-[#888] hover:text-white'
            }`}
          >
            Technical Drawings ({project.drawings?.length || 0})
            {activeTab === 'drawings' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8976C]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'specs'
                ? 'text-[#B8976C] font-semibold'
                : 'text-[#888] hover:text-white'
            }`}
          >
            Project Data & Scope
            {activeTab === 'specs' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8976C]" />
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 flex-1">
          {/* TAB 1: VISUAL GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              {/* Main Preview Image */}
              <div className="relative aspect-[16/10] bg-[#111] overflow-hidden border border-[#2A2A2A]">
                <img
                  src={uniqueImages[selectedImageIndex]}
                  alt={`${project.title} - view ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-[11px] font-mono text-[#C0C0C0] px-3 py-1 border border-[#333]">
                  Image {selectedImageIndex + 1} of {uniqueImages.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {uniqueImages.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {uniqueImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-[16/10] overflow-hidden border transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#B8976C] scale-95 ring-1 ring-[#B8976C]'
                          : 'border-[#2A2A2A] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`thumb ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TECHNICAL DRAWINGS */}
          {activeTab === 'drawings' && (
            <div className="space-y-6">
              {project.drawings && project.drawings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.drawings.map((drw, idx) => (
                    <div
                      key={idx}
                      onClick={() => onOpenDrawingLightbox(drw)}
                      className="group bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#B8976C] p-3 cursor-pointer transition-all"
                    >
                      <div className="relative aspect-[16/10] bg-[#111] overflow-hidden mb-3 border border-[#242424]">
                        <img
                          src={drw.image}
                          alt={drw.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-[#001f3f]/15 mix-blend-color" />
                        <div className="absolute top-2 left-2 bg-[#141414]/90 text-[10px] font-mono text-[#B8976C] px-2 py-0.5 border border-[#333]">
                          {drw.sheetNo || `SHEET 0${idx + 1}`}
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-mono text-white px-2 py-0.5">
                          🔍 Click to Inspect
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-medium text-white group-hover:text-[#B8976C] transition-colors">
                            {drw.title}
                          </h4>
                          <span className="text-[11px] font-mono text-[#777]">
                            {drw.type} • Scale {drw.scale || 'NTS'}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#B8976C]">↗</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center border border-dashed border-[#333] text-[#777] font-mono text-xs">
                  Technical drawing sheet scans being curated for this project.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PROJECT SPECS & METRICS */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#141414] p-6 border border-[#242424]">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#B8976C]">
                  Project Parameters
                </h4>
                <div className="space-y-2 text-xs divide-y divide-[#222]">
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#777]">Location:</span>
                    <span className="text-white font-mono">{project.location}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#777]">Year of Design:</span>
                    <span className="text-white font-mono">{project.year}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#777]">Typology:</span>
                    <span className="text-white">{project.typology}</span>
                  </div>
                  {project.builtUpArea && (
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#777]">Built-up Area:</span>
                      <span className="text-white font-mono">{project.builtUpArea}</span>
                    </div>
                  )}
                  {project.siteArea && (
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#777]">Plot Area:</span>
                      <span className="text-white font-mono">{project.siteArea}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#777]">Project Stage:</span>
                    <span className="text-[#B8976C] font-mono">
                      {project.status || 'Design & Detailing Executed'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#B8976C]">
                  Software Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.softwareUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#202020] border border-[#333] text-[#DDD] px-2.5 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.walkthroughUrl && (
                  <div className="pt-4 border-t border-[#222]">
                    <span className="text-[11px] font-mono text-[#777] block mb-2">
                      3D Video Presentation:
                    </span>
                    <a
                      href={project.walkthroughUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono text-[#B8976C] hover:underline"
                    >
                      <span>▶ Watch 4K Walkthrough Video</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Project Narrative & Concept */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#262626]">
            <div className="md:col-span-2 space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-mono text-[#B8976C] block mb-1">
                  Design Narrative & Context
                </span>
                <p className="text-sm text-[#C0C0C0] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.concept && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-[#B8976C] block mb-1">
                    Architectural Concept & Tectonics
                  </span>
                  <p className="text-sm text-[#9E9E9E] leading-relaxed italic">
                    "{project.concept}"
                  </p>
                </div>
              )}
            </div>

            {/* My Specific Contribution */}
            <div className="bg-[#141414] p-5 border border-[#242424] space-y-3">
              <span className="text-[11px] uppercase tracking-widest font-mono text-[#B8976C] block">
                Ar. Aditya's Specific Contribution
              </span>
              <ul className="space-y-2 text-xs text-[#A0A0A0]">
                {project.myContribution.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#B8976C] mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#181818]/95 backdrop-blur-md border-t border-[#2A2A2A] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#777]">
          <span>
            Ar. Aditya N. Kamalakar • Portfolio Archive Project #{project.id}
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => onEnquireSimilar(project.title)}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-semibold uppercase tracking-wider text-xs"
            >
              Discuss Similar Project
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#333] hover:border-white text-white text-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
