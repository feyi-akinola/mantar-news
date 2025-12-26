// Libraries
import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

// Constants
import { urls } from "@/app/api/routes";

export async function GET(request: Request) {
  const url = `${urls.GNewsAPI}/top-headlines`;
  const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
  const { searchParams } = new URL(request.url);
  const country = (searchParams.get("country") ?? "us").toLowerCase();

  try {
    const response: AxiosResponse = await axios.get(url, {
      params: {
        apikey: apiKey,
        category: "general",
        lang: "en",
        country,
        max: 3,
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
    
    const status = response.status;
    
    if (status === 200 && response.data) {
      const data = await response.data.articles ?? [];

      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        error: {
          message: "Failed to fetch trending news",
          statusText: response.statusText,
          data: response.data, 
        },
      }, { status: 500 });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error: {
        message: "Failed to fetch trending news",
        data: error,
      },
    }, { status: 500 });
  }
} 