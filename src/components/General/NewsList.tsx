import React from "react";

interface News {
	date: string;
	title: string;
	magazine: string;
	link: string;
	img?: string;
	imgs?: string[];
	subtitle?: string;
	summary?: string[];
}

interface NewsMentionsListProps {
	news: News[];
}

export default function NewsMentionsList({ news }: NewsMentionsListProps) {
	return (
		<div className="mx-auto mt-8">
			{news.map((single_news) => (
				<div key={single_news.link} className="mission-container">
					<div className="mission-description">
						<div className="text-xs mb-2">
							{single_news.date} - <strong>{single_news.magazine}</strong>
						</div>
						<div className="text-base mb-3">
							{single_news.title}
						</div>
						{single_news.subtitle && (
							<div className="text-sm text-gray-400 mb-3 font-semibold">
								{single_news.subtitle}
							</div>
						)}
						{single_news.summary && (
							<ul className="text-gray-300 text-sm list-disc pl-5 mb-4">
								{single_news.summary.map((point, idx) => (
									<li key={idx} className="mb-1">{point}</li>
								))}
							</ul>
						)}
						{(single_news.img || (single_news.imgs && single_news.imgs.length > 0)) && (
							<div className="my-4 flex flex-wrap gap-4 items-center justify-center">
								{single_news.img && (
									<img
										src={single_news.img}
										alt={single_news.title}
										className="max-w-sm h-auto rounded-lg object-contain"
									/>
								)}
								{single_news.imgs?.map((imgSrc, idx) => (
									<img
										key={idx}
										src={imgSrc}
										alt={`${single_news.title} ${idx}`}
										className="max-w-sm h-auto rounded-lg object-contain border border-gray-700 shadow-lg"
									/>
								))}
							</div>
						)}
					</div>
					<div className="mission-buttons">
						<a
							href={single_news.link}
							rel="noopener noreferrer"
							target="_blank"
							className="mission-button mission-button--join"
						>
							Learn more
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
