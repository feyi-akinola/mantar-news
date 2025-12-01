
// Keys
const THENEWSAPI_API_KEY = process.env.NEXT_PUBLIC_THENEWSAPI_API_KEY;
const GNEWSAPI_API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

// URLs
const THENEWSAPI_BASE_API_URL = "https://api.thenewsapi.com/v1";
const GNEWSAPI_BASE_API_URL = "https://gnews.io/api/v4";

export const TOP_NEWS_URL = `${THENEWSAPI_BASE_API_URL}/news/top?api_token=${THENEWSAPI_API_KEY}&locale=us&limit=3`;
export const TRENDING_NEWS_URL = `${GNEWSAPI_BASE_API_URL}/top-headlines?category=general&apikey=${GNEWSAPI_API_KEY}&max=3&lang=en&country=us`;