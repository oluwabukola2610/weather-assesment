This is a Next.js project bootstrapped with create-next-app.

Overview
This app is a weather dashboard built with Next.js that fetches real-time and historical weather data using WeatherAPI and cities wih Geodb cities.

To keep code quality on point, I integrated Husky for pre-commit hooks enforcing linting and commit message standards and also pre-push ro run build to detect error at early stage .

Tech Stack
Next.js — React framework with server-side rendering

React Query (TanStack Query) — Data fetching, caching, syncing

WeatherAPI.com — Weather data provider (current & history)

Geodb cities — City list

Husky — Git hooks for linting and commit message checks

TypeScript — Type safety and better developer experience

Tailwind CSS — Utility-first styling

Get Started:
git clone
cd your-repo
npm install

Start the development server:
npm run dev

Environment Variables
NEXT_PUBLIC_GEO_API_HOST=wft-geo-db.p.rapidapi.com/v1/geo
NEXT_PUBLIC_GEO_API_KEY= our_geodb_key
NEXT_PUBLIC_WEATHER_API_KEY=your_weatherapi_key

Git Commit Strategy
This project uses conventional commits with Husky enforcing commit message format and lint-staged for code quality checks before commits.

Example commit types:

feat: A new feature

fix: A bug fix

docs: Documentation only changes
