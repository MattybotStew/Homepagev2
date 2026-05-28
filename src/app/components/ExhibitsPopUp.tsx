import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import imgB from "../../assets/1bfa9acf43f185f4d4031bdadb934f4c9dec4b57.webp";
import imgA from "../../assets/1fc4baecdde9a2932370e7a6c6cbbddba70e38a1.webp";
import imgC from "../../assets/39da2bd0af3dceef1e3b406cd981247f82778d27.webp";
import imgWaveWhite from "../../assets/wave-white.svg";

const popUpExhibits = [
	{
		image: imgA,
		badge: "Coming Soon",
		title: "Outside the Box",
		body: "Transform everyday boxes into anything you imagine: cars, houses, rockets, and more! Build creativity while exploring the basics of math, engineering, and science through imaginative, constructive play.",
		href: "#/exhibits/outside-the-box",
	},
	{
		image: imgB,
		badge: "Coming Soon",
		title: "Obstacle Adventure: Make Your Own Path",
		body: "Climb, crawl, balance, and explore your way through a giant obstacle course where you choose your own path, take on new challenges, and discover fun, unexpected ways to move.",
		href: "#/exhibits/obstacle-adventure",
	},
	{
		image: imgC,
		badge: "Coming Soon",
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
							<motion.div
								key={exhibit.title}
								className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px]"
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
									<div className="absolute bottom-[10px] left-[10px] bg-cma-teal-dark px-[18px] py-[12px] rounded-[8px]">
										<p className="font-extrabold text-[14px] text-white leading-[1.5] whitespace-nowrap">
											{exhibit.badge}
										</p>
									</div>
								</div>
								<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
									{exhibit.title}
								</p>
								<p className="text-cma-navy">{exhibit.body}</p>
								<a href={exhibit.href} className="cma-text-link mt-auto">
									Learn More{" "}
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-[13px]"
									/>
								</a>
							</motion.div>
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
