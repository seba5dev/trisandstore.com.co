const BASE_URL = "https://trisandstore.com.co/api/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}
export async function getProductos() {
  const productosRes = await fetch(BASE_URL + "/productos?_embed");
  const productos = await productosRes.json();
  return productos;
}

export async function getProducto(slug) {
  const productos = await getProductos();
  const productoArray = productos.filter((producto) => producto.slug == slug);
  const producto = productoArray.length > 0 ? productoArray[0] : null;
  return producto;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "productos":
      elements = await getProductos();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
