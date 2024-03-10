import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />

    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-RLBBSTEDWR`}
    />

    <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RLBBSTEDWR',{
          page_path: window.location.pathname,
          
});
         `}
    </Script>

    <ToastContainer

    ></ToastContainer>

  </>;
}
