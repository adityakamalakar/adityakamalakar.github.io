import { FreelanceService } from '../types';

export const freelanceServicesData: FreelanceService[] = [
  {
    id: 'arch-planning',
    title: 'Architectural Planning & Concept Design',
    shortDesc:
      'Site analysis, zoning studies, spatial optimization, and concept schematic layouts tailored to your lifestyle and climate.',
    fullDesc:
      'From vacant plot to approved conceptual schematic. We analyze solar paths, prevailing wind vectors, local municipal setback bylaws, and client lifestyle aspirations to sculpt efficient, poetic floor plans and spatial volumes.',
    icon: 'Compass',
    deliverables: [
      'Comprehensive Site & Climate Analysis',
      'Zoning, Setback & Municipal By-Law Verification',
      'Bubble Diagrams & Functional Spatial Zoning',
      'Schematic Floor Plans (2-3 Concept Options)',
      'Building Masses & 3D Volumetric Studies',
    ],
    tools: ['AutoCAD', 'SketchUp Pro', 'Revit'],
    typicalDuration: '2 - 3 Weeks',
    badge: 'Core Architecture',
  },
  {
    id: 'working-drawings',
    title: 'Municipal & Working Drawings (GFC)',
    shortDesc:
      'Accurate, dimensioned Good-For-Construction drawings that eliminate contractor guesswork and avoid costly site mistakes.',
    fullDesc:
      'The backbone of successful construction execution. Every drawing is crafted with meticulous datum levels, column centerline offsets, wall thickness callouts, and MEP sleeve coordination to ensure your contractor builds exactly what was designed.',
    icon: 'FileText',
    deliverables: [
      'Column Centerline & Foundation Setting Out Plans',
      'Ground & Upper Floor Architectural Working Plans',
      'Cross & Longitudinal Architectural Sections',
      'All Facade Elevations with Datum & Material Marks',
      'Sunk Slab, Lintel & Masonry Schedules',
    ],
    tools: ['AutoCAD 2021', 'Autodesk Revit'],
    typicalDuration: '3 - 4 Weeks',
    badge: 'Technical Precision',
  },
  {
    id: 'construction-detailing',
    title: 'Construction Detailing & Technical Packs',
    shortDesc:
      'High-detail joinery, staircase sections, wet-area waterproofing, and specialized architectural junctions for builders.',
    fullDesc:
      'The difference between ordinary and extraordinary architecture lies in the junctions. We supply contractors and fabricators with 1:10 and 1:2 scale drawings for floating staircases, glass balustrades, facade louvers, and sunken wet area waterproofing.',
    icon: 'Layers',
    deliverables: [
      'Cantilever & Suspended Staircase Structural Details',
      'Toilet Plumbing Layout & Sunken Slab Waterproofing Details',
      'Door & Window Schedules with Thermal Break Aluminum Profiles',
      'Parapet, Coping & Rainwater Scupper Drainage Details',
      'Railing, Handrail & Glass Shoe Mounting Details',
    ],
    tools: ['AutoCAD', 'Revit', 'Photoshop'],
    typicalDuration: '1 - 2 Weeks',
    badge: 'Execution Ready',
  },
  {
    id: 'interior-design',
    title: 'Bespoke Interior Design & Space Planning',
    shortDesc:
      'Transforming raw apartments and villas into warm, bespoke sanctuaries with custom millwork and curated material palettes.',
    fullDesc:
      'Complete interior design service focusing on tactile surfaces, spatial flow, and seamless storage. We handle everything from furniture arrangement and Reflected Ceiling Plans (RCP) to custom wardrobe joinery and ambient lighting schemes.',
    icon: 'Layout',
    deliverables: [
      'Furniture Spatial Layout & Circulation Flow',
      'Reflected Ceiling Plans (RCP) & Lighting Schemes',
      'Custom Millwork, Wardrobe & Vanity Joinery Sets',
      'Flooring Tile Alignment & Transition Details',
      'Material, Veneer, Stone & Hardware Spec Sheets',
    ],
    tools: ['AutoCAD', 'SketchUp', 'D5 Render', 'Photoshop'],
    typicalDuration: '3 - 5 Weeks',
    badge: 'Turnkey Design',
  },
  {
    id: '3d-modeling',
    title: '3D Architectural Modeling',
    shortDesc:
      'High-precision 3D geometric modeling from 2D CAD drawings or napkin sketches for architects, developers, and homeowners.',
    fullDesc:
      'Clean, watertight 3D digital models structured with organized tags, layers, and true-to-life building component dimensions. Ready for structural coordination, client presentations, or immediate rendering pipeline import.',
    icon: 'Box',
    deliverables: [
      'Detailed SketchUp / Revit Digital Building Model',
      'Site Topography & Surrounding Context Massing',
      'Clean Component & Layer Hierarchy for Easy Editing',
      'Export to OBJ, FBX, SKP, or IFC formats',
    ],
    tools: ['SketchUp Pro', 'Autodesk Revit', 'Rhino'],
    typicalDuration: '3 - 7 Days',
    badge: 'Fast Turnaround',
  },
  {
    id: 'rendering-services',
    title: 'Photorealistic Interior & Exterior Rendering',
    shortDesc:
      'Cinematic daylighting, authentic PBR textures, and emotionally engaging atmospheric visuals that win pitches and sell properties.',
    fullDesc:
      'Moving beyond generic computer graphics to convey tactile materiality and atmospheric mood. We calibrate physically accurate sunlight angles, weather states, vegetation, and realistic indoor lighting fixtures (3000K warm wash, halo coves, accents).',
    icon: 'Image',
    deliverables: [
      'High-Resolution 4K Exterior Renders (Daylight & Golden Hour)',
      'Photorealistic 4K Interior Stills with Accurate Texture Mapping',
      'Aerial & Drone Perspective Integration Renders',
      'Color-Graded Post-Processed High-Def Presentation Sheets',
    ],
    tools: ['Lumion 12.5 Pro', 'D5 Render', 'V-Ray', 'Photoshop'],
    typicalDuration: '4 - 10 Days',
    badge: 'High Impact',
  },
  {
    id: 'walkthrough-animations',
    title: 'Architectural 3D Walkthroughs & Video Montages',
    shortDesc:
      'Immersive 60fps cinematic animated walkthroughs with smooth camera transitions, ambient sound design, and time-lapse effects.',
    fullDesc:
      'Give prospective buyers, investors, or clients the exhilarating experience of stepping inside their unbuilt space. We script smooth, architectural camera paths, choreograph daylight transitions, and composite sound design for high-converting marketing reels.',
    icon: 'Video',
    deliverables: [
      'Full HD / 4K 60fps Smoothly Rendered Animation Clips',
      'Curated Architectural Camera Choreography',
      'Atmospheric Daylight Transitions (Morning to Night)',
      'Professional Video Montage with Background Music & Captions',
    ],
    tools: ['D5 Render', 'Lumion Pro', 'Adobe Premiere Pro'],
    typicalDuration: '1 - 2 Weeks',
    badge: 'Premium Showcase',
  },
];
