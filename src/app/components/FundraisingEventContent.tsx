import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
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
			<section className="relative w-full flex flex-col px-5 sm:px-10 md:px-[80px] overflow-hidden">
				<div
					className="absolute inset-0 overflow-hidden pointer-events-none bg-black"
					aria-hidden
				>
					<img
						src={circle.heroImage}
						alt=""
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-cma-hero-overlay" />
				</div>

				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

				<div className="relative flex-1 flex items-center py-[60px] md:py-[80px] lg:py-[100px]">
					<div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-[64px]">
						{/* Left: text */}
						<div className="flex flex-col gap-5 md:gap-6 text-white max-w-[560px]">
							<motion.p
								className="cma-eyebrow opacity-80"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
							>
								{circle.eyebrow}
							</motion.p>

							<motion.h1
								className="font-extrabold text-white leading-[0.95]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
							>
								{circle.title}
							</motion.h1>

							<motion.p
								className="font-semibold text-[clamp(16px,2.1vw,24px)] text-cma-blue-light leading-[1.3] tracking-[-0.5px] max-w-[480px]"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
							>
								{event.heroSubtitle}
							</motion.p>

							<motion.div
								className="flex flex-col sm:flex-row gap-3"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
							>
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
							</motion.div>
						</div>

						{/* Right: stat cards */}
						{event.stats && (
							<div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-3">
								{event.stats.map((stat, i) => (
									<motion.div
										key={stat.label}
										className={`rounded-[16px] px-5 py-4 flex flex-col gap-1 ${
											i % 2 === 0
												? "bg-cma-orange"
												: "bg-cma-navy border border-white/10"
										}`}
										initial={{ opacity: 0, x: 24 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.8,
											ease: [0.16, 1, 0.3, 1],
											delay: 0.3 + i * 0.1,
										}}
									>
										<p className="text-white font-black text-[clamp(22px,2.5vw,30px)] leading-none">
											{stat.value}
										</p>
										<p className="text-white/80 text-[13px] font-semibold">
											{stat.label}
										</p>
									</motion.div>
								))}
							</div>
						)}
					</div>
				</div>

				{/* Bottom spacing */}
				<div className="shrink-0 h-[40px] md:h-[60px]" />
			</section>

			{/* Breadcrumb + social */}
			<section className="bg-cma-cream py-[40px]">
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

			{/* Schedule / Award / Leadership */}
			{(event.scheduleItems || event.award || event.leadership) && (
				<section className="bg-cma-cream w-full pb-[60px] md:pb-[80px]">
					<div className="cma-section-container flex flex-col gap-[32px]">
						{event.scheduleItems && (
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px]">
								<h2 className="text-cma-navy text-center">{event.scheduleHeading}</h2>
								<div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[60px] items-start">
									<div className="flex flex-col border-t border-black/10 flex-1 min-w-0 w-full">
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
									{event.scheduleImage && (
										<img
											src={event.scheduleImage}
											alt=""
											className="w-full max-w-[291px] lg:w-[291px] h-auto object-cover shrink-0"
										/>
									)}
								</div>
								{event.scheduleNote && (
									<p className="text-cma-navy">{event.scheduleNote}</p>
								)}
							</div>
						)}

						{event.award && (
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] items-center">
								<div className="flex flex-col gap-[16px] flex-1 min-w-0">
									<h2 className="text-cma-navy text-center">{event.award.heading}</h2>
									<div className="flex flex-col gap-[4px]">
										<p className="text-cma-orange font-black text-[24px] leading-[1.2]">
											{event.award.recipientName}
										</p>
										<p className="text-cma-teal-dark font-bold text-[13px]">
											{event.award.recipientDate}
										</p>
									</div>
									<p className="text-cma-navy">{event.award.recipientBio}</p>
								</div>
								{event.award.image && (
									<div className="bg-cma-teal-pale rounded-[20px] p-[20px] shrink-0 w-full lg:w-auto flex items-center justify-center">
										<img
											src={event.award.image}
											alt=""
											className="w-full lg:w-[344px] h-auto object-cover"
										/>
									</div>
								)}
							</div>
						)}

						{event.leadership && (
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[24px]">
								<h2 className="text-cma-navy text-center">{event.leadership.heading}</h2>
								<div className="flex flex-col gap-[6px]">
									<p className="font-extrabold text-cma-navy">
										{event.leadership.chairsLabel}
									</p>
									<p className="text-cma-navy">
										{event.leadership.chairs.join(" · ")}
									</p>
								</div>
								<div className="flex flex-col gap-[6px]">
									<p className="font-extrabold text-cma-navy">
										{event.leadership.committeeLabel}
									</p>
									<p className="text-cma-navy">
										{event.leadership.committee.join(", ")}
									</p>
								</div>
							</div>
						)}
					</div>
				</section>
			)}

			{/* Sponsor tiers */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<div className={event.sponsorsImage ? "flex flex-col lg:flex-row gap-[40px] items-center" : ""}>
						<div className="flex flex-col gap-8 flex-1 min-w-0">
							<h2 className="text-cma-navy">{event.sponsorsHeading}</h2>
							{event.sponsorsBody && (
								<p className="text-cma-navy max-w-[760px]">{event.sponsorsBody}</p>
							)}
							{event.resources && (
								<div className="flex flex-wrap items-center gap-[20px]">
									{event.resources.map((resource) => (
										<a
											key={resource.label}
											href={resource.href}
											target="_blank"
											rel="noopener noreferrer"
											className="cma-btn cma-btn-outline-teal font-black"
										>
											{resource.label}
											<FontAwesomeIcon icon={faDownload} className="text-[13px]" />
										</a>
									))}
								</div>
							)}
						</div>
						{event.sponsorsImage && (
							<img
								src={event.sponsorsImage}
								alt=""
								className="w-full lg:w-[280px] shrink-0 rounded-[24px] object-cover"
							/>
						)}
					</div>
					{event.sponsorTiers && (
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
												className={`flex flex-col items-center gap-2 ${tier.featured ? "w-[220px]" : "w-[120px]"}`}
											>
												<div
													className={`w-full rounded-[12px] bg-black/10 flex items-center justify-center ${tier.featured ? "h-[140px]" : "h-[64px]"}`}
													aria-hidden
												>
													<span className={`text-cma-navy/30 font-bold ${tier.featured ? "text-[18px]" : "text-[11px]"}`}>
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
					)}
				</div>
			</section>

			{/* Photo strip */}
			<section className="bg-cma-navy w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8 items-center">
					<h2 className="text-white text-center">{event.photosHeading}</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1200px] mx-auto place-items-center">
						{event.photos.map((photo, i) => (
							<img
								key={i}
								src={photo}
								alt=""
								className="w-full aspect-[4/3] object-cover rounded-[16px]"
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
					<h2 className="text-cma-navy text-center">Other Ways to Give</h2>
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
