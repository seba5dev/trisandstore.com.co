import React, { useState, useCallback } from "react";
import Head from "next/head";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
export default function Contactenos() {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 4.5845635,
    lng: -74.135361,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDkmY-nnx6wEmLIG-3XWDjjx5ul7qsS26M",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <>
      <Head>
        <title>Trisand Store | Sobre Nosotros</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDkmY-nnx6wEmLIG-3XWDjjx5ul7qsS26M&callback=initMap&libraries=&v=weekly`}
          async
        ></script>
      </Head>
      <Layout>
        <Hero titulo="Sobre nosotros" />
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Somos Trisand Bordados</h2>
          <p className="mt-4">
            Una empresa colombiana nacida en 2016 con el objetivo de brindar
            servicios de calidad a nuestros clientes, con una amplia experiencia
            en el sector de la industria del bordado.
          </p>
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </Layout>
    </>
  );
}
