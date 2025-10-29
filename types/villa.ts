// Villa type definition for Sanctuary Villas

export interface Villa {
  id: string;
  name: string;
  description: string;
  bedrooms: number;
  maxGuests: number;
  image: string;
  slug?: string;
}

export interface VillaCardProps {
  villa: Villa;
  className?: string;
}

export interface RoomType {
  count: number;
  description: string;
}

export interface VillaStyle {
  id: string;
  name: string;
  description: string;
  images: string[];
  roomTypes: RoomType[];
}
