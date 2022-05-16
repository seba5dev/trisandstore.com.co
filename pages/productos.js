import Head from "next/head";
import { getProductos } from "../utils/wordpress";
import Producto from "../components/Producto";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home({ productos }) {
  const jsxProductos = productos.map((producto) => {
    if (producto["_embedded"]["wp:featuredmedia"]) {
      return (
        <Producto
          producto={producto}
          key={producto.id}
          title={producto.title.rendered}
          content={producto.content.rendered}
          featuredMedia={producto["_embedded"]["wp:featuredmedia"][0]}
        />
      );
    } else {
      return (
        <Producto
          producto={producto}
          key={producto.id}
          title={producto.title.rendered}
          content={producto.content.rendered}
        />
      );
    }
  });

  return (
    <>
      <Head>
        <title>Trisand Store | Posts</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <Layout>
        <Hero titulo="Nuestros productos" />
        <div className="grid grid-cols-3 gap-4">{jsxProductos}</div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const productos = await getProductos();
  return {
    props: {
      productos,
    },
    revalidate: 10, // In seconds
  };
}
