import { faDownload, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import imgFloorPlan from "../../assets/exhibits-floor-plan.webp";
import imgTourThumb from "../../assets/exhibits-slide-1.webp";

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

type Floor = {
	id: string;
	label: string;
	content: React.ReactNode;
	image: string | null;
};

const floors: Floor[] = [
	{
		id: "main",
		label: "Main Floor",
		content: (
			<div className="flex flex-col gap-[16px]">
				<p className="text-cma-navy">
					Five permanent exhibits fill the main floor — plus the CMA stage, art
					studio, and a sensory-friendly room.
				</p>
				<ul className="flex flex-col gap-[14px]">
					{mainFloorExhibits.map((ex) => (
						<li key={ex.name} className="flex flex-col gap-[2px]">
							<p className="text-cma-navy">
								<strong>{ex.name}</strong>{" "}
								<span className="font-normal text-cma-navy/60 text-[13px]">
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
		image: imgFloorPlan,
	},
	{
		id: "walkthrough",
		label: "Walk-Through Tour",
		content: (
			<div className="flex flex-col gap-[20px]">
				<p className="text-cma-navy">
					View the rooms in our museum and travel between them by clicking on
					the markers. Explore six permanent exhibits, the CMA stage, art
					studio, sensory-friendly room, and the Mezzanine — all from home
					before your visit.
				</p>
				<a
					href="https://childrensmuseumatlanta.org/plan-your-visit/tour-the-museum/museum-walk-through/"
					target="_blank"
					rel="noopener noreferrer"
					className="group relative w-full rounded-[20px] overflow-hidden block"
				>
					<img
						src={imgTourThumb}
						alt="Museum interior"
						className="w-full h-[280px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					/>
					<div className="absolute inset-0 bg-cma-navy/50 flex flex-col items-center justify-center gap-[16px] transition-colors duration-300 group-hover:bg-cma-navy/60">
						<div className="w-[72px] h-[72px] rounded-full bg-white/20 border-2 border-white flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
							<svg className="w-[28px] h-[28px] text-white ml-[4px]" fill="currentColor" viewBox="0 0 24 24">
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
						<span className="font-black text-white text-[16px] tracking-wide">
							Start Virtual Tour
						</span>
					</div>
				</a>
			</div>
		),
		image: null,
	},
];

export default function ExhibitsFloorPlan() {
	const [openId, setOpenId] = useState("main");

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
							href="/social-story.pdf"
							download
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
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
					className="flex flex-col gap-[10px]"
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
								className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
							>
								<button
									className="w-full flex items-center justify-between px-[24px] py-[20px] md:py-[32px]"
									onClick={() => setOpenId(isOpen ? "" : floor.id)}
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
									<div className="px-[24px] pb-[32px] flex flex-col gap-[24px]">
										{floor.content}
										{floor.image && (
											<div className="bg-white rounded-[20px] p-[24px] overflow-hidden">
												<img
													src={floor.image}
													alt={`${floor.label} floor plan`}
													className="w-full h-auto rounded-[12px]"
												/>
											</div>
										)}
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
