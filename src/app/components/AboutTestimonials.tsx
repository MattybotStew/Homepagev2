import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function AboutTestimonials() {
	return (
		<section className="bg-cma-cream w-full py-[100px] md:py-[140px] overflow-hidden relative">
			{/* Decorative large quote mark */}
			<div
				aria-hidden
				className="absolute top-0 left-1/2 -translate-x-1/2 text-cma-navy/[0.06] font-black leading-none select-none pointer-events-none text-[clamp(200px,28vw,420px)]"
				style={{ fontFamily: "Nunito, sans-serif", lineHeight: 0.85 }}
			>
				"
			</div>

			<div className="cma-section-container relative flex flex-col items-center gap-10 text-center">
				{/* Stars — role=img so the aria-label is a valid accessible name,
				    not a prohibited attribute on a bare div (the pattern to copy in WP). */}
				<motion.div
					className="flex gap-[6px]"
					role="img"
					aria-label="Rated 5 out of 5 stars"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					{Array.from({ length: 5 }).map((_, i) => (
						<FontAwesomeIcon
							key={`star-${i}`}
							icon={faStar}
							className="text-cma-orange text-[18px]"
						/>
					))}
				</motion.div>

				{/* Quote */}
				<motion.p
					className="text-cma-navy font-extrabold text-[clamp(22px,3.5vw,48px)] leading-[1.2] tracking-[-0.5px] max-w-[900px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
				>
					"Best investment we made this year! Our kids ask to go every weekend,
					and we don't have to think twice about the cost. Worth every penny."
				</motion.p>

				{/* Attribution */}
				<motion.div
					className="flex flex-col items-center gap-1"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
				>
					<div className="w-[40px] h-[2px] bg-cma-orange mb-3" />
					<span className="text-cma-navy font-bold text-[15px] leading-snug">
						Museum Member
					</span>
					<span className="text-cma-slate/80 text-[13px] leading-snug">
						Atlanta, GA
					</span>
				</motion.div>
			</div>
		</section>
	);
}
