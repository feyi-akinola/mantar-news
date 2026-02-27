  // API URLs
  type APIURLs = "theNewsAPI" | "GNewsAPI" | "newsDataIO";

  export const urls: Record<APIURLs, string> = {
    theNewsAPI: "https://api.thenewsapi.com/v1",
    GNewsAPI: "https://gnews.io/api/v4",
    newsDataIO: "https://newsdata.io/api/1",
  };


  // API Routes
  type APIRoute = "top" | "trending" | "latest" | "category" | "search";

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  export const routes: Record<APIRoute, string> = {
    top: `${BASE_URL}/api/top`,
    trending: `${BASE_URL}/api/trending`,
    latest: `${BASE_URL}/api/latest`,
    category: `${BASE_URL}/api/category`,
    search: `${BASE_URL}/api/search`,
  };
