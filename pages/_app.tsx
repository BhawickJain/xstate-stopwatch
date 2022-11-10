import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * This App component is the top-level component which will
 * be common across all the different pages. You can use
 * this App component to keep state when navigating between
 * pages, for example.
 *
 * You can't import Global CSS anywhere outside of `_app.tsx`
 * As it affects all elements anyway
 *
 * !! IMPORTANT !!
 * You need to restart the development server when you add `pages/_app.tsx`.
 * Make sure to restart the dev server when changing Global CSS or _app.tsx
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
