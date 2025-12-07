// Libraries
import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

// Constants
import { urls } from "@/app/api/routes";

export async function GET() {
  try {
    const response: AxiosResponse = await axios.get(`${urls.theNewsAPI}/top`);
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