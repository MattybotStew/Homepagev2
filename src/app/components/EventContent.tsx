import { faArrowRight, faCalendarPlus, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import type { EventItem } from "../data/events";

type Props = {
	event: EventItem;
	related: EventItem[];
};

function toICSDate(iso: string) {
	return iso.replace(/[-:]/g, "").replace("T", "T");
}

function downloadICS(event: EventItem) {
	const ics = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Children's Museum of Atlanta//EN",
		"BEGIN:VEVENT",
		`DTSTART:${toICSDate(event.dateStart)}`,
		`DTEND:${toICSDate(event.dateEnd)}`,
		`SUMMARY:${event.title}`,
		`DESCRIPTION:${event.description}`,
		`LOCATION:${event.location}`,
		"END:VEVENT",
		"END:VCALENDAR",
	].join("\r\n");

	const blob = new Blob([ics], { type: "text/calendar" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${event.slug}.ics`;
	a.click();
	URL.revokeObjectURL(url);
}

export default function EventContent({ event, related }: Props) {
	return (
		<section className="bg-cma-cream py-[60px] md:py-[80px]">
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			<div className="cma-section-container">
				<div className="max-w-[1024px] mx-auto flex flex-col gap-[24px]">
					{/* Breadcrumbs + Social */}
					<div className="flex items-center justify-between flex-wrap gap-[12px]">
						<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
							<a href="#/events" className="text-cma-navy hover:underline">
								Events
							</a>
							<span className="text-cma-navy text-[18px]">›</span>
							<span className="text-cma-teal-dark">{event.title}</span>
						</div>
						<div className="flex gap-[16px] items-center shrink-0">
							<a
								href="https://www.facebook.com/childrensmuseumofatlanta"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Follow us on Facebook"
							>
								<FontAwesomeIcon icon={faFacebook} className="text-white text-[18px]" />
							</a>
							<a
								href="https://www.instagram.com/childrensmuseumofatlanta/"
								target="_blank"
								rel="noopener noreferrer"
								className="cma-social-btn-filled shrink-0"
								aria-label="Follow us on Instagram"
							>
								<FontAwesomeIcon icon={faInstagram} className="text-white text-[18px]" />
							</a>
						</div>
					</div>

					{/* Article Card */}
					<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">
						{/* Hero Image */}
						<div className="relative">
							<img
								src={event.image}
								alt={event.title}
								className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover rounded-[24px]"
							/>
							<div className="absolute top-[20px] left-[23px] bg-cma-teal-dark rounded-[8px] px-[18px] py-[12px]">
								<p className="text-white text-[14px] font-bold leading-[1.5]">
									{event.badge}
								</p>
							</div>
						</div>

						{/* Category pills + Title */}
						<div className="flex flex-col gap-[16px]">
							<div className="flex flex-wrap gap-[8px]">
								{event.categories.map((cat) => (
									<span
										key={cat}
										className="text-[12px] font-bold text-cma-teal-dark bg-cma-teal-pale px-[12px] py-[6px] rounded-full"
									>
										{cat}
									</span>
								))}
								{event.separateTicket && (
									<span className="text-[12px] font-bold text-cma-orange bg-cma-orange/10 px-[12px] py-[6px] rounded-full">
										Separate Ticket Required
									</span>
								)}
							</div>
							<h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-none !tracking-[-1px] !font-extrabold">
								{event.title}
							</h1>
							{event.eventHours && (
								<p className="text-[15px] font-bold text-cma-orange flex items-center gap-[8px]">
									<FontAwesomeIcon icon={faClock} className="text-[13px]" />
									{event.eventHours}
								</p>
							)}
						</div>

						{/* Body */}
						{event.paragraphs.map((para, i) => (
							<p key={`item-${i}`} className="text-cma-navy">
								{para}
							</p>
						))}

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf"
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Buy Tickets
							</a>
							<button
								onClick={() => downloadICS(event)}
								className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white font-black flex items-center gap-2"
							>
								<FontAwesomeIcon icon={faCalendarPlus} className="text-[14px]" />
								Add to Calendar
							</button>
							<a
								href="#/events"
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								View All Events
							</a>
						</div>

						{/* Divider */}
						<div className="bg-black/15 h-px w-full" />

						{/* Related Events */}
						<div className="flex flex-col gap-[48px]">
							<p className="text-cma-navy font-extrabold text-[28px] md:text-[36px] leading-[1.1]">
								More Events
							</p>
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
											src={rel.image}
											alt={rel.title}
											className="w-full md:w-[266px] md:h-[220px] h-[180px] rounded-[24px] object-cover shrink-0"
										/>
										<div className="flex flex-col gap-[20px] md:gap-[32px] flex-1 min-w-0 md:justify-center">
											<div className="flex flex-col gap-[8px] md:gap-[16px]">
												<p className="text-cma-teal-dark text-[13px] font-bold">
													{rel.badge}
												</p>
												<p className="text-cma-navy font-extrabold text-[24px] md:text-[30px] leading-[1.3] tracking-[-0.5px] md:tracking-[-1px]">
													{rel.title}
												</p>
											</div>
											<p className="text-cma-navy line-clamp-3">
												{rel.description}
											</p>
											<a
												href={`#/events/${rel.slug}`}
												className="cma-text-link"
											>
												See Event{" "}
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
					</div>
				</div>
			</div>
		</section>
	);
}
