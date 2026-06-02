const brands = [
	{ name: "Melissa & Doug", bg: "#2970c2", text: "text-white" },
	{ name: "National Geographic", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "Magna-Tiles", bg: "#fa611f", text: "text-white" },
	{ name: "Nee Doh", bg: "#ec519d", text: "text-white" },
	{ name: "Crocodile Creek", bg: "#128f40", text: "text-white" },
	{ name: "PlayMonster", bg: "#1775d1", text: "text-white" },
	{ name: "Melissa & Doug", bg: "#2970c2", text: "text-white" },
	{ name: "National Geographic", bg: "#ffba00", text: "text-[#0d0d0d]" },
	{ name: "Magna-Tiles", bg: "#fa611f", text: "text-white" },
	{ name: "Nee Doh", bg: "#ec519d", text: "text-white" },
	{ name: "Crocodile Creek", bg: "#128f40", text: "text-white" },
	{ name: "PlayMonster", bg: "#1775d1", text: "text-white" },
];

export default function MuseumStoreBrands() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden">
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{brands.map((brand, i) => (
						<div
							key={`item-${i}`}
							className={`shrink-0 h-[82px] w-[158px] rounded-[10px] flex items-center justify-center ${brand.text}`}
							style={{ backgroundColor: brand.bg }}
						>
							<p className={`font-bold text-center px-3 ${brand.text}`}>
								{brand.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
