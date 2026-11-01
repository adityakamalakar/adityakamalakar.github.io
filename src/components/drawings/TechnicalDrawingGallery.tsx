import React, { useState } from 'react';
import { DrawingCategory, TechnicalDrawing } from '../../types';
import { drawingCategories, technicalDrawingsData } from '../../data/drawingsData';
import { DrawingViewer } from './DrawingViewer';

export const TechnicalDrawingGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DrawingCategory | 'All'>('All');
  const [activeDrawing, setActiveDrawing] = useState<TechnicalDrawing>(technicalDrawingsData[0]);
  const [fullscreenModalDrawing, setFullscreenModalDrawing] = useState<TechnicalDrawing | null>(null);

  const filteredDrawings = technicalDrawingsData.filter((drw) => {
    if (selectedCategory === 'All') return true;
    return drw.category === selectedCategory;
  });

  return (
    <section id="drawings" className="py-24 bg-[#141414] text-white border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 mb-4 bg-[#1A1A1A]">
            <span className="w-1.5 h-1.5 bg-[#B8976C]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
              Good-For-Construction Detailing Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-4">
            Technical Drawing Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
            The soul of built architecture resides in its working drawings. Explore high-precision
            architectural plans, structural sections, elevations, staircase geometries, wet-area
            plumbing drops, fenestration schedules, and bespoke joinery details drafted with
            zero-tolerance millimeter precision.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
          {drawingCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const matching = technicalDrawingsData.filter(
                    (d) => cat.id === 'All' || d.category === cat.id
                  );
                  if (matching.length > 0 && !matching.some((m) => m.id === activeDrawing.id)) {
                    setActiveDrawing(matching[0]);
                  }
                }}
                className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#B8976C] text-[#141414] border-[#B8976C] font-bold shadow'
                    : 'bg-[#181818] text-[#A0A0A0] border-[#2C2C2C] hover:border-[#444] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured Zoomable Drawing Stage */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#888]">
            <span className="text-[#B8976C] uppercase tracking-wider flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-[#B8976C] rounded-full animate-ping" />
              <span>Interactive Sheet Inspector • Double Click or Use Buttons to Zoom</span>
            </span>
            <button
              onClick={() => setFullscreenModalDrawing(activeDrawing)}
              className="text-[#E5C79E] hover:underline flex items-center space-x-1"
            >
              <span>⛶ Open Fullscreen Studio</span>
            </button>
          </div>

          <DrawingViewer drawing={activeDrawing} />
        </div>

        {/* Thumbnails Sheet Selector Grid */}
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#242424]">
            <h3 className="text-xs uppercase font-mono tracking-widest text-[#888]">
              Select Sheet to Inspect ({filteredDrawings.length} Drawings in Category)
            </h3>
            <span className="text-xs font-mono text-[#555]">
              Click any sheet below to load into inspector
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredDrawings.map((drw) => {
              const isActive = activeDrawing.id === drw.id;
              return (
                <div
                  key={drw.id}
                  onClick={() => {
                    setActiveDrawing(drw);
                    // scroll slightly to viewer if on mobile
                    if (window.innerWidth < 768) {
                      document
                        .getElementById('drawings')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group bg-[#181818] border p-3 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'border-[#B8976C] ring-1 ring-[#B8976C] bg-[#1E1E1E]'
                      : 'border-[#282828] hover:border-[#444]'
                  }`}
                >
                  <div className="relative aspect-[16/10] bg-[#0c131a] overflow-hidden mb-2.5 border border-[#222]">
                    <img
                      src={drw.previewImage}
                      alt={drw.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                    />
                    <div className="absolute top-2 left-2 bg-[#141414]/90 text-[10px] font-mono text-[#B8976C] px-2 py-0.5 border border-[#333]">
                      {drw.sheetNo}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-[9px] font-mono text-[#AAA] px-1.5 py-0.5">
                      {drw.scale}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#B8976C] uppercase block truncate">
                      {drw.category}
                    </span>
                    <h4 className="text-xs font-medium text-white truncate group-hover:text-[#B8976C] transition-colors">
                      {drw.title}
                    </h4>
                    <p className="text-[11px] text-[#777] font-mono truncate mt-0.5">
                      {drw.projectTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fullscreen Modal View */}
        {fullscreenModalDrawing && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6">
            <DrawingViewer
              drawing={fullscreenModalDrawing}
              isModal={true}
              onClose={() => setFullscreenModalDrawing(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
};
