import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import type { GivingCircle } from "../data/givingCircles";
import type { Program } from "../data/programs";

type Props = {
	circle: GivingCircle;
	related: Program[];
};

export default function FundraisingEventContent({ circle, related }: Props) {
	const event = circle.fundraisingEvent;
	if (!event) return null;

	return (
		<>
			{/* Hero */}
			<section className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container relative z-[1] flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto">
					<p className="cma-eyebrow text-cma-teal">{circle.eyebrow}</p>
					<h1 className="text-white">{circle.title}</h1>
					<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[620px]">
						{event.heroSubtitle}
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						{event.heroCtas.map((cta, i) => (
							<a
								key={cta.label}
								href={cta.href}
								className={
									i === 0
										? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
										: "cma-btn cma-btn-outline-teal hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
								}
							>
								{cta.label}
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Breadcrumb + social */}
			<section className="bg-cma-cream pt-[40px]">
				<div className="cma-section-container">
					<div className="flex items-center justify-between flex-wrap gap-[12px]">
						<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
							<a href="#/donate" className="text-cma-navy hover:underline">
								Donate
							</a>
							<span className="text-cma-navy text-[18px]">›</span>
							<span className="text-cma-teal-dark">{circle.title}</span>
						</div>
						<div className="flex gap-[16px] items-center shrink-0">
							<a
								href="https://www.facebook.com/childrensmuseumofatlanta"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Share on Facebook"
							>
								<Facebook className="size-5 text-white" />
							</a>
							<a
								href="https://www.instagram.com/childrensmuseumofatlanta/"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Share on Instagram"
							>
								<Instagram className="size-5 text-white" />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[32px] gap-y-[48px]">
						{event.stats.map((stat, i) => (
							<motion.div
								key={stat.label}
								className="flex flex-col gap-[10px] text-center items-center"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.16, 1, 0.3, 1],
									delay: i * 0.1,
								}}
							>
								<p className="text-cma-orange font-black text-[clamp(28px,3vw,40px)] leading-none">
									{stat.value}
								</p>
								<p className="font-extrabold text-[15px] text-cma-navy leading-[1.2]">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Schedule */}
			<section className="bg-cma-cream w-full pb-[60px] md:pb-[80px]">
				<div className="cma-section-container">
					<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px]">
						<h2 className="text-cma-navy">{event.scheduleHeading}</h2>
						<div className="flex flex-col border-t border-black/10">
							{event.scheduleItems.map((row, i) => (
								<motion.div
									key={row.time}
									className="flex items-center gap-[24px] py-[16px] border-b border-black/10"
									initial={{ opacity: 0, x: -16 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{
										duration: 0.5,
										ease: [0.16, 1, 0.3, 1],
										delay: i * 0.06,
									}}
								>
									<span className="text-cma-orange font-black text-[15px] w-[90px] shrink-0">
										{row.time}
									</span>
									<span className="text-cma-navy font-semibold">
										{row.activity}
									</span>
								</motion.div>
							))}
						</div>
						{event.scheduleNote && (
							<p className="text-cma-navy">{event.scheduleNote}</p>
						)}
					</div>
				</div>
			</section>

			{/* Sponsor tiers */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<h2 className="text-cma-navy">{event.sponsorsHeading}</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{event.sponsorTiers.map((tier, i) => (
							<motion.div
								key={tier.name}
								className={`bg-cma-cream rounded-[24px] p-8 flex flex-col gap-4 border border-black/5 ${
									tier.featured ? "md:col-span-2" : ""
								}`}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.7,
									ease: [0.16, 1, 0.3, 1],
									delay: i * 0.06,
								}}
							>
								<h3 className="text-cma-navy">{tier.name}</h3>
								<div className="flex flex-wrap gap-3">
									{tier.sponsors.map((sponsor, j) => (
										<div
											key={`${sponsor}-${j}`}
											className="flex flex-col items-center gap-2 w-[120px]"
										>
											<div
												className="w-full h-[64px] rounded-[12px] bg-black/10 flex items-center justify-center"
												aria-hidden
											>
												<span className="text-cma-navy/30 text-[11px] font-bold">
													LOGO
												</span>
											</div>
											<p className="text-cma-navy text-[12px] font-semibold text-center leading-[1.3]">
												{sponsor}
											</p>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Photo strip */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<h2 className="text-cma-navy">{event.photosHeading}</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{event.photos.map((photo, i) => (
							<img
								key={i}
								src={photo}
								alt=""
								className="w-full h-[160px] md:h-[200px] object-cover rounded-[16px]"
							/>
						))}
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					<div className="bg-cma-navy rounded-[24px] p-8 md:p-12 flex flex-col items-center text-center gap-6">
						<h2 className="text-white">{event.closingHeading}</h2>
						<p className="text-cma-blue-light max-w-[560px]">
							{event.closingBody}
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							{event.closingCtas.map((cta, i) => (
								<a
									key={cta.label}
									href={cta.href}
									className={
										i === 0
											? "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
											: "cma-btn cma-btn-outline-teal font-black"
									}
								>
									{cta.label}
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Related */}
			<section className="bg-cma-cream w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-[48px]">
					<h2 className="text-cma-navy">Other Ways to Give</h2>
					<div className="flex flex-col gap-[16px]">
						{related.map((rel, i) => (
							<motion.div
								key={rel.slug}
								className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col md:flex-row gap-[32px] md:items-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: i * 0.1,
									ease: [0.16, 1, 0.3, 1],
								}}
							>
								<img
									src={rel.cardImage}
									alt={rel.title}
									className="w-full md:w-[266px] md:h-[220px] h-[180px] rounded-[24px] object-cover shrink-0"
								/>
								<div className="flex flex-col gap-[20px] md:gap-[32px] flex-1 min-w-0 md:justify-center">
									<div className="flex flex-col gap-[8px] md:gap-[24px]">
										{rel.eyebrow && (
											<p className="text-cma-teal-dark">{rel.eyebrow}</p>
										)}
										<h3 className="text-cma-navy">{rel.title}</h3>
									</div>
									<p className="text-cma-navy line-clamp-3">
										{typeof rel.paragraphs[0] === "string"
											? rel.paragraphs[0]
											: ""}
									</p>
									<a
										href={`#/giving-circles/${rel.slug}`}
										className="cma-text-link"
									>
										Learn More{" "}
										<FontAwesomeIcon
											icon={faArrowRight}
											className="text-[13px]"
										/>
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
