import { cmaMarqueeColors } from "./cmaMarqueeColors";

const partners = [
	"North Highland",
	"The Coca-Cola Company",
	"The Home Depot",
	"Google",
	"Georgia Power",
	"BlackRock",
	"UPS",
	"Emory University",
	"Kaiser Permanente",
	"Slalom",
	"PNC Bank",
	"Atlanta Braves",
	"EY",
	"Alston & Bird LLP",
	"Novelis",
	"Insight Global",
];

export default function AboutPartners() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden flex flex-col gap-[30px]">
			<p className="cma-eyebrow text-white/70 text-center">
				Proudly Supported By:
			</p>
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{[...partners, ...partners].map((name, i) => {
						const { bg, text } = cmaMarqueeColors[i % cmaMarqueeColors.length];
						return (
							<div
								key={`item-${i}`}
								className={`shrink-0 h-[82px] w-[158px] rounded-[10px] flex items-center justify-center ${bg} ${text}`}
							>
								<p className="font-bold text-center px-3 text-[13px]">
									{name}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
