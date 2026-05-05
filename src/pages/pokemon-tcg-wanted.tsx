import React from "react";
import Layout from "@theme/Layout";
import PokemonTCGWanted from "../components/Pokemon/PokemonTCGWanted";

export default function PokemonTCGWantedPage() {
	return (
		<Layout title="Pokemon TCG Wanted" description="Browse the Pokemon TCG cards that Khalid Naami is looking for. A curated wishlist of collectible Pokemon Trading Card Game cards from past and current sets.">
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<h1 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Pokemon TCG Wanted</h1>
				<p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
					Here are some of the cards that my wife and I are looking to get in the future.
				</p>
				<p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "0.9em" }}>
					If you are collecting past cards generation - check my Pokemon Vault website at{" "}
					<a href="https://pokvault.com/" target="_blank" rel="noopener noreferrer">pokvault.com</a>.
				</p>
				<PokemonTCGWanted />
			</div>
		</Layout>
	);
}
