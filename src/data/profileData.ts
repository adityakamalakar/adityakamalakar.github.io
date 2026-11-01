import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Aditya N. Kamalakar',
  prefix: 'Ar.',
  photoUrl: 'images/aditya-kamalakar.jpg',
  titles: [
    'Architect',
    'Architectural Designer',
    '3D Visualizer',
  ],
  headline: 'Designing Spaces. Detailing Ideas. Visualizing Possibilities.',
  subheadline:
    'Dedicated to delivering contextual architecture, buildable technical precision, and hyper-realistic visualization from concept through construction.',
  
  bioParagraphs: [
    'I am an architect and visualizer passionate about bridging architectural design intent with precise on-site execution. My training grounds me in rigorous spatial planning, National Building Code compliance, municipal drawing standards, and detailed construction documentation.',
    'Throughout my academic and professional journey, I have cultivated a dual strength: translating complex client briefs into sensible architectural volumes, and developing high-fidelity 3D visual narratives and working drawing packages that make execution seamless on site.',
    'Whether working on a multi-scale residential development, high-end interior transformation, or freelance visualization commission, I treat every millimeter with tectonic clarity, spatial empathy, and structural logic.',
  ],

  education: {
    degree: 'Bachelor of Architecture (B.Arch)',
    institution: 'Dr. Baliram Hiray College of Architecture',
    location: 'Mumbai, Maharashtra, India',
    description:
      'Comprehensive 5-year professional architectural education covering architectural design studios, building construction & materials, structural design, building services, landscape architecture, town planning, and professional practice.',
    coreFocus: [
      'Architectural Design Studios (Residential, Commercial & Institutional)',
      'Building Construction, Materials & Specifications',
      'Good For Construction (GFC) & Municipal Submission Sets',
      'Building Services (MEP, HVAC, Fire Fighting & Acoustics)',
      'Architectural Visualization & Digital Fabrication',
      'Urban Context, Climate-Responsive Design & By-laws',
    ],
  },

  interests: [
    'Architectural Design',
    'Working Drawings & GFC Sets',
    'Construction Detailing & Joinery',
    'Interior Design & Millwork',
    '3D Architectural Visualization',
    'Tropical & Contextual Modernism',
    'BIM & Computational Workflows',
  ],

  softwareSkills: [
    {
      category: 'Drafting, BIM & Technical',
      items: [
        { name: 'AutoCAD (2D & Detailing)', proficiency: 96, experience: 'Primary drafting & GFC engine' },
        { name: 'Autodesk Revit (BIM)', proficiency: 88, experience: 'Parametric modeling & documentation' },
        { name: 'SketchUp Pro', proficiency: 94, experience: 'Rapid massing & detailed joinery models' },
        { name: 'Municipal By-law & DCR Compliance', proficiency: 90, experience: 'Floor area, setback & approval sheets' },
      ],
    },
    {
      category: 'Rendering & 3D Visualization',
      items: [
        { name: 'Lumion (12.5 & Pro)', proficiency: 95, experience: 'Photorealistic exteriors, lighting & landscape' },
        { name: 'D5 Render', proficiency: 90, experience: 'Real-time ray tracing & cinematic walkthroughs' },
        { name: 'V-Ray & Enscape', proficiency: 85, experience: 'Interior daylight studies & texture realism' },
        { name: '3D Walkthrough Animation', proficiency: 88, experience: 'Camera pathing, choreography & video montage' },
      ],
    },
    {
      category: 'Post-Production & Presentation',
      items: [
        { name: 'Adobe Photoshop', proficiency: 92, experience: 'Render post-processing & architectural collages' },
        { name: 'Adobe InDesign', proficiency: 86, experience: 'Client pitch books & portfolio curation' },
        { name: 'Adobe Premiere Pro', proficiency: 82, experience: 'Cinematic architectural walkthrough editing' },
      ],
    },
  ],

  contact: {
    email: 'aditya.kamalakar.arch@gmail.com', // Replaceable placeholder
    phone: '+91 98765 43210',                  // Replaceable placeholder
    whatsapp: '919876543210',                  // Replaceable numeric format (country code + number)
    location: 'Mumbai, Maharashtra, India',
    linkedin: 'https://linkedin.com/in/aditya-kamalakar-arch',
    instagram: 'https://instagram.com/indraprastha.studio',
    portfolioPdfUrl: '#portfolio-pdf',
    resumeUrl: '#resume-download',
  },

  jobApplication: {
    status: 'Open for Opportunities',
    roles: [
      'Architectural Designer',
      'Junior / Project Architect',
      'BIM & Working Drawing Specialist',
      '3D Architectural Visualizer',
    ],
    experienceLevel: 'Architectural Professional & Freelance Practitioner',
    noticePeriod: 'Available for Immediate Joining / Project Consultancies',
    preferredLocations: ['Mumbai Metropolitan Region', 'Pune', 'Remote / Hybrid Freelance'],
    workModel: 'Full-Time Studio Roles, Associate Contracts, or Commissioned Freelance',
    summaryForRecruiters:
      'Ar. Aditya N. Kamalakar brings a rare synergy of design sensibility, meticulous AutoCAD/Revit working drawing execution, and high-end Lumion/D5 3D rendering. Prepared to step into client-facing concept design, municipality drawing preparation, or technical detailing workflows from day one.',
  },

  futureStudio: {
    name: 'Indraprastha Architects & Design Studio',
    tagline: 'An emerging architectural practice and design research laboratory.',
    vision:
      'Indraprastha is envisioned as a future multi-disciplinary practice exploring the intersection of contextual Indian modernism, sustainable passive cooling, structural honesty, and high-precision craft. Founded by Ar. Aditya N. Kamalakar, the studio represents an ongoing body of design exploration and freelance commissions.',
    disclaimer:
      'Important Note: "Indraprastha Architects & Design Studio" is presented herein as a proprietary conceptual design identity, research studio, and portfolio umbrella for Ar. Aditya N. Kamalakar. It is not represented as an incorporated corporate entity or pre-registered commercial partnership.',
    values: [
      {
        title: 'Contextual Modernism',
        description:
          'Rooted in climatic sensibilities, local material palettes, and sunlight control tailored to Indian subcontinental conditions.',
      },
      {
        title: 'Tectonic & Detailing Rigor',
        description:
          'Architecture is built on the strength of its working drawings. No concept is complete without resolved joints, waterproofing, and construction logic.',
      },
      {
        title: 'Immersive Visualization',
        description:
          'Leveraging advanced real-time rendering and animation so clients, consultants, and contractors share a common, transparent spatial vision.',
      },
      {
        title: 'Sustainable Materiality',
        description:
          'Prioritizing locally sourced stone, exposed brickwork, lime plasters, responsibly sourced timber, and passive shading over superficial ornament.',
      },
    ],
  },
};
