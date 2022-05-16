import Hero from "../components/Hero";
import Layout from "../components/Layout";
export default function Contactenos() {
  return (
    <Layout>
      <Hero titulo="Contactenos" />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold">¿Quieres saber más de nosotros?</h2>
        <p className="mt-4">
          Si deseas saber más de nosotros, puedes enviarnos un correo a{" "}
          <a href="mailto:bordados.ts@gmail.com">
            nuestro correo electrónico o por medio de nuestras redes sociales
          </a>
        </p>
      </div>
    </Layout>
  );
}
