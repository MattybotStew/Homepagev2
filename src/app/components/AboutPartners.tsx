const partners = [
	{ name: "North Highland", bg: "#2970c2", text: "text-white" },
	{ name: "The Coca-Cola Company", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "The Home Depot", bg: "#fa611f", text: "text-white" },
	{ name: "Google", bg: "#ec519d", text: "text-white" },
	{ name: "Georgia Power", bg: "#128f40", text: "text-white" },
	{ name: "BlackRock", bg: "#1775d1", text: "text-white" },
	{ name: "UPS", bg: "#f7941e", text: "text-white" },
	{ name: "Emory University", bg: "#128f40", text: "text-white" },
	{ name: "Kaiser Permanente", bg: "#2970c2", text: "text-white" },
	{ name: "Slalom", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "PNC Bank", bg: "#fa611f", text: "text-white" },
	{ name: "Atlanta Braves", bg: "#ec519d", text: "text-white" },
	{ name: "EY", bg: "#128f40", text: "text-white" },
	{ name: "Alston & Bird LLP", bg: "#1775d1", text: "text-white" },
	{ name: "Novelis", bg: "#f7941e", text: "text-white" },
	{ name: "Insight Global", bg: "#128f40", text: "text-white" },
];

export default function AboutPartners() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden">
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{[...partners, ...partners].map((partner, i) => (
						<div
							key={`item-${i}`}
							className={`shrink-0 h-[82px] w-[158px] rounded-[10px] flex items-center justify-center ${partner.text}`}
							style={{ backgroundColor: partner.bg }}
						>
							<p
								className={`font-bold text-center px-3 text-[13px] ${partner.text}`}
							>
								{partner.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
