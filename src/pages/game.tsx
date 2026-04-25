import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function GamePage(): JSX.Element {
  return (
    <Layout title="Pokeball Game" noFooter>
      <Head>
        <style>{`
          html, body {
            overflow: hidden !important;
            height: 100% !important;
          }
        `}</style>
      </Head>
      <h1 style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0'
      }}>
        Pokeball Collection Game - Interactive Experience
      </h1>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1, minHeight: 0 }}>
          <BrowserOnly fallback={<div style={{ height: "100%" }} />}>
            {() => {
              const PokemonGame =
                require("@site/src/components/PokemonGame/PokemonGame").default;
              return <PokemonGame />;
            }}
          </BrowserOnly>
        </div>
      </div>
    </Layout>
  );
}
