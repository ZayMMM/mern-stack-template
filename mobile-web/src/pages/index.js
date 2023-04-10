import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/Home/Home";
import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function HomePage(props) {
  const {
    query: { lang },
  } = useRouter();

  return (
    <>
      <MainLayout>
        <Home lang={lang} {...props} />
      </MainLayout>
    </>
  );
}
