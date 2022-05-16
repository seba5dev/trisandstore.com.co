import Link from "next/link";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";

import { getProducto, getSlugs } from "../../utils/wordpress";

export default function ProductoPage({ producto }) {
  return (
    <>
      <Layout>
        <Hero titulo={producto.title.rendered} />
        <h1 className="text-center text-2xl">{producto.title.rendered}</h1>
        <div
          className="card-text pb-5"
          dangerouslySetInnerHTML={{ __html: producto.content.rendered }}
        ></div>
        <Link href="/">
          <a className="btn btn-primary">Back to Home</a>
        </Link>
      </Layout>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("productos");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {
  const producto = await getProducto(params.slug);

  return {
    props: {
      producto,
    },
    revalidate: 10, // In seconds
  };
}
