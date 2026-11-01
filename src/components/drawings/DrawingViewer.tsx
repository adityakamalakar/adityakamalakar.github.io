import React, { useState, useRef } from 'react';
import { TechnicalDrawing } from '../../types';

interface DrawingViewerProps {
  drawing: TechnicalDrawing;
  onClose?: () => void;
  isModal?: boolean;
}

export const DrawingViewer: React.FC<DrawingViewerProps> = ({
  drawing,
  onClose,
  isModal = false,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(true);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 50, 400));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 50, 100);
      if (next === 100) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setZoomLevel(100);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 100) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`flex flex-col bg-[#121212] border border-[#2A2A2A] overflow-hidden ${
        isModal ? 'max-w-6xl w-full max-h-[92vh]' : 'w-full'
      }`}
    >
      {/* Top Controls Bar */}
      <div className="bg-[#181818] px-4 py-3 border-b border-[#262626] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Sheet Number & Title */}
        <div className="flex items-center space-x-3">
          <span className="bg-[#B8976C] text-[#141414] font-bold px-2.5 py-0.5 tracking-wider">
            {drawing.sheetNo}
          </span>
          <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
            {drawing.title}
          </span>
          <span className="hidden md:inline-block text-[#737373]">• Scale {drawing.scale}</span>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center space-x-2">
          {/* Blueprint Mode Toggle */}
          <button
            onClick={() => setIsBlueprintMode(!isBlueprintMode)}
            className={`px-2.5 py-1 border text-[11px] transition-colors ${
              isBlueprintMode
                ? 'bg-[#0f2744] text-[#8bc34a] border-[#1d4ed8]'
                : 'bg-[#EDEDED] text-[#111] border-[#CCC]'
            }`}
            title="Toggle Blueprint Blue vs White Drafting Paper Mode"
          >
            {isBlueprintMode ? 'Blueprint Mode' : 'White Paper'}
          </button>

          {/* Zoom Controls */}
          <div className="flex items-center border border-[#333] bg-[#161616]">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 100}
              className="px-2.5 py-1 text-white hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed"
              title="Zoom Out"
            >
              －
            </button>
            <span className="px-2 py-1 text-[11px] text-[#C5A880] w-14 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 400}
              className="px-2.5 py-1 text-white hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed"
              title="Zoom In"
            >
              ＋
            </button>
          </div>

          <button
            onClick={handleReset}
            className="px-2.5 py-1 border border-[#333] text-[#888] hover:text-white hover:border-[#555] text-[11px]"
            title="Reset Zoom & Pan"
          >
            Reset
          </button>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#262626] hover:bg-[#333] text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Drawing Canvas / Zoom Area */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`relative aspect-[16/10] overflow-hidden select-none cursor-${
          zoomLevel > 100 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        } ${isBlueprintMode ? 'bg-[#0b1622]' : 'bg-[#F4F2EC]'}`}
      >
        {/* Subtle Drafting Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: isBlueprintMode
              ? 'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)'
              : 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Scaled/Panned Content */}
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel / 100})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
          className="w-full h-full flex items-center justify-center relative p-6"
        >
          {/* Architectural Drawing Graphic */}
          <div
            className={`w-full h-full relative border-2 flex flex-col justify-between p-4 ${
              isBlueprintMode
                ? 'border-[#38bdf8]/50 bg-[#09121d]/90 text-[#e0f2fe]'
                : 'border-[#222] bg-[#FAF8F5] text-[#111]'
            }`}
          >
            {/* Drawing Preview Image with linework filter */}
            <div className="relative flex-1 overflow-hidden flex items-center justify-center">
              <img
                src={drawing.previewImage}
                alt={drawing.title}
                className={`max-w-full max-h-full object-contain ${
                  isBlueprintMode
                    ? 'mix-blend-screen opacity-90 contrast-125'
                    : 'mix-blend-multiply opacity-85 contrast-110'
                }`}
                draggable={false}
              />

              {/* Watermark CAD Crosshair Overlay */}
              <div
                className={`absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 ${
                  isBlueprintMode ? 'text-[#38bdf8]' : 'text-[#555]'
                }`}
              >
                <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
                  {/* Grid centerlines */}
                  <line
                    x1="400"
                    y1="0"
                    x2="400"
                    y2="500"
                    stroke="currentColor"
                    strokeDasharray="8 6"
                    strokeWidth="0.8"
                  />
                  <line
                    x1="0"
                    y1="250"
                    x2="800"
                    y2="250"
                    stroke="currentColor"
                    strokeDasharray="8 6"
                    strokeWidth="0.8"
                  />

                  {/* Dimension lines & ticks */}
                  <line x1="100" y1="40" x2="700" y2="40" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="35" x2="100" y2="45" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="250" y1="35" x2="250" y2="45" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="550" y1="35" x2="550" y2="45" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="700" y1="35" x2="700" y2="45" stroke="currentColor" strokeWidth="1.5" />

                  {/* Level datum triangle */}
                  <polygon points="120,440 130,425 110,425" fill="currentColor" />
                  <line x1="100" y1="440" x2="160" y2="440" stroke="currentColor" strokeWidth="1" />
                  <text
                    x="165"
                    y="443"
                    fill="currentColor"
                    fontSize="11"
                    fontFamily="monospace"
                  >
                    ±0.00 FFL
                  </text>
                </svg>
              </div>
            </div>

            {/* Standard Architectural Title Block (Bottom Right Corner) */}
            <div
              className={`mt-3 p-3 border-t-2 text-[10px] font-mono grid grid-cols-2 sm:grid-cols-4 gap-2 ${
                isBlueprintMode
                  ? 'border-[#38bdf8]/40 bg-[#060c14]/80 text-[#93c5fd]'
                  : 'border-[#222] bg-[#EAE7DF] text-[#222]'
              }`}
            >
              <div>
                <span className="block opacity-60">PROJECT:</span>
                <span className="font-semibold">{drawing.projectTitle}</span>
              </div>
              <div>
                <span className="block opacity-60">DRAWING TITLE:</span>
                <span className="font-semibold">{drawing.title}</span>
              </div>
              <div>
                <span className="block opacity-60">DISCIPLINE // SCALE:</span>
                <span className="font-semibold">
                  {drawing.specs.discipline} // {drawing.scale}
                </span>
              </div>
              <div>
                <span className="block opacity-60">SHEET NO // STAGE:</span>
                <span className="font-bold text-[#f59e0b]">{drawing.sheetNo}</span> //{' '}
                {drawing.specs.stage}
              </div>
            </div>
          </div>
        </div>

        {/* Pan Instruction Overlay when zoomed */}
        {zoomLevel > 100 && (
          <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 text-[10px] font-mono text-[#AAA] border border-[#333] pointer-events-none">
            Click & Drag to Pan Linework • Zoom: {zoomLevel}%
          </div>
        )}
      </div>

      {/* Sheet Metadata & Keynotes Bar */}
      <div className="bg-[#161616] p-5 border-t border-[#262626] text-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block">
              Architectural Description & Drafting Specifications
            </span>
            <p className="text-[#C0C0C0] text-xs leading-relaxed mt-1">
              {drawing.description}
            </p>
          </div>
          <div className="text-right font-mono text-[11px] text-[#777] whitespace-nowrap">
            <div>Software: <span className="text-white">{drawing.software}</span></div>
            <div>Sheet Size: <span className="text-white">{drawing.specs.sheetSize}</span></div>
            <div>Revision: <span className="text-[#B8976C]">{drawing.specs.revisions}</span></div>
          </div>
        </div>

        {/* Key Notes */}
        {drawing.keyNotes && drawing.keyNotes.length > 0 && (
          <div className="pt-3 border-t border-[#242424]">
            <span className="text-[10px] font-mono text-[#999] uppercase tracking-wider block mb-1.5">
              General Notes & Site Tolerances:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-[#888]">
              {drawing.keyNotes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-[#B8976C] font-mono">[{idx + 1}]</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
