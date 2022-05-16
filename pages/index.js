import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trisand Store | Inicio</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <Layout>
        <Hero titulo="Trisand Store" />
      </Layout>
    </>
  );
}
