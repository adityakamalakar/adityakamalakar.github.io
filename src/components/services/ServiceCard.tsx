import React from 'react';
import { FreelanceService } from '../../types';

interface ServiceCardProps {
  service: FreelanceService;
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectServiceForEnquiry,
}) => {
  return (
    <div className="group bg-[#181818] border border-[#282828] hover:border-[#B8976C]/70 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] bg-[#B8976C]/10 px-2 py-0.5 border border-[#B8976C]/30">
            {service.badge || 'Professional Service'}
          </span>
          <span className="text-xs font-mono text-[#777]">
            Est. {service.typicalDuration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#E5C79E] transition-colors mb-2">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-xs text-[#8C8C8C] leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Deliverables List */}
        <div className="space-y-1.5 pt-4 border-t border-[#242424] mb-6">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] block mb-2">
            Scope & Deliverables:
          </span>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-[#A5A5A5]">
              <span className="text-[#B8976C] mt-0.5 text-xs">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tools & CTA */}
      <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {service.tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono bg-[#222] text-[#888] px-1.5 py-0.5 border border-[#2E2E2E]"
            >
              {tool}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSelectServiceForEnquiry(service.title)}
          className="text-xs font-mono text-[#B8976C] hover:text-white transition-colors flex items-center space-x-1"
        >
          <span>Request Quote</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
