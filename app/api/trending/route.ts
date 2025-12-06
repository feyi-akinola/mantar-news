// Libraries
import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

// Constants
import { TRENDING_NEWS_URL } from "@/app/api/constants";

export async function GET() {
  try {
    const response: AxiosResponse = await axios.get(TRENDING_NEWS_URL);
    const status = response.status;
    
    if (status === 200 && response.data) {
      const data = await response.data.articles ?? [];

      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to fetch trending news" }, { status: 500 });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Failed to fetch trending news" }, { status: 500 });
  }
} 