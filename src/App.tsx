import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, ProjectDrawing } from './types';
import { projectsData } from './data/projectsData';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { ProjectFilter } from './components/portfolio/ProjectFilter';
import { ProjectCard } from './components/portfolio/ProjectCard';
import { ProjectDetailModal } from './components/portfolio/ProjectDetailModal';
import { TechnicalDrawingGallery } from './components/drawings/TechnicalDrawingGallery';
import { ServicesGrid } from './components/services/ServicesGrid';
import { BiographySection } from './components/about/BiographySection';
import { JobApplicationMode } from './components/about/JobApplicationMode';
import { IndraprasthaStudioSection } from './components/studio/IndraprasthaStudioSection';
import { ContactSection } from './components/contact/ContactSection';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isJobMode, setIsJobMode] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [enquiryProjectTitle, setEnquiryProjectTitle] = useState<string>('');
  const [drawingLightbox, setDrawingLightbox] = useState<ProjectDrawing | null>(null);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'All' || project.categories.includes(selectedCategory as ProjectCategory);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const titleMatch = project.title.toLowerCase().includes(query);
      const subtitleMatch = project.subtitle.toLowerCase().includes(query);
      const locationMatch = project.location.toLowerCase().includes(query);
      const softwareMatch = project.softwareUsed.some((s) => s.toLowerCase().includes(query));
      const typologyMatch = project.typology.toLowerCase().includes(query);

      return categoryMatch && (titleMatch || subtitleMatch || locationMatch || softwareMatch || typologyMatch);
    });
  }, [selectedCategory, searchQuery]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireSimilar = (projectTitle: string) => {
    setEnquiryProjectTitle(projectTitle);
    setActiveModalProject(null);
    const enquiryElement = document.getElementById('enquiry-form');
    if (enquiryElement) {
      enquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#E0E0E0] font-sans antialiased selection:bg-[#B8976C] selection:text-[#141414]">
      {/* Top Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isJobMode={isJobMode}
        setIsJobMode={setIsJobMode}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreWork={() => handleNavigate('portfolio')}
          onViewServices={() => handleNavigate('services')}
          onHireMe={() => handleNavigate('contact')}
        />

        {/* Recruiter / Job Application Mode Dossier Banner */}
        {isJobMode && (
          <section className="bg-[#121212] pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <JobApplicationMode
              onContactRecruiter={() => handleNavigate('contact')}
            />
          </section>
        )}

        {/* Project Portfolio Gallery Section */}
        <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#222222]">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 border border-[#B8976C]/40 px-3 py-1 mb-4 bg-[#1A1A1A]">
              <span className="w-1.5 h-1.5 bg-[#B8976C]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C79E]">
                Comprehensive Design Archive
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-4">
              Curated Architectural Works
            </h2>
            <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
              Explore residential villas, commercial high-rises, institutional campuses, interior
              transformations, and photorealistic 3D visualization studies. Every project demonstrates
              clarity of concept, compliance with municipal guidelines, and resolved construction
              drawing sets.
            </p>
          </div>

          {/* Interactive Project Filter & Search */}
          <ProjectFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={filteredProjects.length}
          />

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetails={(p) => setActiveModalProject(p)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#333] bg-[#181818] p-8">
              <p className="text-sm text-[#888] font-mono mb-3">
                No projects found matching the filter "{selectedCategory}" and search "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-[#B8976C] text-[#141414] text-xs font-mono font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Dedicated Technical Drawing Gallery */}
        <TechnicalDrawingGallery />

        {/* Freelance Services & Enquiry Form */}
        <ServicesGrid
          initialProjectTitle={enquiryProjectTitle}
        />

        {/* Biography & Credentials Section */}
        <section id="about" className="py-24 bg-[#141414] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#222222]">
          <BiographySection />
        </section>

        {/* Future Studio: Indraprastha Architects & Design Studio */}
        <IndraprasthaStudioSection />

        {/* Contact Section */}
        <ContactSection
          onScrollToEnquiry={() => handleNavigate('enquiry-form')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onEnquireSimilar={handleEnquireSimilar}
          onOpenDrawingLightbox={(drw) => setDrawingLightbox(drw)}
        />
      )}

      {/* Quick Drawing Lightbox */}
      {drawingLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setDrawingLightbox(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-[#111] border border-[#444] p-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-3 border-b border-[#222] text-xs font-mono text-[#DDD]">
              <span>{drawingLightbox.title} • Scale {drawingLightbox.scale || 'NTS'}</span>
              <button
                onClick={() => setDrawingLightbox(null)}
                className="text-[#888] hover:text-white px-2 py-1"
              >
                ✕ Close
              </button>
            </div>
            <img
              src={drawingLightbox.image}
              alt={drawingLightbox.title}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
