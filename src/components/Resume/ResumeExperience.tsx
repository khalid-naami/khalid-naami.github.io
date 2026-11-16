import React from "react";
import ExperienceList from "../General/ExperienceList";

const data = [
	{
		company: "Dashboard Options",
		title: "Project Founder",
		link: "https://x.com/DashboardOption",
		daterange: "2026",
		summary: `
- Engineered and bootstrapped a premier high-frequency options analytics platform from the ground up, integrating real-time data feeds from **CBOE, OPRA, Binance, and Deribit**.
- Developed advanced algorithmic models to calculate and visualize **"The Greeks"** (Delta, Gamma, Vega, Theta) with institutional-grade accuracy and sub-millisecond execution speeds.
- Leveraged the AI revolution to enhance predictive analytics, scaling the platform independently into a global benchmark for volatility analysis.
		`,
	},
	{
		company: "Remote Canadian University",
		title: "Big Data & Financial Analytics Specialization",
		link: "#",
		daterange: "September 2024 - Present",
		summary: `
- Pursuing an advanced academic specialization in **Big Data Science**, focused on optimizing large-scale datasets within the **Medical** and **Quantitative Finance** domains.
- Developing expertise in **Supervised Learning** frameworks, specializing in predictive modeling and pattern recognition for complex market data.
- Actively engaged in high-level data auditing and session analysis, translating theoretical coursework into practical, high-precision evaluation models.
- Consistently demonstrating academic excellence through rigorous examination-based assessments and practical lab-based certifications.
		`,
	},
	{
		company: "Open-Source & Digital Solutions",
		title: "Quant & Full-Stack Systems Architect",
		link: "#",
		daterange: "September 2025 - Present",
		summary: `
- **Multi-Disciplinary & Cross-Domain Architecture:** Designing and engineering scalable web platforms and custom analytical projects across any data domain—including **financial, medical, macroeconomic, and enterprise datasets**—by integrating **Python** (**Pandas, NumPy, SciPy, Polars, Numba, Plotly, Streamlit**) with **JavaScript/TypeScript** (**React.js, D3.js, Recharts, Node.js**).
- **Quantitative Synthesis & Open-Source Leadership:** Bridging **Global Macroeconomic analysis** and software engineering to build transparent, institutional-grade tools and interactive data visualizations (**D3.js, Recharts, Plotly**) for the global community.
- **Performance & Workflow Automation:** Accelerating load speeds (**Lazy Loading**, responsive architecture) and building automated pipelines for content generation, media optimization, search indexing, and structured data feeds (**RSS, Sitemaps, JSON**).
- **Web Security & System Integrity:** Enforcing modern web security standards and UI hardening (**XSS Protection, Subresource Integrity [SRI], Input Validation**) to ensure platform stability, privacy, and data reliability.
		`,
	},
	{
		company: "Financial Engineering Mentorship",
		title: "Quantitative Finance Mentor",
		link: "#",
		daterange: "2026 - Present",
		summary: `
- **Expert Mentorship:** Leveraging deep scientific market experience to train the next generation of quantitative traders and financial engineers in mastering complex derivatives.
- **Curriculum Development:** Designed and delivered specialized training on **The Greeks** (risk metrics), Python for Finance, and the most powerful analytical libraries (e.g., Pandas, NumPy, Scipy).
- **Practical Application:** Empowering students with the tools to bridge the gap between financial theory and algorithmic execution through high-fidelity modeling and backtesting.
- **Knowledge Synthesis:** Translating years of market exposure into structured educational masterclasses focused on volatility surfaces and strategic options management.
		`,
	},
];

export default function ResumeExperience() {
	return <ExperienceList experience={data} />;
}
