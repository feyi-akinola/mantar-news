import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";
import { urls } from "@/app/api/routes";
import { cookies } from "next/headers";

type ArticleSource = "NewsDataIO" | "GNews";

interface TaggedArticle {
  source: ArticleSource;
  [key: string]: unknown;
}

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const country = cookieStore.get("country")?.value ?? "us";
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("query") ?? "us").toLowerCase();

  const apiKeyNewsDataIO = process.env.NEXT_PUBLIC_NEWSDATAIO_API_KEY;
  const apiKeyGNews = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

  try {
    const [responseNewsDataIO, responseGNews]: AxiosResponse[] = await Promise.all([
      axios.get(`${urls.newsDataIO}/latest`, {
        params: {
          apikey: apiKeyNewsDataIO,
          q: query,
          language: "en",
          country,
          size: 10,
          removeduplicate: 1,
        },
      }),
      axios.get(`${urls.GNewsAPI}/search`, {
        params: {
          apikey: apiKeyGNews,
          q: query,
          lang: "en",
          country,
          max: 3,
        },
      }),
    ]);

    const newsDataIOArticles: TaggedArticle[] = (responseNewsDataIO.data?.results ?? []).map(
      (article: unknown) => ({ ...(article as object), apiSource: "NewsDataIO" as ArticleSource })
    );

    const gNewsArticles: TaggedArticle[] = (responseGNews.data?.articles ?? []).map(
      (article: unknown) => ({ ...(article as object), apiSource: "GNews" as ArticleSource })
    );

    const combined = [...newsDataIOArticles, ...gNewsArticles];

    return NextResponse.json(combined, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Failed to fetch search results",
          data: error,
        },
      },
      { status: 500 }
    );
  }
}