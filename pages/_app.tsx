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
          
![image](https://cdn.sanity.io/images/dgsq0x0m/production/61f24596fb210134e5df6a1dfa285de0f24791cc-1549x601.png?w=450)});
         `}
    </Script>

    <ToastContainer

    ></ToastContainer>

  </>;
}
