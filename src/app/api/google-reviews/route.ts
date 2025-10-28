import { NextResponse } from "next/server";

const PLACE_ID = "ChIJ72aetuN1bqoR_03uN2UZxJw"; // Replace with your actual Place ID

export async function GET() {
  try {
    // Use the environment variable name that matches your project
    const apiKey = process.env.MAPS_API_KEY; // NOT NEXT_PUBLIC_MAPS_API_KEY

    if (!apiKey) {
      console.error("MAPS_API_KEY is not defined");
      return NextResponse.json(
        { message: "API key not configured" },
        { status: 500 }
      );
    }

    // if (!PLACE_ID || PLACE_ID === "YOUR_GOOGLE_PLACE_ID") {
    //   console.error("PLACE_ID is not configured");
    //   return NextResponse.json(
    //     { message: "Place ID not configured" },
    //     { status: 500 }
    //   );
    // }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

    console.log("Fetching reviews from Google Places API...");

    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24, // Cache for 24 hours
      },
    });

    const data = await response.json();

    console.log("Google API Response Status:", data.status);

    if (data.status === "OK") {
      return NextResponse.json(
        {
          data: {
            reviews: data.result.reviews || [],
            rating: data.result.rating || 0,
            totalReviews: data.result.user_ratings_total || 0,
          },
        },
        { status: 200 }
      );
    }

    if (data.status === "INVALID_REQUEST") {
      return NextResponse.json(
        { message: "Invalid Place ID or request parameters" },
        { status: 400 }
      );
    }

    if (data.status === "REQUEST_DENIED") {
      return NextResponse.json(
        { message: "API key issue - check if Places API is enabled" },
        { status: 403 }
      );
    }

    if (data.status === "ZERO_RESULTS") {
      return NextResponse.json(
        { message: "No reviews found for this business" },
        { status: 404 }
      );
    }

    // Generic error for other statuses
    return NextResponse.json(
      {
        message: data.status || "Google Places API error",
        error: data.error_message || "Unknown error",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Server error in google-reviews route:", error);
    return NextResponse.json(
      { message: "A server sided error occurred." },
      { status: 500 }
    );
  }
}
