// Boom Booking API Types

export interface BoomAuthRequest {
  client_id: number | string;
  client_secret: string;
}

export interface BoomAuthResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

export interface ListingsSearchParams {
  adults?: number;
  children?: number;
  check_in?: string; // Format: "YYYY-MM-DD"
  check_out?: string; // Format: "YYYY-MM-DD"
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
  region?: string;
  lat?: number;
  lng?: number;
  rad?: number;
  nearby?: boolean;
  page?: number;
}

export interface BoomListing {
  id: string | number;
  name: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  images?: string[];
  image?: string;
  price?: number;
  currency?: string;
  address?: string;
  city?: string;
  region?: string;
  amenities?: string[];
  [key: string]: any; // Allow additional properties from API
}

export interface BoomListingsResponse {
  data: BoomListing[];
  meta?: {
    current_page: number;
    total_pages: number;
    total_count: number;
  };
  [key: string]: any; // Allow additional metadata
}

// Client-side search request
export interface SearchRequest {
  checkIn?: Date;
  checkOut?: Date;
  adults: number;
  children: number;
}
