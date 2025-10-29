import { useQuery } from "@tanstack/react-query";
import { clientApi } from "../api/client-axios";
import { BoomListing } from "@/types/booking";

interface ListingsParams {
  check_in?: string;
  check_out?: string;
  adults?: number;
  children?: number;
}

interface ListingsResponse {
  success: boolean;
  data: BoomListing[];
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
  error?: string;
}

/**
 * React Query hook for fetching listings
 * @param params - Search parameters (check_in, check_out, adults, children)
 * @param enabled - Whether to automatically fetch data (default: false - manual trigger)
 */
export const useListings = (params: ListingsParams, enabled: boolean = false) => {
  return useQuery({
    queryKey: ["listings", params],
    queryFn: async () => {
      const response = await clientApi.get<ListingsResponse>("/api/listings", {
        params,
      });
      return response.data;
    },
    enabled, // Only fetch when enabled is true
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 1, // Retry once on failure
  });
};
