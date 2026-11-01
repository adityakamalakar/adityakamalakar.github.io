export type ProjectCategory =
  | 'Architecture'
  | 'Residential Design'
  | 'Commercial Design'
  | 'Institutional Projects'
  | 'Working Drawings'
  | 'Architectural Detailing'
  | 'Interior Design'
  | 'Exterior Rendering'
  | 'Interior Rendering'
  | '3D Walkthroughs'
  | 'Freelance Projects';

export interface ProjectDrawing {
  title: string;
  image: string;
  type: string;
  scale?: string;
  sheetNo?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  coverImage: string;
  galleryImages: string[];
  drawings: ProjectDrawing[];
  description: string;
  concept: string;
  location: string;
  year: string;
  typology: string;
  siteArea?: string;
  builtUpArea?: string;
  softwareUsed: string[];
  myContribution: string[];
  featured?: boolean;
  status?: string;
  walkthroughUrl?: string;
}

export type DrawingCategory =
  | 'Plans'
  | 'Sections'
  | 'Elevations'
  | 'Construction Drawings'
  | 'Staircase Details'
  | 'Toilet Details'
  | 'Door-Window Details'
  | 'Joinery Details';

export interface TechnicalDrawing {
  id: string;
  sheetNo: string;
  title: string;
  projectTitle: string;
  category: DrawingCategory;
  scale: string;
  date: string;
  software: string;
  previewImage: string;
  description: string;
  keyNotes: string[];
  specs: {
    sheetSize: string;
    discipline: string;
    stage: string;
    revisions: string;
  };
}

export interface FreelanceService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  tools: string[];
  typicalDuration: string;
  badge?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  description: string;
  coreFocus: string[];
}

export interface ContactConfig {
  email: string;
  phone: string;
  whatsapp: string; // international format without spaces, e.g., 919876543210
  location: string;
  linkedin: string;
  instagram: string;
  behance?: string;
  resumeUrl: string;
  portfolioPdfUrl: string;
}

export interface JobApplicationInfo {
  status: 'Open for Opportunities' | 'Available for Contract' | 'Employed';
  roles: string[];
  experienceLevel: string;
  noticePeriod: string;
  preferredLocations: string[];
  workModel: string;
  summaryForRecruiters: string;
}

export interface StudioIdentity {
  name: string;
  tagline: string;
  vision: string;
  disclaimer: string;
  values: {
    title: string;
    description: string;
  }[];
}

export interface ProfileData {
  name: string;
  prefix: string;
  titles: string[];
  headline: string;
  subheadline: string;
  bioParagraphs: string[];
  education: EducationInfo;
  interests: string[];
  softwareSkills: {
    category: string;
    items: { name: string; proficiency: number; experience: string }[];
  }[];
  contact: ContactConfig;
  jobApplication: JobApplicationInfo;
  futureStudio: StudioIdentity;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  approxBudget: string;
  approxArea: string;
  services: string[];
  timeline: string;
  message: string;
  preferredContact: 'WhatsApp' | 'Email' | 'Phone';
}
