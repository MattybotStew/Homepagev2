import { cmaMarqueeColors } from "./cmaMarqueeColors";

const brands = [
	"Melissa & Doug",
	"National Geographic",
	"Magna-Tiles",
	"Nee Doh",
	"Crocodile Creek",
	"PlayMonster",
	"Melissa & Doug",
	"National Geographic",
	"Magna-Tiles",
	"Nee Doh",
	"Crocodile Creek",
	"PlayMonster",
];

export default function MuseumStoreBrands() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden">
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{brands.map((name, i) => {
						const { bg, text } = cmaMarqueeColors[i % cmaMarqueeColors.length];
						return (
							<div
								key={`item-${i}`}
								className={`shrink-0 h-[82px] w-[158px] rounded-[10px] flex items-center justify-center ${bg} ${text}`}
							>
								<p className="font-bold text-center px-3">{name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
