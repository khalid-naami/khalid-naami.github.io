import React from "react";
import ArticlesList from "../General/ArticlesList";

const data = [
	{
		title: "The Power of Gamma: Managing Explosive Options Risk",
		link: "/blog/the-power-of-gamma",
		conference: "Published on Khalid Naami Blog",
	},
	{
		title: "Delta Dynamics: Mastering Directional Risk in Modern Markets",
		link: "/blog/delta-dynamics-directional-risk",
		conference: "Technical Analysis Series",
	},
	{
		title: "Vanna: The Critical Bridge Between Price and Volatility",
		link: "/blog/vanna-price-volatility-bridge",
		conference: "Advanced Risk Management",
	},
	{
		title: "Charm: Decoding the Invisible Decay of Options Delta",
		link: "/blog/charm-the-invisible-delta-decay",
		conference: "Quantitative Insights",
	},
];

export default function ResumeArticles() {
	return <ArticlesList articles={data} />;
}
