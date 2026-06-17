import { cmaMarqueeColors } from "./cmaMarqueeColors";

const donors = [
	"The Blank Foundation",
	"Arthur M. Blank Family Foundation",
	"Community Foundation for Greater Atlanta",
	"The Joseph B. Whitehead Foundation",
	"Lettie Pate Whitehead Foundation",
	"The Coca-Cola Foundation",
	"Delta Air Lines Foundation",
	"SunTrust Foundation",
	"Chick-fil-A Foundation",
	"Home Depot Foundation",
	"Georgia Power Foundation",
	"UPS Foundation",
	"Northside Hospital",
	"Kaiser Permanente",
	"Truist Foundation",
	"EY Foundation",
];

export default function DonateDonors() {
	return (
		<div className="bg-cma-navy w-full py-6 overflow-hidden">
			<div className="cma-marquee-container">
				<div className="cma-marquee-content">
					{[...donors, ...donors].map((name, i) => {
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
