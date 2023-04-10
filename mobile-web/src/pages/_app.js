import MainLayout from "@/components/Layout/MainLayout";
import "@/styles/globals.css";
import Head from "next/head";
import { LocaleProvider } from "@/hooks/userLocale";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>8i Access Control</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </>
  );
}
