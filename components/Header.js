import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-primary px-2 sm:px-4 py-3 shadow-xl fixed top-0 w-full z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            {/* <img
              src={require("../assets/images/yo.JPG")}
              className="mr-3 h-10"
              alt="Trisand Bordados"
            /> */}
            <span className="self-center md:text-xl font-semibold text-clip text-secondary">
              Trisand Bordados
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center mx-7 p-1 text-sm rounded-lg md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } w-full md:block md:w-auto duration-200 transition`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li
                className={
                  router.asPath === "/"
                    ? "bg-secondary block py-1 px-3 rounded font-semibold shadow text-white"
                    : "block py-1 px-3 text-seba-300 rounded font-medium"
                }
              >
                <Link href="/">Inicio</Link>
              </li>
              <li
                className={
                  router.asPath === "/productos"
                    ? "bg-secondary block py-1 px-3 rounded font-semibold shadow text-white"
                    : "block py-1 px-3 text-seba-300 rounded font-medium"
                }
              >
                <Link href="/productos">Productos</Link>
              </li>
              <li
                className={
                  router.asPath === "/posts"
                    ? "bg-secondary block py-1 px-3 rounded font-semibold shadow text-white"
                    : "block py-1 px-3 text-seba-300 rounded font-medium"
                }
              >
                <Link href="/posts">Blog</Link>
              </li>
              <li
                className={
                  router.asPath === "/contactenos"
                    ? "bg-secondary block py-1 px-3 rounded font-semibold shadow text-white"
                    : "block py-1 px-3 text-seba-300 rounded font-medium"
                }
              >
                <Link href="/contactenos">Contáctenos</Link>
              </li>
              <li
                className={
                  router.asPath === "/sobre-nosotros"
                    ? "bg-secondary block py-1 px-3 rounded font-semibold shadow text-white"
                    : "block py-1 px-3 text-seba-300 rounded font-medium"
                }
              >
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
