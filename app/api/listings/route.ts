import { NextRequest, NextResponse } from "next/server";
import { searchListings } from "@/lib/api/boom-booking";
import { ListingsSearchParams } from "@/types/booking";
import { format } from "date-fns";

export async function GET(request: NextRequest) {
  try {
    // Get query parameters from URL
    const searchParams = request.nextUrl.searchParams;
    const checkIn = searchParams.get("check_in");
    const checkOut = searchParams.get("check_out");
    const adults = searchParams.get("adults");
    const children = searchParams.get("children");

    // Build search parameters for Boom API
    const boomSearchParams: ListingsSearchParams = {
      adults: adults ? parseInt(adults) : 1,
      children: children ? parseInt(children) : 0,
    };

    // Add dates if provided
    if (checkIn) {
      boomSearchParams.check_in = format(new Date(checkIn), "yyyy-MM-dd");
    }
    if (checkOut) {
      boomSearchParams.check_out = format(new Date(checkOut), "yyyy-MM-dd");
    }

    // Call Boom API
    const listings = await searchListings(boomSearchParams);

    return NextResponse.json({
      success: true,
      data: listings.data || [],
      meta: listings.meta || {},
    });
  } catch (error) {

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
