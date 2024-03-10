import { GoogleAnalytics } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <GoogleAnalytics gaId="G-RLBBSTEDWR"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
