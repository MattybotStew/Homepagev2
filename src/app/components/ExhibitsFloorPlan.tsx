import { faDownload, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const mainFloorExhibits = [
	{
		name: "Fundamentally Food",
		ages: "Ages 10 months – 8 years",
		desc: "Experience the farm-to-table journey — pick produce, climb on the John Deere tractor, milk Buttercup the cow, drive the delivery truck, shop in a mini Publix grocery store, and dine in a play café.",
	},
	{
		name: "Gateway to the World",
		ages: "Ages 10 months – 8 years",
		desc: "Climb through the layers of the Earth on a two-story globe, explore six continent tables, launch rockets toward the planets, and discover geology and geography through hands-on play.",
	},
	{
		name: "Leaping into Learning",
		ages: "Ages 0 – 5 years",
		desc: "A magical forest designed for the museum's youngest explorers — with a toddler house, bubble-and-light wall, magnetic fishing pond, treehouse, and puppet theatre.",
	},
	{
		name: "Let Your Creativity Flow",
		ages: "Ages 10 months – 8 years",
		desc: "Release your inner artist at the paint wall, build imaginative worlds at the virtual reality sand tables, and catch daily storytimes, dance parties, and science demos on the CMA stage.",
	},
	{
		name: "Tools For Solutions",
		ages: "Ages 10 months – 8 years",
		desc: "Build, engineer, and discover — from the interconnected ball machine using six simple machines to the construction house, Atlanta city blocks, and the Norilla earthquake design challenge.",
	},
];

function TourMapEmbed() {
	// Floor plan PNG is 1675×1515 (Museum Floor + Mezzanine stacked).
	// Absolute BASE_URL (/Homepagev2/) — relative "./" 404s on GH Pages without a trailing slash
	const mapSrc = `${import.meta.env.BASE_URL}museum-tour-map.html?embed=1`;
	return (
		<div className="relative w-full aspect-[1675/1515] bg-white rounded-[20px] [overflow-anchor:none]">
			<iframe
				src={mapSrc}
				title="Interactive museum floor map"
				loading="lazy"
				scrolling="no"
				tabIndex={-1}
				className="absolute inset-0 size-full border-0 rounded-[20px]"
			/>
		</div>
	);
}

function WalkThroughEmbed() {
	const walkSrc = `${import.meta.env.BASE_URL}museum-walk-through.html?embed=1`;
	return (
		<div className="w-full bg-white rounded-[20px] overflow-hidden [overflow-anchor:none]">
			<iframe
				src={walkSrc}
				title="Museum 360 walk-through tour"
				loading="lazy"
				tabIndex={-1}
				className="block w-full border-0 rounded-[20px] h-[520px] md:h-[640px]"
			/>
		</div>
	);
}

type Floor = {
	id: string;
	label: string;
	content: ReactNode;
};

const floors: Floor[] = [
	{
		id: "main",
		label: "Tour the Museum",
		content: (
			<div className="flex flex-col gap-[16px]">
				<TourMapEmbed />
				<p className="text-cma-navy">
					Hover over a pulse point and a 360° image of the area will open.
					Click, hold, and drag inside the viewer to look around.
					Alternatively, visit our{" "}
					<a
						className="cma-text-link"
						href="https://childrensmuseumatlanta.org/plan-your-visit/tour-the-museum/museum-walk-through/"
						target="_blank"
						rel="noopener noreferrer"
					>
						museum walk-through
					</a>{" "}
					to move from room to room.
				</p>
				<p className="text-cma-navy">
					Five permanent exhibits fill the main floor — plus the CMA stage, art
					studio, and a sensory-friendly room.
				</p>
				<ul className="flex flex-col gap-[14px]">
					{mainFloorExhibits.map((ex) => (
						<li key={ex.name} className="flex flex-col gap-[2px]">
							<p className="text-cma-navy">
								<strong>{ex.name}</strong>{" "}
								<span className="font-normal text-cma-navy/80 text-[13px]">
									{ex.ages}
								</span>
							</p>
							<p className="text-cma-navy">{ex.desc}</p>
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-[6px] pt-[8px] border-t border-black/10">
					<p className="text-cma-navy font-extrabold">Mezzanine</p>
					<p className="text-cma-navy">
						Take the piano stairs or elevator to the Mezzanine and play in Step
						Up to Science, the Science Bar, and Jane's Innovation Station.
						Explore and experiment with the forces and phenomena that make our
						world wonderful.
					</p>
				</div>
			</div>
		),
	},
	{
		id: "walkthrough",
		label: "Walk-Through Tour",
		content: (
			<div className="flex flex-col gap-[20px]">
				<p className="text-cma-navy">
					View the rooms in our museum and travel between them by selecting a
					room or clicking the markers inside the 360° view. Explore permanent
					exhibits, the Museum Store, Snack Shop, and the Mezzanine — all from
					home before your visit.
				</p>
				<WalkThroughEmbed />
			</div>
		),
	},
];

export default function ExhibitsFloorPlan() {
	const [openId, setOpenId] = useState("main");
	// Switching Tour ↔ Walk-Through collapses ~viewport of height; without this,
	// scrollY clamps to the new document bottom and the page jumps to the footer.
	const scrollAnchorRef = useRef<HTMLElement | null>(null);
	const scrollAnchorTopRef = useRef(0);

	useLayoutEffect(() => {
		const el = scrollAnchorRef.current;
		if (!el) return;
		const delta = el.getBoundingClientRect().top - scrollAnchorTopRef.current;
		if (delta !== 0) window.scrollBy(0, delta);
		scrollAnchorRef.current = null;
	}, [openId]);

	const toggleFloor = (
		floorId: string,
		isOpen: boolean,
		button: HTMLButtonElement,
	) => {
		scrollAnchorRef.current = button;
		scrollAnchorTopRef.current = button.getBoundingClientRect().top;
		setOpenId(isOpen ? "" : floorId);
	};

	return (
		<section id="tour" className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.div
					className="flex flex-col gap-[16px] items-center text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy leading-none tracking-[-1px]">
						Take a Look Inside
					</h2>
					<p className="text-cma-navy max-w-[560px]">
						Check out the Museum's current and upcoming featured exhibits!{" "}
						<a onClick={() => document.getElementById("exhibits")?.scrollIntoView({ behavior: "smooth" })} className="cma-text-link">
							Click below for more info.
						</a>
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							href="#"
							className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
						>
							Download Social Story{" "}
							<FontAwesomeIcon
								icon={faDownload}
								className="ml-[6px] text-[13px]"
							/>
						</a>
					</div>
				</motion.div>

				<motion.div
					className="flex flex-col gap-[10px] [overflow-anchor:none]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
				>
					{floors.map((floor) => {
						const isOpen = openId === floor.id;
						return (
							<div
								key={floor.id}
								className={`border-2 border-black/5 rounded-[24px] transition-colors [overflow-anchor:none] ${isOpen ? "bg-cma-teal-pale overflow-visible" : "bg-white overflow-hidden"}`}
							>
								<button
									type="button"
									className="w-full flex items-center justify-between px-[24px] py-[20px] md:py-[32px]"
									onClick={(e) =>
										toggleFloor(floor.id, isOpen, e.currentTarget)
									}
								>
									<h3
										className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy`}
									>
										{floor.label}
									</h3>
									<FontAwesomeIcon
										icon={isOpen ? faMinus : faPlus}
										className="shrink-0 text-cma-orange text-[12px]"
									/>
								</button>

								{isOpen && (
									<div className="px-[24px] pb-[32px] flex flex-col gap-[24px] [overflow-anchor:none]">
										{floor.content}
									</div>
								)}
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
