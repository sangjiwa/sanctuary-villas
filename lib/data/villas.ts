import { Villa, VillaStyle } from "@/types/villa";

// Villa data from Figma design
// Images from Figma API (valid for 7 days from generation)

export const VILLAS: Villa[] = [
  {
    id: "villa-satu",
    name: "Villa Satu",
    description: "Where luxury meets tranquility",
    bedrooms: 2,
    maxGuests: 4,
    image: "https://www.figma.com/api/mcp/asset/40d6f881-2926-4f0c-baad-096e0ceebba2",
    slug: "villa-satu",
  },
  {
    id: "villa-dua",
    name: "Villa Dua",
    description: "Your private paradise",
    bedrooms: 3,
    maxGuests: 6,
    image: "https://www.figma.com/api/mcp/asset/46ea1105-1e11-49ad-b5a8-5c01b8baed61",
    slug: "villa-dua",
  },
  {
    id: "villa-tiga",
    name: "Villa Tiga",
    description: "Elevated luxury living",
    bedrooms: 4,
    maxGuests: 8,
    image: "https://www.figma.com/api/mcp/asset/006c8f5d-6006-4106-93fd-be346d351379",
    slug: "villa-tiga",
  },
  {
    id: "villa-empat",
    name: "Villa Empat",
    description: "Tropical bliss awaits",
    bedrooms: 2,
    maxGuests: 4,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "villa-empat",
  },
  {
    id: "tranquil-pavilion",
    name: "Tranquil Pavilion",
    description: "Peace in paradise",
    bedrooms: 1,
    maxGuests: 2,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "tranquil-pavilion",
  },
  {
    id: "golden-sanctuary",
    name: "Golden Sanctuary",
    description: "Where elegance resides",
    bedrooms: 3,
    maxGuests: 6,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "golden-sanctuary",
  },
  {
    id: "ocean-whisper",
    name: "Ocean Whisper",
    description: "Coastal luxury living",
    bedrooms: 4,
    maxGuests: 8,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "ocean-whisper",
  },
  {
    id: "mountain-mist",
    name: "Mountain Mist",
    description: "Highland hideaway",
    bedrooms: 2,
    maxGuests: 4,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "mountain-mist",
  },
  {
    id: "tropical-dream",
    name: "Tropical Dream",
    description: "Island paradise found",
    bedrooms: 3,
    maxGuests: 6,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "tropical-dream",
  },
  {
    id: "bamboo-bliss",
    name: "Bamboo Bliss",
    description: "Eco-luxury retreat",
    bedrooms: 2,
    maxGuests: 4,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "bamboo-bliss",
  },
  {
    id: "royal-residence",
    name: "Royal Residence",
    description: "Palatial perfection",
    bedrooms: 5,
    maxGuests: 10,
    image: "https://www.figma.com/api/mcp/asset/7c3e2e5e-1d78-4a66-9a4a-8e335bd4bc09",
    slug: "royal-residence",
  },
];

export const VILLA_STYLES: VillaStyle[] = [
  {
    id: "joglo",
    name: "Villa Joglo",
    description:
      "Traditional Javanese architecture meets modern luxury. These villas feature the iconic Joglo wooden structure with soaring ceilings and open-air living spaces.",
    images: [
      "/images/villas/joglo/cover.jpg",
      "/images/villas/joglo/Sanctury Bisma day Four-003.jpg",
      "/images/villas/joglo/Sanctury Bisma day Four-025.jpg",
      "/images/villas/joglo/villa 101 pool pink to blue-151.jpg",
      "/images/villas/joglo/Sanctury Bisma day one-103.jpg",
      "/images/villas/joglo/Sanctury Bisma day one-104.jpg",
      "/images/villas/joglo/Sanctury Bisma day two-17.jpg",
      "/images/villas/joglo/Sanctury Bisma day two-20.jpg",
    ],
    roomTypes: [
      {
        count: 3,
        description: "One bedroom with private pool",
      },
      {
        count: 3,
        description: "One bedroom superior with private pool and outdoor bathtub",
      },
    ],
  },
  {
    id: "minang",
    name: "Villa Minang",
    description:
      "Inspired by the distinctive Minangkabau architecture with its dramatic curved roof. These spacious villas offer contemporary comfort with traditional elegance.",
    images: [
      "/images/villas/minang/cover.jpg",
      "/images/villas/minang/CE4A1832.jpg",
      "/images/villas/minang/CE4A1825.jpg",
      "/images/villas/minang/CE4A1777.jpg",
      "/images/villas/minang/CE4A1809.jpg",
      "/images/villas/minang/CE4A1813.jpg",
      "/images/villas/minang/CE4A5577.jpg",
      "/images/villas/minang/CE4A5561.jpg",
    ],
    roomTypes: [
      {
        count: 1,
        description: "Two bedroom villa with private pool and outdoor tub",
      },
      {
        count: 2,
        description: "Three bedroom villas with private pool and outdoor tub",
      },
      {
        count: 1,
        description:
          "Signature villa with 3 bedrooms, private spa, gym, treehouse yoga shala",
      },
    ],
  },
];
