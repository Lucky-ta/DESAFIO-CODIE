import type { AppProps } from "next/app";

import { GlobalStyles } from "styles/global";

import MyProvider from "context/MyProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </MyProvider>
  );
}
