## Mantar News

A modern, responsive news reader built with Next.js App Router that aggregates headlines from multiple providers and presents them with a clean UI, smooth animations, and dark mode support.

### Features
- **Latest & Trending**: Curated lists powered by NewsData.io and GNews.
- **Categories**: Fetch by category (e.g., politics, technology, business).
- **Editor’s Picks**: Highlighted stories section.
- **Country picker**: Region-aware headlines via a global Zustand store (default `us`).
- **Dark mode**: System and user-toggle via `next-themes`.
- **Smooth UX**: GSAP animations with `ScrollTrigger` and `ScrollSmoother`.
- **TypeScript-first**: Strong typing for API items and UI models.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Animations**: GSAP + @gsap/react
- **HTTP**: axios
- **State**: zustand (lightweight global store for country selection)
- **Theming**: next-themes
- **Linting/Types**: ESLint 9, TypeScript 5

### Getting Started
1) Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

2) Create environment file `.env.local`

```bash
NEXT_PUBLIC_NEWSDATAIO_API_KEY=your_newsdata_api_key
NEXT_PUBLIC_GNEWS_API_KEY=your_gnews_api_key
# Optional / future use:
# THE_NEWS_API_KEY=your_thenewsapi_key
```

3) Run the app

```bash
npm run dev
# http://localhost:3000
```

Build and start:

```bash
npm run build
npm start
```

### Available Scripts
- `npm run dev`: Start Next.js in development
- `npm run build`: Create a production build
- `npm start`: Run the production server
- `npm run lint`: Run ESLint

### API Endpoints (App Router)
These internal routes fetch from external news providers and return provider-shaped payloads. UI components map them to the internal `NewsArticle` model.

- `GET /api/latest`
  - Provider: NewsData.io (`/latest`)
  - Env: `NEXT_PUBLIC_NEWSDATAIO_API_KEY`
  - Params: language=en, size=3, removeduplicate=1, `country` (optional, default `us`), `q="breaking OR top"`

- `GET /api/trending`
  - Provider: GNews (`/top-headlines`)
  - Env: `NEXT_PUBLIC_GNEWS_API_KEY`
  - Params: category=general, lang=en, `country` (optional, default `us`), max=3

- `GET /api/category?category={slug}`
  - Provider: NewsData.io (`/latest`)
  - Env: `NEXT_PUBLIC_NEWSDATAIO_API_KEY`
  - Params: category from query; language=en, `country` (optional, default `us`), size=3, removeduplicate=1

- `GET /api/editors-picks`
  - Provider: NewsData.io (`/latest`)
  - Env: `NEXT_PUBLIC_NEWSDATAIO_API_KEY`
  - Params: q="breaking", language=en, `country` (optional, default `us`), size=3

- `GET /api/top`
  - Provider: TheNewsAPI (`/top`)
  - Note: Endpoint stubbed without API key usage; may require configuration before production use.

- `GET /api/article` (WIP)
- `GET /api/search` (WIP)

#### Country query param
- All endpoints above (except WIP/top) accept `country`, ISO-2 lowercase (e.g., `us`, `gb`, `ca`).
- Default: `us`.
- Example:

```bash
curl "http://localhost:3000/api/latest?country=gb"
```

### Data model
UI components consume a normalized `NewsArticle` shape:

```ts
export type NewsArticle = {
  uuid: string;   
  title: string;
  description: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  categories: string[];
};
```

Transformation helpers (e.g., `transformNewsDataIOArticles`) map provider responses to this shape. See `utils/data.ts`.

### Project Structure (high level)
```
app/
  api/
    _utils/response.ts        # Standardized API result helpers
    latest/route.ts           # NewsData.io latest
    trending/route.ts         # GNews top-headlines
    category/route.ts         # NewsData.io by category
    editors-picks/route.ts    # NewsData.io breaking picks
    top/route.ts              # TheNewsAPI top (stub)
  page.tsx                    # Home page, loads latest + trending
components/
  EditorsPicks.tsx, Trending.tsx, CountryPicker.tsx, ...
store/
  useCountryStore.ts          # zustand store for selected country
types/
  APIItem.ts, newsArticle.ts
utils/
  data.ts, time.ts, string.ts
public/
  images/...
```

### Notes and Roadmap
- Some endpoints are intentionally limited to small result sizes (3) for layout.
- `top`/TheNewsAPI may need an API key and configuration.
- `search` and `article` routes are currently WIP.
- `EditorsPicks.tsx` expects a transform utility; ensure imports are wired (`utils/data`).
- The navbar includes a `CountryPicker` that updates the global country and refetches lists.

### Attribution
- Background image: `dark stripes background` by Freepik  
  `https://www.freepik.com/free-psd/dark-stripes-background_1132768.htm#from_element=cross_selling__psd`

### License
No license has been specified for this project.
