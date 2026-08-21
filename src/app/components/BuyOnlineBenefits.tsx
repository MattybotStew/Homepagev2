import { faClock, faMobileScreen, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import imgPhoto from "../../assets/whyBuyOnline.png";
import imgWaveBottom from "../../assets/impact-wave-bottom.svg";
import imgWaveTop from "../../assets/impact-wave-top.svg";

const benefits = [
	{
		icon: faTicket,
		iconBg: "bg-cma-teal",
		title: "Guaranteed Entry",
		body: "Advance online ticket purchase is highly encouraged. Walk-up ticket availability is limited — booking ahead ensures your spot.",
	},
	{
		icon: faClock,
		iconBg: "bg-cma-orange",
		title: "Choose Your Arrival Window",
		body: "Select the hour block in which you want to arrive. If you arrive earlier or later and the Museum is at capacity, you may be asked to wait.",
	},
	{
		icon: faMobileScreen,
		iconBg: "bg-[#fbb040]",
		title: "Mobile Tickets",
		body: "Tickets are sent via email — just show on your phone or print at home. Quick, easy entry so you can get straight to the fun.",
	},
];

export default function BuyOnlineBenefits() {
	return (
		<section className="bg-cma-navy w-full py-[80px] md:py-[120px] relative overflow-hidden">
			{/* Top wave */}
			<div aria-hidden className="absolute top-0 left-0 flex overflow-hidden h-[13px] w-full">
				{Array.from({ length: 10 }).map((_, i) => (
					<img key={`item-${i}`} src={imgWaveTop} alt="" className="w-[422px] h-[57px] shrink-0 block" />
				))}
			</div>

			<div className="cma-section-container">
				<div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] items-start">
					{/* Left: text + benefits + CTAs */}
					<motion.div
						className="flex-1 flex flex-col gap-[48px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<div className="flex flex-col gap-[24px]">
							<h2 className="text-white leading-none tracking-[-1px]">
								Why Buy Online
							</h2>
							<p className="text-cma-blue-light text-[clamp(15px,1.25vw,18px)] leading-[1.7]">
								Skip the line and guarantee your family's visit. Online tickets are the easiest way to plan ahead and make the most of your day at CMA.
							</p>
						</div>

						<div className="flex flex-col gap-[32px]">
							{benefits.map((benefit, i) => (
								<motion.div
									key={benefit.title}
									className="flex gap-[16px] items-start"
									initial={{ opacity: 0, x: -16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
								>
									<div className={`${benefit.iconBg} rounded-full size-[48px] flex items-center justify-center shrink-0`}>
										<FontAwesomeIcon icon={benefit.icon} className="text-white text-[18px]" />
									</div>
									<div className="flex flex-col gap-[8px] flex-1 min-w-0">
										<p className="font-extrabold text-[18px] leading-[1.2] text-white">
											{benefit.title}
										</p>
										<p className="text-cma-blue-light leading-[1.65]">{benefit.body}</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							className="flex flex-col sm:flex-row gap-3"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
						>
							<a
								href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf"
								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
							>
								Buy Tickets Now
							</a>
							<a
								onClick={() => document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								View FAQs
							</a>
						</motion.div>
					</motion.div>

					{/* Right: photo */}
					<motion.div
						className="w-full lg:w-[480px] xl:w-[520px] shrink-0"
						initial={{ opacity: 0, x: 24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					>
						<img
							src={imgPhoto}
							alt="Family enjoying Children's Museum of Atlanta"
							className="w-full h-[340px] md:h-[470px] object-cover object-top rounded-[24px]"
						/>
					</motion.div>
				</div>
			</div>

			{/* Bottom wave to cream */}
			<div aria-hidden className="absolute bottom-0 left-0 flex overflow-hidden h-[13px] w-full">
				{Array.from({ length: 10 }).map((_, i) => (
					<img key={`item-${i}`} src={imgWaveBottom} alt="" className="w-[422px] h-[57px] shrink-0 block" />
				))}
			</div>
		</section>
	);
}
