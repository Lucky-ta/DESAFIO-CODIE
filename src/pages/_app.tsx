import { GlobalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import MyProvider from "../context/MyProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </MyProvider>
  );
}
