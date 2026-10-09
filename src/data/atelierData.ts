import { CaseStudy, JournalArticle, Testimonial, MaterialSpec } from '../types';

export const ATELIER_IMAGES = {
  cafeTimber:
    'https://lh3.googleusercontent.com/aida/AEtjO1V6qe_WRvxMyQe6uBkeLQHMA5XOYFTm1srZyb6_ulgULtJds1xsEDKG5LIdaTw-rVOc5FsKFr4mX_RDuxVRinK3TIAFG3HOgu2mTaVqt2CSU5ng79_LOaWCCdvWoE5sBJbRBTOT1pxnZNdOfWIoDHqkw3WGyjQ7GYG5SzRy5vc9rMIi7L91toVepNzvT6FeL7VB_7MbVJKTchfDJFzh0_4A1yJulbwvBKEF5HPbIjf-PyvazMF5jZ23pebu',
  livingWarm:
    'https://lh3.googleusercontent.com/aida/AEtjO1Xoig7c2UO3fEJ9u9Kyi_SJ8-B5MNMkrrSp_NamCS5S__KYuhYfa31hWodJD4YkYiadHzoT-9kWJw9yes7dyYGcLCHS1stiYk86LphR3lKEb0i3jNDvd1ME3EpE4IyuUQ3C9dGogAT-Ow-WwP87b2UpgStIw8d11LsdGKofjSeSqzyhFs5CoW7LiCDMKeS-efllSX2Ieg6zWORJu5NZnntSh05VUKk0cZOAfwCypPqlDyAv-DExkhkeYhLf',
  bathroomStone:
    'https://lh3.googleusercontent.com/aida/AEtjO1XI3UcLKpdBmAYmPxTQzuSBaVjiAMpkJrmzBCogGtDmNQNLYvWrVa2LatoE8TmyreoBVzUOWIZ_vzO8AmxlYJNP36ubaiEf6TIX-IagtQqzdjNr9KJfdSBVOl-pjiWnvRTNSTeCsOvPjDRbJCFj2aIch3MJM4qiZeWKHdm4C5vgIIb9QmrcFu1eNQGC6Tufxj-Bdugo9mf7XT5uQ80Y99v9yTXvHSkb2bqlAkU2hEIb57dWPBnkoAI9drWg',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'honed-stone',
    categoryNumber: '01 / MATERIALITY',
    category: 'Materiality',
    title: 'Honed Stone & Limestone',
    subtitle: 'Portuguese Moca Cream & Navona Travertine Monoliths',
    description:
      'Tactile, earth-drawn travertine and Portuguese moca cream masonry anchoring living sanctuaries.',
    location: 'Cheongdam-dong, Gangnam-gu, Seoul',
    year: '2025',
    scale: '280 SQM',
    materials: ['Portuguese Moca Cream', 'Navona Travertine', 'Brushed Raw Brass', 'Microcement'],
    imageUrl: ATELIER_IMAGES.bathroomStone,
    photographer: 'OVEROOM Archive · Minwoo Roh',
    fullNarrative: [
      'The premise of this residence was the deliberate rejection of synthetic veneer. We quarried large-format slabs of Portuguese Moca Cream limestone and hand-honed every face to preserve micro-fissures and mineral crystallization.',
      'In the primary ensuite, curbless transitions merge seamless basalt floors with an anchored travertine soaking volume. Deep shadow reveals separate ceiling planes, giving the massive stone elements an uncanny sense of weightlessness.',
      'Warm indirect cove lighting at 2400K washes across the brushed mineral texture, shifting tone subtly as the sun traverses the southern sky over the Han River.'
    ],
    specifications: {
      stone: 'Portuguese Moca Cream (Honed 220-grit)',
      timber: 'Smoked European White Oak (Oil finish)',
      finish: 'Hand-troweled acoustic lime plaster',
      lighting: 'Custom recessed 2400K warm-dim linear coves'
    }
  },
  {
    id: 'private-sanctuaries',
    categoryNumber: '02 / RESIDENCE',
    category: 'Residence',
    title: 'Private Sanctuaries',
    subtitle: 'Acro Seoul Forest Penthouse & Hannam Residence',
    description:
      'Expansive residences and penthouses in Hannam-dong, Seongsu, and Cheongdam conceived for stillness.',
    location: 'Acro Seoul Forest, Seongsu, Seoul',
    year: '2024',
    scale: '390 SQM',
    materials: ['French Quartered Oak', 'Roman Silver Travertine', 'Linen Gauze', 'Handmade Brick'],
    imageUrl: ATELIER_IMAGES.livingWarm,
    photographer: 'OVEROOM Archive · Minwoo Roh',
    fullNarrative: [
      'Perched high above the treetops of Seoul Forest, this penthouse was stripped to its bare structural concrete columns to create an expansive, gallery-scale spatial choreography.',
      'Rather than dividing the living zone with traditional drywalls, we introduced a series of freestanding monolithic travertine cabinets that delineate living, tea room, and library zones without interrupting sightlines to the horizon.',
      'A bespoke flush-hearth fireplace anchors the central seating group, creating an intimate hearth within an otherwise monumental ceiling height.'
    ],
    specifications: {
      stone: 'Roman Silver Travertine & Flamed Basalt',
      timber: 'Quarter-sawn Natural White Oak',
      finish: 'Mineral silicate paint & textured stucco',
      lighting: 'Micro-aperture downlights & flush cove glow'
    }
  },
  {
    id: 'bespoke-hospitality',
    categoryNumber: '03 / COMMERCIAL',
    category: 'Commercial',
    title: 'Bespoke Hospitality',
    subtitle: 'Kaizen Seongsu Atelier & Flagship Teahouse',
    description:
      'High-concept cafes, teahouses, and brand flagships embracing raw concrete, dark timber, and garden courtyards.',
    location: 'Yeonmujang-gil, Seongsu-dong, Seoul',
    year: '2025',
    scale: '210 SQM',
    materials: ['Board-formed Concrete', 'Charred Hinoki Cypress', 'Blackened Steel', 'Volcanic Pumice'],
    imageUrl: ATELIER_IMAGES.cafeTimber,
    photographer: 'OVEROOM Archive · Minwoo Roh',
    fullNarrative: [
      'In an industrial neighborhood known for rapid turnover, Kaizen was conceived as an oasis of contemplative slowness. We retained the rough board-formed concrete skeleton while inserting blackened cypress joinery.',
      'A continuous 8-meter long serving bar sculpted from a single casting of pigmented concrete organizes customer movement. Sound reverberation is softened through hidden acoustic mineral wool baffles behind charred slat walls.',
      'The back courtyard opens through floor-to-ceiling pivot glazing to a serene moss garden, drawing gentle rain and seasonal winds deep into the tea room.'
    ],
    specifications: {
      stone: 'Cast pigmented aggregate concrete',
      timber: 'Yakisugi charred Hinoki cypress',
      finish: 'Sealed exposed structural concrete',
      lighting: 'Concealed counter task fixtures & directional pinspots'
    }
  },
  {
    id: 'atmospheric-lighting',
    categoryNumber: '04 / OBJECTS',
    category: 'Objects & Joinery',
    title: 'Atmospheric Lighting',
    subtitle: 'Custom Millwork & Calibrated Diurnal Illuminations',
    description:
      'Indirect architectural glow, recessed brass fixtures, and customized joinery tuned to diurnal rhythm.',
    location: 'UN Village, Hannam-dong, Seoul',
    year: '2024',
    scale: 'Atelier Collection',
    materials: ['Unlacquered Solid Brass', 'Acid-etched Glass', 'Fumed Oak', 'Honed Travertine'],
    imageUrl: ATELIER_IMAGES.bathroomStone,
    photographer: 'OVEROOM Archive · Minwoo Roh',
    fullNarrative: [
      'We treat artificial illumination not as an ornament, but as an invisible medium that molds space during evening hours. Every lighting fixture in our projects is either concealed or custom-fabricated.',
      'Working closely with master metal artisans in Euljiro, we developed seamless brass profile extrusions that house high-CRI (98+) LED emitters with bespoke lens diffusion.',
      'Automated scene transitions gradually shift color temperature from 3000K crisp daylight to 2200K amber candle warmth as dusk arrives over Mount Namsan.'
    ],
    specifications: {
      stone: 'Honed Navona Travertine bases',
      timber: 'Fumed European Oak millwork',
      finish: 'Unlacquered brushed bronze',
      lighting: 'Custom DALI-2 synchronized circadian system'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'quote-1',
    quote:
      'I have never felt so grounded at home. OVEROOM transformed our penthouse into a living gallery of quiet light and tactile warmth. Every single hour of daylight creates a new memory.',
    author: 'H. S. PARK',
    project: 'ACRO SEOUL FOREST RESIDENCE',
    location: 'Seongsu-dong, Seoul',
    area: '390 SQM',
    type: 'Penthouse Residence'
  },
  {
    id: 'quote-2',
    quote:
      'Working with OVEROOM was like commissioning a permanent sculpture. Their restraint with travertine and cove lighting created an environment where our family feels true sanctuary amidst Gangnam’s bustle.',
    author: 'E. J. CHOI',
    project: 'CHEONGDAM VILLA',
    location: 'Cheongdam-dong, Seoul',
    area: '320 SQM',
    type: 'Private Villa'
  },
  {
    id: 'quote-3',
    quote:
      'Their deep knowledge of acoustic dampening and raw concrete gave our flagship coffee atelier an immediate identity. Customers describe the space as meditative and emotionally cooling.',
    author: 'T. H. KIM',
    project: 'KAIZEN SEONGSU ATELIER',
    location: 'Seongsu-dong, Seoul',
    area: '210 SQM',
    type: 'Commercial Hospitality'
  },
  {
    id: 'quote-4',
    quote:
      'The bespoke bed frame and limestone bathroom integration feel effortlessly timeless. Two years later, the natural materials have aged with stunning grace.',
    author: 'S. W. YUN',
    project: 'UN VILLAGE HANNAM',
    location: 'Hannam-dong, Seoul',
    area: '240 SQM',
    type: 'Private Suite'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'essay-44',
    number: 'ESSAY NO. 44',
    title: 'The Weight of Travertine in Modern Homes',
    date: 'March 2026',
    readTime: '6 min read',
    category: 'Materiality & Tectonics',
    lead:
      'In a city dominated by high-gloss synthetic polymers and rapid renovation cycles, natural stone introduces an uncompromising permanence.',
    imageUrl: ATELIER_IMAGES.bathroomStone,
    quote:
      'Travertine is not merely a decorative surface; it is compressed geological time that invites human touch.',
    content: [
      'Modern interiors often suffer from what we call "tactile starvation"—spaces surrounded by slick smartphone glass, vinyl flooring, and laminated MDF cabinetry that offer no resistance or sensory depth.',
      'When we bring unpolished, honed Navona travertine into a domestic interior, we introduce geological mass. The small voids and mineral veins of travertine absorb light rather than reflecting it glaringly back into the room.',
      'Unlike plastic laminates that degrade into unsightly trash, travertine matures. As oil from hands touches edges and sunlight slowly shifts its pale beige hue, the stone acquires a rich, poetic patina that grounds the inhabitant.'
    ]
  },
  {
    id: 'essay-43',
    number: '01',
    title: '10 Principles For Acoustically Calmed Living',
    date: 'February 2026',
    readTime: '8 min read',
    category: 'Acoustic Architecture',
    lead:
      'Why true residential luxury is measured not in square meters, but in decibels and the quality of reverberation.',
    content: [
      'High-ceiling metropolitan penthouses often amplify background urban noise: sirens, ventilation whines, and harsh footsteps. A serene space requires acoustic architecture from the earliest framing phase.',
      'We incorporate open-pore mineral lime plaster on ceilings, acoustic sheep-wool insulation within core walls, and bespoke drapery recesses with hidden sound-absorbing liners.',
      'The result is a subtle "softening" of room sound—where speech feels intimate, footsteps fall softly on wide-plank oak, and the constant hum of the metropolis disappears entirely.'
    ]
  },
  {
    id: 'essay-42',
    number: '02',
    title: 'The Power of Restrained Material Palettes',
    date: 'January 2026',
    readTime: '5 min read',
    category: 'Design Philosophy',
    lead:
      'Limiting an interior project to three authentic materials creates infinite atmospheric richness.',
    content: [
      'Most decorative fatigue stems from material competition: too many varieties of marble, metal trims, and accent wallpapers battling for dominance.',
      'At OVEROOM, our atelier rule enforces a strict hierarchy: one primary mineral base (limestone or lime plaster), one warm organic touchstone (fumed European oak), and one quiet metal accent (unlacquered raw brass).',
      'When the palette is radically restrained, the eye rests. Subtle shifts in daylight angle and room humidity become the true decoration of the day.'
    ]
  },
  {
    id: 'essay-41',
    number: '03',
    title: 'Designing Quiet Sanctuaries in High-Density Seoul',
    date: 'December 2025',
    readTime: '7 min read',
    category: 'Urban Living',
    lead:
      'How to craft psychological respite in one of the most densely connected and fast-paced capitals in the world.',
    content: [
      'Seoul is vibrant, dynamic, and unrelenting. For clients living in Hannam, Gangnam, and Seongsu, the home must operate as an emotional decompression chamber.',
      'We design progressive arrival sequences: a darkened, stone-clad entrance vestibule where street shoes and external tension are removed, leading gradually into soft, naturally illuminated main living galleries.',
      'The transition between outside bustle and inside stillness is calibrated down to the millimeter.'
    ]
  },
  {
    id: 'essay-40',
    number: '04',
    title: 'Korean Hanok Spatial Porosity & The Contemporary Void',
    date: 'November 2025',
    readTime: '9 min read',
    category: 'Architectural Heritage',
    lead:
      'Reinterpreting the traditional maru (wooden floor) and changhoji (mulberry paper screens) in modern concrete envelopes.',
    content: [
      'Traditional Korean Hanok architecture never fought nature; it framed the void (비움, bium). The courtyard was not an empty leftover, but the spiritual heart of the residence.',
      'In our contemporary residential work, we translate the translucent softness of changhoji screens into tailored linen pocket doors and architectural reveals.',
      'The boundary between indoor living and outdoor landscape becomes porous, allowing seasonal mountain breezes and shifting shadows to flow uninterrupted.'
    ]
  }
];

