import { faArrowRight, faGift, faHeart, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const options = [
	{
		icon: faHeart,
		iconBg: "bg-cma-orange",
		label: "One-Time Gift",
		description: "Make a one-time gift in support of the Museum's mission.",
		cta: "Donate Now",
		href: "https://16707.blackbaudhosting.com/16707/Annual-Fund",
		highlight: true,
	},
	{
		icon: faRotate,
		iconBg: "bg-cma-teal",
		label: "Monthly Sustainer",
		description: "Set up a recurring monthly gift to become a Sustainer.",
		cta: "Donate Monthly",
		href: "https://16707.blackbaudhosting.com/16707/Annual-Fund",
		highlight: false,
		cardBg: "bg-cma-teal-pale border-cma-teal-pale",
	},
	{
		icon: faGift,
		iconBg: "bg-cma-orange-dark",
		label: "Other Ways to Give",
		description: "Explore matching gifts, stock donations, DAFs, and more ways to support CMA.",
		cta: "Ways to Give",
		href: "#/support",
		highlight: false,
	},
];

export default function DonateOnline() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[100px]">
			<div className="cma-section-container flex flex-col gap-[48px]">
				<motion.div
					className="flex flex-col items-center gap-[16px] text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="cma-eyebrow text-cma-teal-dark">Donate Online</p>
					<h2 className="text-cma-navy">Your gift helps us continue our mission to inspire learning and a sense of discovery through the power of play.</h2>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] max-w-[1000px] mx-auto w-full">
					{options.map((opt, i) => (
						<motion.a
							key={opt.label}
							href={opt.href}
							className={`rounded-[24px] p-[32px] flex flex-col gap-[20px] border-2 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] ${
								opt.highlight
									? "bg-cma-navy border-cma-navy"
									: opt.cardBg ?? "bg-white border-black/8"
							}`}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
						>
							<div className={`rounded-full size-[48px] flex items-center justify-center shrink-0 ${opt.iconBg}`}>
								<FontAwesomeIcon icon={opt.icon} className="text-white text-[18px]" />
							</div>
							<div className="flex flex-col gap-[8px] flex-1">
								<p className={`font-extrabold text-[20px] leading-[1.2] ${opt.highlight ? "text-white" : "text-cma-navy"}`}>
									{opt.label}
								</p>
								<p className={`text-[15px] leading-[1.65] ${opt.highlight ? "text-cma-blue-light" : "text-cma-navy/80"}`}>
									{opt.description}
								</p>
							</div>
							<span className={`cma-text-link font-black flex items-center gap-[6px] ${opt.highlight ? "!text-cma-orange" : ""}`}>
								{opt.cta}
								<FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
							</span>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
