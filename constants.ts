
// Keys
const THENEWSAPI_API_KEY = process.env.NEXT_PUBLIC_THENEWSAPI_API_KEY;
const GNEWSAPI_API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

// URLs
const THENEWSAPI_BASE_API_URL = "https://api.thenewsapi.com/v1";
const GNEWSAPI_BASE_API_URL = "https://gnews.io/api/v4";

export const TOP_NEWS_URL = `${THENEWSAPI_BASE_API_URL}/news/top?api_token=${THENEWSAPI_API_KEY}&locale=us&limit=1`;
export const RECOMMENDED_NEWS_URL = `${THENEWSAPI_BASE_API_URL}/news/top?api_token=${THENEWSAPI_API_KEY}&locale=us&limit=3`;
