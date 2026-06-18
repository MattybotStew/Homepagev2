import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import imgObstacle from "../../assets/ObstacleAdventure.png";
import imgOutside from "../../assets/outside-the-box.png";
import imgSpace from "../../assets/place-in-space.png";
import imgWaveWhite from "../../assets/wave-white.svg";

const popUpExhibits = [
	{
		image: imgOutside,
		badge: "Fall 2026",
		title: "Outside the Box",
		body: "Transform everyday boxes into anything you imagine: cars, houses, rockets, and more! Build creativity while exploring the basics of math, engineering, and science through imaginative, constructive play.",
		href: "#/exhibits/outside-the-box",
	},
	{
		image: imgObstacle,
		badge: "Spring 2027",
		title: "Obstacle Adventure: Make Your Own Path",
		body: "Climb, crawl, balance, and explore your way through a giant obstacle course where you choose your own path, take on new challenges, and discover fun, unexpected ways to move.",
		href: "#/exhibits/obstacle-adventure",
	},
	{
		image: imgSpace,
		badge: "Summer 2027",
		title: "Our Place in Space",
		body: "Blast off into our solar system! Enter the planetarium to explore the planets and orbits in our solar system.",
		href: "#/exhibits/our-place-in-space",
	},
];

export default function ExhibitsPopUp() {
	return (
		<section className="bg-cma-cream w-full py-[80px] md:py-[120px] relative">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Pop-Up Exhibits: Coming Soon!
				</motion.h2>

				<AnimatePresence>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.4 }}
					>
						{popUpExhibits.map((exhibit, i) => (
							<motion.a
								key={exhibit.title}
								href={exhibit.href}
								className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ delay: i * 0.08, duration: 0.5 }}
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
						src={imgWaveWhite}
						alt=""
						className="w-[422px] h-[57px] shrink-0 block"
					/>
				))}
			</div>
		</section>
	);
}
