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
		company: "Open-Source Financial Ecosystems",
		title: "Quant Software Architect",
		link: "#",
		daterange: "September 2025 - Present",
		summary: `
- **Multi-disciplinary Engineering:** Specializing in high-performance software development by seamlessly integrating **Python** (Pandas, NumPy, SciPy, Polars, Numba, Plotly, Streamlit) and **JavaScript/TypeScript** (React.js, D3.js, Recharts, Node.js).
- **Financial Synthesis:** Bridging the gap between **Global Macroeconomic analysis** and robust financial engineering to build sophisticated trading infrastructures.
- **Open-Source Leadership:** Driving the creation of institutional-grade financial software, empowering the global community with transparent and scalable data analysis tools.
- **Full-Stack Data Science:** Combining low-latency interactive systems (**JavaScript/TypeScript, React.js, D3.js**) with flexible analytical modules (**Python, Pandas, NumPy, Polars, Numba**) to architect next-generation financial ecosystems.
		`,
	},
	{
		company: "Digital Solutions Organization",
		title: "Full-Stack Systems & Platform Engineer",
		link: "#",
		daterange: "March 2026 - Present",
		summary: `
- **Full-Stack System Architecture:** Designing and developing modern, scalable web platforms and custom projects across any data domain—including **financial, medical, analytical, and enterprise datasets**—by combining interactive front-end interfaces (**React.js, TypeScript**) with high-efficiency backend data processing (**Python, Node.js**).
- **Performance & UX Optimization:** Accelerating page load speeds, implementing **Lazy Loading** strategies, and engineering responsive applications that operate seamlessly across all devices.
- **Workflow & Data Automation:** Building automation scripts and pipelines for content generation, media processing, and automated search indexing and structured data feeds (**RSS, Sitemaps, JSON**).
- **Web Security & Integrity:** Enforcing modern web security best practices and UI hardening (**XSS Protection, Subresource Integrity [SRI], Input Validation**) to guarantee platform stability, privacy, and reliability.
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
