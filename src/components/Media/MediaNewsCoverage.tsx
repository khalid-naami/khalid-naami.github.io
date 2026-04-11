import React from "react";
import NewsMentionsList from "../General/NewsList";

const data = [
	{
		title: "Intuitive Interface",
		subtitle: "Flexible Expiration Selection: From the full option complex to near-term 0DTE (zero days to expiration) contracts, we accommodate all trading preferences, allowing you to tailor your approach for different market conditions.",
		link: "#",
		magazine: "Dashboard Options Showcase",
		date: "2026-04-11",
		imgs: ["/img/gex dex.png", "/img/charm and vanna.png"],
		summary: [
			"Make quick decisions with our all-in-one Greeks",
			"Delta, Gamma, Charm, Vanna visualized clearly",
			"Open Interest visuals designed for easy interpretation"
		]
	},
	{
		title: "GEX Dashboard",
		subtitle: "Real-Time Data: We provide real-time data to keep you informed about the latest market movements in spot price and the associated impact on market structure.",
		link: "#",
		magazine: "Dashboard Options Showcase",
		date: "2026-04-11",
		imgs: ["/img/slv (2).png", "/img/xag.png"],
		summary: [
			"Real-time gamma exposure on Total, Weekly, and O DTE time frames",
			"Identify option dealer supply & demand levels",
			"Real-time O DTE GEX Flow Data"
		]
	},
	{
		title: "Complete Trading Hub: Institutional Flow & Market Maker Positions",
		subtitle: "Access to Stocks, ETFs & Crypto: You'll have access to all stocks, ETFs, and cryptocurrencies with an underlying options market. Whether you trade SPX, BTC, or XAU, the entire trading world is at your fingertips.",
		link: "#",
		magazine: "Dashboard Options Showcase",
		date: "2026-04-10",
		img: "/img/Dashboard Options Showcase.png",
		summary: [
			"Turning complex options data into actionable signals",
			"Decode market maker positions & key transition zones",
			"Expose institutional flow for a clear, undeniable edge"
		]
	}
];

export default function NewsMentions() {
	return <NewsMentionsList news={data} />;
}
