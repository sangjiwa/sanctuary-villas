import {
  BoomAuthRequest,
  BoomAuthResponse,
  ListingsSearchParams,
  BoomListingsResponse,
} from "@/types/booking";
import { boomApi, setCachedToken, getCachedToken } from "./boom-axios";

/**
 * Get authentication token from Boom API
 * Caches the token to minimize API calls
 */
export async function getAuthToken(): Promise<string> {
  // Check if we have a valid cached token
  const cachedToken = getCachedToken();
  if (cachedToken) {
    return cachedToken;
  }

  const clientId = process.env.BOOM_CLIENT_ID;
  const clientSecret = process.env.BOOM_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing Boom API credentials. Please check your .env.local file."
    );
  }

  const authRequest: BoomAuthRequest = {
    client_id: clientId,
    client_secret: clientSecret,
  };

  try {
    const response = await boomApi.post<BoomAuthResponse>(
      "/auth/token",
      authRequest
    );

    // Cache the token (default to 1 hour if no expires_in provided)
    const expiresIn = response.data.expires_in || 3600;
    setCachedToken(response.data.access_token, expiresIn);

    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

/**
 * Search for available listings based on criteria
 */
export async function searchListings(
  params: ListingsSearchParams
): Promise<BoomListingsResponse> {
  // Get auth token (will be automatically added to request by interceptor)
  await getAuthToken();

  try {
    const response = await boomApi.get<BoomListingsResponse>("/listings", {
      params,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
