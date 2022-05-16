import Head from "next/head";
import { getPosts } from "../utils/wordpress";
import Post from "../components/Post";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home({ posts }) {
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
        <Hero titulo="Nuestro blog" />
        <div className="grid grid-cols-3 gap-4">{jsxPosts}</div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
