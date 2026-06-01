import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgSpring from "../../assets/exhibits-spring-hero.webp";
import imgSummer from "../../assets/exhibits-summer-hero.jpg";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";

const featuredExhibits = [
	{
		image: imgSpring,
		badge: "Spring 2026",
		ages: "Ages: 5–8 | Usually 15–20 minutes",
		title: "Aim High: Soaring with the Tuskegee Airmen",
		body: "Play in a replica cockpit and more as you learn about the Tuskegee Airmen.",
		href: "#/exhibits/aim-high-soaring-with-the-tuskegee-airmen",
	},
	{
		image: imgSummer,
		badge: "Summer 2026",
		ages: "Ages: 4–14 | May 23 – Sep 13, 2026 | 25–30 minutes",
		title: "Wild Kratts®: Ocean Adventure!",
		body: "Explore ocean habitats and their creatures in this deep-sea adventure!",
		href: "#/exhibits/wild-kratts-ocean-adventure",
	},
];

export default function ExhibitsHero() {
	return (
		<section className="bg-white w-full pt-[60px] pb-[80px] md:pt-[80px] md:pb-[120px] relative">
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
			<div className="cma-section-container flex flex-col gap-[48px]">
				{/* Heading */}
				<motion.div
					className="flex flex-col items-center gap-[24px] text-center"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-cma-navy leading-none tracking-[-1px]">
						Explore Our Exhibits:
						<br />
						Where Play Comes to Life
					</h2>
					<p className="text-cma-navy max-w-[560px]">
						Experience 20,000 square feet of playful exhibits where families
						create, explore, and discover new adventures around every corner.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Tour the Museum
						</a>
						<a
							onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							Download Exhibit Map
						</a>
					</div>
				</motion.div>

				{/* Featured exhibit cards */}
				<div className="flex flex-col md:flex-row gap-5">
					{featuredExhibits.map((exhibit, i) => (
						<motion.a
							key={exhibit.title}
							href={exhibit.href}
							className="flex-1 bg-cma-cream border-2 border-black/5 rounded-[24px] pt-[24px] px-[24px] pb-[48px] flex flex-col gap-[32px] relative transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.1,
							}}
						>
							{/* Image */}
							<div className="relative rounded-[16px] overflow-hidden h-[280px] sm:h-[360px] shrink-0">
								<img
									src={exhibit.image}
									alt={exhibit.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>

							{/* Text */}
							<div className="flex flex-col gap-[24px]">
								<div className="flex flex-col gap-[8px]">
									<p className="text-cma-teal-dark font-bold text-[12px]">{exhibit.badge}</p>
									<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.1] tracking-[-1px]">
										{exhibit.title}
									</p>
								</div>
								<p className="text-cma-teal-dark text-[13px] font-medium">{exhibit.ages}</p>
								<p className="text-cma-navy">{exhibit.body}</p>
								<span className="cma-text-link">
									See Exhibit{" "}
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-[13px]"
									/>
								</span>
							</div>
						</motion.a>
					))}
				</div>
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
