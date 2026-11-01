import React from 'react';
import { profileData } from '../../data/profileData';

interface JobApplicationModeProps {
  onContactRecruiter: () => void;
}

export const JobApplicationMode: React.FC<JobApplicationModeProps> = ({ onContactRecruiter }) => {
  const { jobApplication, education, contact } = profileData;

  const handleDownloadResume = () => {
    // Generate clean downloadable print-ready architectural CV HTML or trigger PDF download
    const cvContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ar. Aditya N. Kamalakar - Architectural CV</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.5; color: #1a1a1a; max-width: 800px; margin: 40px auto; padding: 20px; }
    h1 { margin-bottom: 4px; font-size: 26px; color: #141414; letter-spacing: 0.5px; }
    .subtitle { color: #8A6D3B; font-weight: 600; font-size: 14px; text-transform: uppercase; margin-bottom: 15px; }
    .contact-line { font-size: 13px; color: #555; border-bottom: 1px solid #ccc; padding-bottom: 12px; margin-bottom: 20px; }
    h2 { font-size: 16px; text-transform: uppercase; border-bottom: 2px solid #8A6D3B; padding-bottom: 4px; margin-top: 24px; color: #222; }
    .item { margin-bottom: 14px; }
    .item-header { font-weight: bold; font-size: 14px; display: flex; justify-content: space-between; }
    .item-sub { color: #666; font-size: 13px; margin-bottom: 4px; }
    ul { margin: 6px 0 12px 18px; padding: 0; font-size: 13px; color: #333; }
    li { margin-bottom: 3px; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
  </style>
</head>
<body>
  <h1>Ar. Aditya N. Kamalakar</h1>
  <div class="subtitle">Architect | Architectural Designer | 3D Visualizer</div>
  <div class="contact-line">
    ${contact.email} | ${contact.phone} | ${contact.location} | Mumbai, India
  </div>

  <h2>Professional Profile</h2>
  <p style="font-size: 13px; color: #333;">
    ${jobApplication.summaryForRecruiters}
  </p>

  <h2>Education</h2>
  <div class="item">
    <div class="item-header">
      <span>${education.degree}</span>
      <span>Mumbai, India</span>
    </div>
    <div class="item-sub">${education.institution}</div>
    <p style="font-size: 13px; color: #444;">${education.description}</p>
    <ul>
      ${education.coreFocus.map((f) => `<li>${f}</li>`).join('')}
    </ul>
  </div>

  <h2>Key Architectural Competencies</h2>
  <ul>
    <li>Architectural Design & Space Planning for Residential & Commercial Typologies</li>
    <li>Good For Construction (GFC) Working Drawings, Column Centerlines & Detailing</li>
    <li>Staircase, Sunken Slab Waterproofing, Toilet & Joinery Construction Packs</li>
    <li>National Building Code (NBC) & Mumbai DCR Regulation Compliance</li>
    <li>Photorealistic 4K Lumion & D5 Exterior / Interior Architectural Visualization</li>
    <li>3D Walkthrough Animation, Camera Path Choreography & Post-Processing</li>
  </ul>

  <h2>Software & Digital Tools</h2>
  <div class="skills-grid">
    <div><strong>Drafting & BIM:</strong> AutoCAD 2021, Autodesk Revit</div>
    <div><strong>3D Modeling:</strong> SketchUp Pro, Rhino 3D</div>
    <div><strong>Rendering & CGI:</strong> Lumion 12.5 Pro, D5 Render, V-Ray</div>
    <div><strong>Post-Production:</strong> Adobe Photoshop, InDesign, Premiere Pro</div>
  </div>

  <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 11px; color: #777; text-align: center;">
    Portfolio & Drawing Sheets Available for Verification • Contact: ${contact.email}
  </div>
</body>
</html>
    `;

    const blob = new Blob([cvContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) {
      setTimeout(() => {
        win.print();
      }, 500);
    }
  };

  return (
    <div className="bg-[#181818] border-2 border-[#B8976C]/50 p-6 sm:p-8 mb-12 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8976C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2A2A2A]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ade80] font-semibold">
              Recruiter & Practice Principal Mode Active
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
            Candidate Dossier: Ar. Aditya N. Kamalakar
          </h3>
          <p className="text-xs text-[#8C8C8C] mt-0.5">
            Targeting Full-Time Architectural Designer, Project Architect, BIM Specialist & 3D
            Visualizer Opportunities
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownloadResume}
            className="px-4 py-2 bg-[#B8976C] hover:bg-[#A38054] text-[#141414] font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow"
          >
            <span>📄 Download Official CV (PDF)</span>
          </button>
          <button
            onClick={onContactRecruiter}
            className="px-4 py-2 border border-[#B8976C] text-[#E5C79E] hover:bg-[#B8976C]/20 text-xs uppercase tracking-wider transition-colors"
          >
            Schedule Interview
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="py-6 border-b border-[#2A2A2A]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8976C] block mb-2">
          Executive Summary for Hiring Principals:
        </span>
        <p className="text-sm text-[#D1D1D1] leading-relaxed italic bg-[#121212] p-4 border-l-2 border-[#B8976C]">
          "{jobApplication.summaryForRecruiters}"
        </p>
      </div>

      {/* Recruiter Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#737373] block mb-1">
            Academic Degree
          </span>
          <span className="text-white font-medium block">{education.degree}</span>
          <span className="text-[#8C8C8C] text-[11px] block mt-0.5">
            {education.institution}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-[#737373] block mb-1">
            Target Roles
          </span>
          <ul className="text-white space-y-0.5 text-[11px]">
            {jobApplication.roles.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-[#737373] block mb-1">
            Notice & Availability
          </span>
          <span className="text-[#4ade80] font-mono block">{jobApplication.noticePeriod}</span>
          <span className="text-[#8C8C8C] text-[11px] block mt-1">
            Locations: {jobApplication.preferredLocations.join(', ')}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-[#737373] block mb-1">
            Core Production Engines
          </span>
          <div className="flex flex-wrap gap-1 mt-1">
            {['AutoCAD 2021', 'Revit', 'Lumion 12.5', 'D5 Render', 'SketchUp', 'Photoshop'].map(
              (s, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono bg-[#202020] text-[#AAA] px-1.5 py-0.5 border border-[#333]"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
