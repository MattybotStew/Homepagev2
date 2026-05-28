import { motion } from "motion/react";
import imgHeroBg from "../../assets/store-hero-bg.svg";

export default function MuseumStoreHero() {
	return (
		<section
			aria-label="Museum Store"
			className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]"
		>
			{/* Decorative background graphic */}
			<div
				className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center"
				aria-hidden
			>
				<img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
			</div>

			{/* Spacer for fixed header */}
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			<div className="cma-section-container relative z-[1]">
				<motion.div
					className="flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-blue-light opacity-80">
						Children's Museum of Atlanta
					</p>
					<h1 className="text-white">Museum Store</h1>
					<div className="flex flex-col gap-1 text-cma-blue-light">
						<p className="text-cma-blue-light text-[clamp(18px,2vw,24px)] font-semibold leading-[1.4]">
							Pop in, poke around, and leave with a little piece of museum
							magic. Our store is packed with playful gifts that keep the fun
							going after you leave.
						</p>
						<p className="text-white font-black text-[clamp(15px,1.5vw,20px)] leading-[1.5] mt-4">
							Hours Of Operation: Monday-Sunday: 10:00 AM - 5:00 PM
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 mt-2">
						<a
							href="#education"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark"
						>
							Education at the Museum
						</a>
						<a
							href="#contact"
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white"
						>
							Connect with Our Team
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
