import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

// import { getDate } from "../utils/utils";

export default function Post({ post, featuredMedia }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <Link href={`/posts/${post.slug}`}>
        <a className="relative w-full h-48">
          {featuredMedia ? (
            <Image
              src={featuredMedia["media_details"].sizes.medium["source_url"]}
              layout="fill"
              objectFit="contain"
              quality={100}
              alt={featuredMedia["alt_text"]}
            />
          ) : (
            <Image
              src={require("/assets/images/logo.png")}
              layout="fill"
              objectFit="contain"
              quality={100}
              alt="logo"
            />
          )}
        </a>
      </Link>
      <div className="card-body">
        <h4 className="card-title">{post.title.rendered}</h4>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post.slug}`}>
            <a className="btn btn-primary">Leer más</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
