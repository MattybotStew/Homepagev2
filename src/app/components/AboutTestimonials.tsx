import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

function StarRow() {
	return (
		<div className="flex gap-1">
			{Array.from({ length: 5 }).map((_, i) => (
				<FontAwesomeIcon
					key={`item-${i}`}
					icon={faStar}
					className="text-cma-orange text-[14px]"
				/>
			))}
		</div>
	);
}

export default function AboutTestimonials() {
	return (
		<section className="bg-cma-cream w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-12">
				<motion.div
					className="flex flex-col gap-4 items-center text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-teal">what families say</p>
					<h2 className="text-cma-navy max-w-[560px]">
						Stories From Our Community
					</h2>
				</motion.div>

				<motion.div
					className="bg-white rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center max-w-[860px] mx-auto w-full"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
				>
					<div className="flex flex-col gap-5 flex-1">
						<StarRow />
						<p className="text-cma-navy text-[clamp(16px,2vw,20px)] font-semibold italic leading-[1.65]">
							"Best investment we made this year! Our kids ask to go every
							weekend, and we don't have to think twice about the cost. The
							early morning hours are a game-changer."
						</p>
					</div>
					<div className="flex items-center gap-4 shrink-0">
						<div className="w-[56px] h-[56px] rounded-full bg-cma-teal flex items-center justify-center shrink-0">
							<span className="text-white text-[16px] font-black">CMA</span>
						</div>
						<div className="flex flex-col">
							<span className="text-cma-navy font-bold text-[14px] leading-snug">
								Museum Member
							</span>
							<span className="text-[#6b7ea0] text-[13px] leading-snug">
								Atlanta, GA
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
