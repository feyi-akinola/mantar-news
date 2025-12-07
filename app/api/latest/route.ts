// Libraries
import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

// Constants
import { urls } from "@/app/api/routes";

export async function GET() {
  const url = `${urls.newsDataIO}/latest`;
  const apiKey = process.env.NEXT_PUBLIC_NEWSDATAIO_API_KEY;

  console.log(`[DEBUG]: ${url}`);
  console.log(`[DEBUG]: ${apiKey}`);

  try {
    const response: AxiosResponse = await axios.get(url, {
      params: {
        apikey: apiKey,
        language: "en",
        q: "breaking",
        country: "us",
        size: 3,
      },
    });
    
    const status = response.status;
    
    if (status === 200 && response.data) {
      const data = await response.data.results ?? [];

      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ error: response.statusText }, { status: 500 });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Failed to fetch latest news" }, { status: 500 });
  }
} 