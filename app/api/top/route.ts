// Libraries
import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

// Constants
import { TOP_NEWS_URL } from "@/app/api/constants";

export async function GET() {
  try {
    const response: AxiosResponse = await axios.get(TOP_NEWS_URL);
    const status = response.status;
    
    if (status === 200 && response.data) {
      const data = await response.data.data ?? [];
      
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to fetch top news" }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    
    return NextResponse.json({ error: "Failed to fetch top news" }, { status: 500 });
  }
}