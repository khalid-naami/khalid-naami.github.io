import React from "react";
import Layout from "@theme/Layout";
import PokemonTCGWanted from "../components/Pokemon/PokemonTCGWanted";

export default function PokemonTCGWantedPage() {
	return (
		<Layout title="Pokemon TCG Wanted" description="Discover the definitive Pokemon TCG wishlist by Khalid Naami. A curated collection of rare collectible cards from vintage to modern sets for serious TCG fans.">
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<h1 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Pokemon TCG Wanted</h1>
				<p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
					Here are some of the cards that I am looking to get in the future.
				</p>

				<PokemonTCGWanted />
			</div>
		</Layout>
	);
}
