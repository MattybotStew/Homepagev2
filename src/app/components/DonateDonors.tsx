const donors = [
	{ name: "The Blank Foundation", bg: "#2970c2", text: "text-white" },
	{ name: "Arthur M. Blank Family Foundation", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "Community Foundation for Greater Atlanta", bg: "#fa611f", text: "text-white" },
	{ name: "The Joseph B. Whitehead Foundation", bg: "#ec519d", text: "text-white" },
	{ name: "Lettie Pate Whitehead Foundation", bg: "#128f40", text: "text-white" },
	{ name: "The Coca-Cola Foundation", bg: "#1775d1", text: "text-white" },
	{ name: "Delta Air Lines Foundation", bg: "#f7941e", text: "text-white" },
	{ name: "SunTrust Foundation", bg: "#128f40", text: "text-white" },
	{ name: "Chick-fil-A Foundation", bg: "#2970c2", text: "text-white" },
	{ name: "Home Depot Foundation", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "Georgia Power Foundation", bg: "#fa611f", text: "text-white" },
	{ name: "UPS Foundation", bg: "#ec519d", text: "text-white" },
	{ name: "Northside Hospital", bg: "#128f40", text: "text-white" },
	{ name: "Kaiser Permanente", bg: "#1775d1", text: "text-white" },
	{ name: "Truist Foundation", bg: "#f7941e", text: "text-white" },
	{ name: "EY Foundation", bg: "#128f40", text: "text-white" },
];

export default function DonateDonors() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden">
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{[...donors, ...donors].map((donor, i) => (
						<div
							key={`item-${i}`}
							className={`shrink-0 h-[82px] w-[158px] rounded-[10px] flex items-center justify-center ${donor.text}`}
							style={{ backgroundColor: donor.bg }}
						>
							<p
								className={`font-bold text-center px-3 text-[13px] ${donor.text}`}
							>
								{donor.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
