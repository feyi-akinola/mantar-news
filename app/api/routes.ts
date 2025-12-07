// API URLs
type APIURLs = "theNewsAPI" | "GNewsAPI" | "newsDataIO";

export const urls: Record<APIURLs, string> = {
  theNewsAPI: "https://api.thenewsapi.com/v1",
  GNewsAPI: "https://gnews.io/api/v4",
  newsDataIO: "https://newsdata.io/api/1",
};


// API Routes
type APIRoute = "top" | "trending" | "latest" | "category" | "search";

export const routes: Record<APIRoute, string> = {
  top: "api/top",
  trending: "api/trending",
  latest: "api/latest",
  category: "api/category",
  search: "api/search"
};
