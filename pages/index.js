import Head from "next/head";

import { getPosts, getProductos } from "../utils/wordpress";

import Post from "../components/Post";
import Producto from "../components/Producto";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home({ posts, productos }) {
  const jsxPosts = posts.map((post) => {
    if (post["_embedded"]["wp:featuredmedia"]) {
      return (
        <Post
          post={post}
          key={post.id}
          title={post.title.rendered}
          content={post.content.rendered}
          featuredMedia={post["_embedded"]["wp:featuredmedia"][0]}
        />
      );
    } else {
      return (
        <Post
          post={post}
          key={post.id}
          title={post.title.rendered}
          content={post.content.rendered}
        />
      );
    }
  });

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
        <title>Trisand Store</title>
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

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const productos = await getProductos();
  return {
    props: {
      posts,
      productos,
    },
    revalidate: 10, // In seconds
  };
}
