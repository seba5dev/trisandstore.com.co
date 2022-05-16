// Base de la URL de la API
const BASE_URL = "https://trisandstore.com.co/api/wp-json/wp/v2";

// Función para recuperar los posts de la API
export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed");
  const posts = await postsRes.json();
  return posts;
}

// Función para recuperar un solo post de la API
export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

// Función para recuperar los productos de la API
export async function getProductos() {
  const productosRes = await fetch(BASE_URL + "/productos?_embed");
  const productos = await productosRes.json();
  return productos;
}

// Función para recuperar un solo producto de la API
export async function getProducto(slug) {
  const productos = await getProductos();
  const productoArray = productos.filter((producto) => producto.slug == slug);
  const producto = productoArray.length > 0 ? productoArray[0] : null;
  return producto;
}

// Función para recuperar los slugs de las URL de la API
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
