import React from "react";
import ExperienceList from "../General/ExperienceList";

const data = [
	{
		company: "Dashboard Options",
		title: "Founder & CEO",
		link: "#",
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
- **Multi-disciplinary Engineering:** Specializing in high-performance software development by seamlessly integrating **C, C++, Python, and JavaScript**.
- **Financial Synthesis:** Bridging the gap between **Global Macroeconomic analysis** and robust financial engineering to build sophisticated trading infrastructures.
- **Open-Source Leadership:** Driving the creation of institutional-grade financial software, empowering the global community with transparent and scalable data analysis tools.
- **Full-Stack Data Science:** Combining low-latency systems (C++) with flexible analytical modules (Python) to architect next-generation financial ecosystems.
		`,
	},
	{
		company: "Confidential Financial Institution",
		title: "Proprietary Financial Systems Engineer",
		link: "#",
		daterange: "March 2026 - Present",
		summary: `
- **Collaborative Engineering:** Partnering with cross-functional engineering teams to architect and maintain mission-critical financial software and high-performance application interfaces (APIs).
- **Institutional-Grade Solutions:** Developed and optimized secure middleware for Tier-1 financial institutions, ensuring high data integrity and seamless system integration.
- **Security & Compliance:** Managing highly confidential, closed-source codebases with a focus on internal financial data processing and sensitive transaction monitoring.
- **Architecture Maintenance:** Ensuring the operational excellence of robust financial frameworks designed for high-security environments.
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