export const MATERIAL_ARCHIVE: MaterialSpec[] = [
  {
    name: 'Portuguese Moca Cream Limestone',
    koreanName: '포르투갈 모카 크림 석회석',
    origin: 'Alcanede, Portugal',
    tactility: 'Honed 220-grit velvety mineral grain with micro-fossils',
    acousticProperty: 'High density dampening, minimizes harsh room echo',
    patinaBehavior: 'Gently warms in tone with ambient humidity and hand oils',
    recommendedUse: 'Curbless ensuite vanities, kitchen monolithic islands, fireplace hearths'
  },
  {
    name: 'Roman Silver Travertine',
    koreanName: '로만 실버 트래버틴',
    origin: 'Tivoli, Italy',
    tactility: 'Naturally pitted striated banding, brushed unpolished finish',
    acousticProperty: 'Open porosity absorbs airborne sound frequencies',
    patinaBehavior: 'Develops soft antique highlights over decades of use',
    recommendedUse: 'Full-height architectural partitions, entry vestibules, living credenzas'
  },
  {
    name: 'Smoked European White Oak',
    koreanName: '훈증 유럽산 화이트 오크',
    origin: 'Bavaria, Germany',
    tactility: 'Deep wire-brushed open grain with natural matte oil finish',
    acousticProperty: 'Resonant warmth, ideal for continuous flooring',
    patinaBehavior: 'Deepens into rich espresso and honey undertones',
    recommendedUse: 'Continuous seamless residential flooring, custom low tables, bed frames'
  },
  {
    name: 'Hand-Troweled Lime Plaster',
    koreanName: '미장 석회 플라스터',
    origin: 'Veneto, Italy & Danyang, Korea',
    tactility: 'Silky tactile matte surface with subtle trowel clouding',
    acousticProperty: 'Micro-crystalline structure diffuses reflected waves',
    patinaBehavior: 'Cures continuously via carbonation, self-healing minor scuffs',
    recommendedUse: 'Ceilings, continuous wall galleries, curved cove transitions'
  },
  {
    name: 'Unlacquered Raw Brass',
    koreanName: '비도금 천연 브라스',
    origin: 'Euljiro Craftsmen Atelier, Seoul',
    tactility: 'Brushed directional grain with cool metallic mass',
    acousticProperty: 'Solid structural joinery anchor',
    patinaBehavior: 'Naturally oxidizes into rich bronze and golden brown',
    recommendedUse: 'Concealed lighting profiles, door pivots, flush hardware'
  }
];
