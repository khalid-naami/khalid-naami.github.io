import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function GamePage(): JSX.Element {
  return (
    <Layout title="Pokeball Game" description="Test your market skills with the Pokeball Game. A fun, interactive way to understand probability and risk in financial markets." noFooter>
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
      <div style={{
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
        Welcome to the Pokeball Collection Game, an exclusive interactive experience designed by Khalid Naami to showcase the intersection of gaming mechanics and creative web development. This immersive browser-based game allows players to engage with a dynamic environment where strategy and precision are key. As you navigate through the interface, you will discover unique elements inspired by classic monster collection series, reimagined through a modern lens. This project serves as a testament to the power of React and high-performance JavaScript, delivering smooth animations and responsive gameplay directly in your browser. Whether you are a fan of interactive visualizations or simply looking for a quick gaming break, this Pokeball collector provides a polished, professional experience that reflects the high standards of technical excellence found across the rest of this platform. Engage with the mechanics, master the controls, and enjoy this creative fusion of technology and entertainment. This application leverages advanced state management and real-time rendering to ensure every interaction feels alive and responsive to player input.
      </div>
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
