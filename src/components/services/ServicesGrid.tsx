import React, { useState } from 'react';
import { freelanceServicesData } from '../../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { ProjectEnquiryForm } from './ProjectEnquiryForm';

interface ServicesGridProps {
  initialService?: string;
  initialProjectTitle?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  initialService,
  initialProjectTitle,
}) => {
  const [selectedService, setSelectedService] = useState<string | undefined>(initialService);

  const handleSelectService = (title: string) => {
    setSelectedService(title);
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#141414] text-white border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 mb-4 bg-[#1A1A1A]">
            <span className="w-1.5 h-1.5 bg-[#B8976C]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
              Consultancy & Freelance Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-4">
            Architectural & Visualization Services
          </h2>
          <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
            Partnering with private homeowners, real estate developers, senior architectural
            studios, and interior designers. Whether you require a full turnkey architectural
            design, an error-free GFC working drawing pack, or hyper-realistic 4K Lumion/D5 3D
            walkthroughs, every commission is executed with rigor.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceServicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectServiceForEnquiry={handleSelectService}
            />
          ))}
        </div>

        {/* Interactive Project Enquiry Form Anchor */}
        <div id="enquiry-form" className="pt-8">
          <ProjectEnquiryForm
            initialService={selectedService}
            initialProjectTitle={initialProjectTitle}
          />
        </div>
      </div>
    </section>
  );
};
