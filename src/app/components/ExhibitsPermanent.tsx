import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";

const permanentExhibits = [
	{
		image: imgA,
		badge: "Permanent",
		title: "Fundamentally Food",
		body: "Climb tractors, milk a dairy cow, load delivery trucks, shop a bustling grocery store, and cook pretend meals together. Through playful farm-to-table fun, explore where our food comes from, how it moves, and how food helps families grow strong and healthy.",
		href: "#/exhibits/fundamentally-food",
	},
	{
		image: imgB,
		badge: "Permanent",
		title: "Gateway to the World",
		body: "Travel the globe through hands-on play. Guide trains across continents, launch rockets to planets in our solar system, and climb a two-story Earth. Along the way, explore geography, movement, and the ways our world is connected, from the ground beneath their feet to far beyond the sky.",
		href: "#/exhibits/gateway-to-the-world",
	},
	{
		image: imgC,
		badge: "Permanent",
		title: "Leaping into Learning",
		body: "Step into a magical forest! Cast your rod, catch colorful fish, and slip behind a waterfall without getting wet. Climb the treehouse, spot forest animals, and let little ones explore a cozy space filled with bubbles, a play car, and a house just their size.",
		href: "#/exhibits/leaping-into-learning",
	},
	{
		image: imgA,
		badge: "Permanent",
		title: "Let Your Creativity Flow",
		body: "Create a masterpiece on the paint wall, shape and reshape sand into living landscapes, and watch digital topography shift beneath your hands. Create your own avatar and share an act of kindness, adding your voice to a growing world of creativity, connection, and care.",
		href: "#/exhibits/let-your-creativity-flow",
	},
	{
		image: imgB,
		badge: "Permanent",
		title: "Step Up to Science",
		body: "Experiment with light and sound through playful, hands-on activities — creating shadows, exploring color, and making vibrations move. Discover how waves work, how science and creativity connect, and how experimenting leads to exciting, sometimes surprising results.",
		href: "#/exhibits/step-up-to-science",
	},
	{
		image: imgC,
		badge: "Permanent",
		title: "Tools for Solutions",
		body: "Guide balls through a giant machine using six simple machines, connect make-believe wires and pipes in the Construction House, build skyscrapers, and design a city of the future with blocks. Along the way, explore engineering, problem-solving, and how structures respond to forces.",
		href: "#/exhibits/tools-for-solutions",
	},
];

export default function ExhibitsPermanent() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px] relative">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Permanent Exhibits
				</motion.h2>

				<AnimatePresence>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.4 }}
					>
						{permanentExhibits.map((exhibit, i) => (
							<motion.a
								key={exhibit.title}
								href={exhibit.href}
								className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ delay: i * 0.06, duration: 0.5 }}
							>
								<div className="cma-card-img">
									<img
										src={exhibit.image}
										alt={exhibit.title}
										className="absolute inset-0 w-full h-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-[8px]">
									<p className="text-cma-teal-dark font-bold text-[12px]">{exhibit.badge}</p>
									<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
										{exhibit.title}
									</p>
								</div>
								<p className="text-cma-navy">{exhibit.body}</p>
								<span className="cma-text-link mt-auto">
									Learn More{" "}
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-[13px]"
									/>
								</span>
							</motion.a>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			<div
				aria-hidden
				className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full"
			>
				{Array.from({ length: 10 }).map((_, i) => (
					<img
						key={`item-${i}`}
						src={imgWaveBottom}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
