import React, { useState } from 'react';
import { EnquiryFormData } from '../../types';
import { profileData } from '../../data/profileData';

interface ProjectEnquiryFormProps {
  initialService?: string;
  initialProjectTitle?: string;
}

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({
  initialService,
  initialProjectTitle,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Villa / Bungalow',
    location: '',
    approxBudget: '₹25 Lakhs – ₹50 Lakhs',
    approxArea: '',
    services: initialService ? [initialService] : ['Architectural Planning & Concept Design'],
    timeline: 'Immediate / Within 1 Month',
    message: initialProjectTitle
      ? `Hello Ar. Aditya, I am interested in discussing a project similar in scale/style to "${initialProjectTitle}".`
      : '',
    preferredContact: 'WhatsApp',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const serviceOptions = [
    'Architectural Planning & Concept Design',
    'Municipal & Working Drawings (GFC)',
    'Construction Detailing & Technical Packs',
    'Bespoke Interior Design & Space Planning',
    '3D Architectural Modeling',
    'Photorealistic Interior & Exterior Rendering',
    'Architectural 3D Walkthroughs & Video',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const generateFormattedMessage = (): string => {
    return `*ARCHITECTURAL PROJECT ENQUIRY*
----------------------------------------
*Client Name:* ${formData.fullName || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Project Typology:* ${formData.projectType}
*Location:* ${formData.location || 'Not specified'}
*Approx Area:* ${formData.approxArea || 'Not specified'}
*Estimated Budget:* ${formData.approxBudget}
*Timeline:* ${formData.timeline}
*Services Required:* 
${formData.services.map((s) => `• ${s}`).join('\n')}

*Brief Notes:*
${formData.message || 'None provided'}
----------------------------------------
Sent via Ar. Aditya N. Kamalakar Portfolio`;
  };

  const handleWhatsAppInquiry = () => {
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide at least your Name and Phone/WhatsApp number.');
      return;
    }
    setErrorMessage('');
    const text = encodeURIComponent(generateFormattedMessage());
    window.open(`https://wa.me/${profileData.contact.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailInquiry = () => {
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please provide at least your Name and Email address.');
      return;
    }
    setErrorMessage('');
    const subject = encodeURIComponent(
      `Project Enquiry: ${formData.projectType} in ${formData.location || 'India'} - ${formData.fullName}`
    );
    const body = encodeURIComponent(generateFormattedMessage());
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || (!formData.phone.trim() && !formData.email.trim())) {
      setErrorMessage('Please provide your name and at least one contact method (email or phone).');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#181818] border border-[#2E2E2E] p-6 sm:p-10 shadow-xl">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 bg-[#B8976C]/20 border border-[#B8976C] text-[#B8976C] rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h3 className="text-2xl font-serif text-white">Thank You, {formData.fullName}</h3>
          <p className="text-sm text-[#8C8C8C] max-w-md mx-auto leading-relaxed">
            Your project enquiry has been logged successfully. Ar. Aditya N. Kamalakar will review
            your drawings/requirements and respond within 24 hours.
          </p>
          <div className="pt-6 flex justify-center gap-4">
            <button
              onClick={handleWhatsAppInquiry}
              className="px-5 py-2.5 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center space-x-2"
            >
              <span>Instant Chat on WhatsApp</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 border border-[#444] text-xs text-[#AAA] hover:text-white"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div>
            <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-2.5 py-0.5 mb-2 bg-[#141414]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
                Direct Architectural Commission & Freelance Brief
              </span>
            </div>
            <h3 className="text-2xl font-serif text-white">Commission a Project or Request Quote</h3>
            <p className="text-xs text-[#8C8C8C] mt-1">
              Fill in your preliminary requirements below. You can send this enquiry directly to
              Ar. Aditya via WhatsApp or Email.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-950/40 border border-red-500 text-red-200 text-xs">
              ⚠️ {errorMessage}
            </div>
          )}

          {/* Section 1: Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g., Rajesh Sharma"
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@domain.com"
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98200 XXXXX"
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              />
            </div>
          </div>

          {/* Section 2: Project Particulars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Project Typology
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              >
                <option>Residential Villa / Bungalow</option>
                <option>Apartment Interior Design</option>
                <option>Commercial Office Space</option>
                <option>Retail Boutique / Showroom</option>
                <option>Hospitality / Eco-Resort</option>
                <option>Institutional / Educational</option>
                <option>3D Visualization & Walkthrough Only</option>
                <option>Working Drawing Package Only</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Project Location (City, State)
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Alibaug, Mumbai, Pune"
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Plot / Built-up Area
              </label>
              <input
                type="text"
                value={formData.approxArea}
                onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                placeholder="e.g., 3,500 sq. ft."
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
                Estimated Budget Range
              </label>
              <select
                value={formData.approxBudget}
                onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
              >
                <option>Under ₹25 Lakhs</option>
                <option>₹25 Lakhs – ₹50 Lakhs</option>
                <option>₹50 Lakhs – ₹1 Crore</option>
                <option>₹1 Crore – ₹3 Crores</option>
                <option>₹3 Crores+</option>
                <option>Architectural Consultancy Fee Only</option>
              </select>
            </div>
          </div>

          {/* Section 3: Required Services (Checkboxes) */}
          <div>
            <label className="block text-[11px] font-mono text-[#B8976C] uppercase tracking-wider mb-2">
              Select Required Services (Multi-Select):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {serviceOptions.map((serv, idx) => {
                const isChecked = formData.services.includes(serv);
                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleServiceToggle(serv)}
                    className={`text-left p-2.5 border text-xs flex items-center space-x-2 transition-all ${
                      isChecked
                        ? 'border-[#B8976C] bg-[#B8976C]/10 text-white font-medium'
                        : 'border-[#2D2D2D] bg-[#141414] text-[#888] hover:border-[#444]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 border flex items-center justify-center text-[9px] ${
                        isChecked
                          ? 'border-[#B8976C] bg-[#B8976C] text-black font-bold'
                          : 'border-[#444]'
                      }`}
                    >
                      {isChecked ? '✓' : ''}
                    </span>
                    <span className="truncate">{serv}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Brief Description */}
          <div>
            <label className="block text-[11px] font-mono text-[#AAA] uppercase mb-1">
              Project Description / Site Conditions / Special Requests
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your site, design preferences, timeline requirements..."
              className="w-full bg-[#121212] border border-[#333] text-white text-xs p-3 focus:outline-none focus:border-[#B8976C]"
            />
          </div>

          {/* Section 5: Direct Action Buttons (WhatsApp, Email, Form Submit) */}
          <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* WhatsApp direct button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                title={`Send direct pre-filled WhatsApp message to ${profileData.contact.phone}`}
              >
                <span>💬 Send via WhatsApp</span>
              </button>

              {/* Email direct button */}
              <button
                type="button"
                onClick={handleEmailInquiry}
                className="px-5 py-3 border border-[#B8976C] text-[#E5C79E] hover:bg-[#B8976C] hover:text-[#141414] font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                title={`Open email draft to ${profileData.contact.email}`}
              >
                <span>✉ Send via Email</span>
              </button>
            </div>

            {/* Standard Form Submit */}
            <button
              type="submit"
              className="px-8 py-3 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-bold text-xs uppercase tracking-widest transition-colors shadow-md"
            >
              Submit Brief Online
            </button>
          </div>

          {/* Configurable Note */}
          <div className="text-[11px] font-mono text-[#666] flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#202020]">
            <span>
              Configured Contact: {profileData.contact.email} • {profileData.contact.phone}
            </span>
            <span>Client confidentiality guaranteed for all submissions</span>
          </div>
        </form>
      )}
    </div>
  );
};
