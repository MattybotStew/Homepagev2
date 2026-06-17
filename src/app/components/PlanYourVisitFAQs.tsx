import {
	faArrowRight,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import imgWaveWhite from "../../assets/wave-white.svg";
import imgFaqPhoto from "../../assets/pyv-faq-photo.webp";

function FaqBullet({ children }: { children: ReactNode }) {
	return (
		<li className="flex items-start gap-[10px]">
			<span className="w-[6px] h-[6px] rounded-full bg-cma-teal-dark mt-[8px] shrink-0" />
			<span className="text-cma-navy">{children}</span>
		</li>
	);
}

type FaqEntry =
	| { type: "subheading"; label: string }
	| { question: string; answer: ReactNode };

const faqs: FaqEntry[] = [
	{ type: "subheading", label: "Planning Your Experience" },
	{
		question: "What ages enjoy playing at the Museum?",
		answer: (
			<p className="text-cma-navy">
				While folks of all ages can enjoy the Museum, our exhibits and
				activities are designed for 2–8 year olds.
			</p>
		),
	},
	{
		question: "When is the Museum less crowded?",
		answer: (
			<>
				<p className="text-cma-navy">
					Weekday afternoons during the school year tend to be the least
					crowded. Field trip groups leave by 12:30 pm.
				</p>
				<p className="text-cma-navy">
					Members-only hours take place weekdays from 9:00–10:00 am during the
					school year.
				</p>
				<p className="text-cma-navy">
					Our sensory-friendly quiet room is available throughout your visit
					for guests who may need a break from stimulation.
				</p>
			</>
		),
	},
	{
		question: "What should I leave at home?",
		answer: (
			<>
				<p className="text-cma-navy">We do not permit the following items:</p>
				<ul className="flex flex-col gap-[6px]">
					<FaqBullet>Alcohol</FaqBullet>
					<FaqBullet>Balloons</FaqBullet>
					<FaqBullet>Bicycles, scooters, etc.</FaqBullet>
					<FaqBullet>Cigarettes/e-cigarettes</FaqBullet>
					<FaqBullet>Coolers</FaqBullet>
					<FaqBullet>Controlled substances</FaqBullet>
					<FaqBullet>Costume characters</FaqBullet>
					<FaqBullet>Weapons</FaqBullet>
				</ul>
				<p className="text-cma-navy mt-[12px]">
					The following items are permitted in party rooms only:
				</p>
				<ul className="flex flex-col gap-[6px]">
					<FaqBullet>Cake/cupcakes</FaqBullet>
					<FaqBullet>Gifts</FaqBullet>
					<FaqBullet>Professional photographers</FaqBullet>
				</ul>
			</>
		),
	},
	{ type: "subheading", label: "Tickets & Reservations" },
	{
		question: "What's included with admission?",
		answer: (
			<>
				<p className="text-cma-navy">Your admission ticket includes:</p>
				<ul className="flex flex-col gap-[6px]">
					<FaqBullet>All-day access to 7 hands-on exhibits</FaqBullet>
					<FaqBullet>
						Daily programs and activities, including storytimes, art
						projects, and science demonstrations
					</FaqBullet>
					<FaqBullet>Same-day re-entry (capacity permitting)</FaqBullet>
					<FaqBullet>Access to stroller parking and family restrooms</FaqBullet>
					<FaqBullet>Access to our sensory-friendly quiet room</FaqBullet>
					<FaqBullet>Access to Snack Stop seating areas</FaqBullet>
				</ul>
				<p className="text-cma-navy mt-[12px]">Admission does not include:</p>
				<ul className="flex flex-col gap-[6px]">
					<FaqBullet>Private party rooms or birthday party packages</FaqBullet>
					<FaqBullet>Museum Store purchases</FaqBullet>
					<FaqBullet>Food and beverages</FaqBullet>
					<FaqBullet>Member-exclusive events and activities</FaqBullet>
				</ul>
			</>
		),
	},
	{
		question: "Can I purchase tickets at the Museum?",
		answer: (
			<p className="text-cma-navy">
				Yes, tickets may be purchased upon arrival if space is available.
				Advance online reservations are strongly encouraged during weekends,
				holidays, and school breaks, as entry times may sell out.
			</p>
		),
	},
	{
		question: "Do babies need tickets?",
		answer: (
			<p className="text-cma-navy">
				Children 11 months and younger receive free admission but still need
				a ticket to enter the Museum. You'll see an option to add $0.00 Baby
				tickets to your order during booking.
			</p>
		),
	},
	{
		question: "How long can we stay?",
		answer: (
			<p className="text-cma-navy">
				Most families spend 1–2 hours exploring the Museum, but your ticket is
				valid until closing time. Stay awhile, take a break, and enjoy the day
				at your family's pace.
			</p>
		),
	},
	{
		question: "What is an arrival window?",
		answer: (
			<>
				<p className="text-cma-navy">
					When reserving tickets online, you'll select a one-hour arrival
					window for entry. Guests may arrive at any time during their
					selected window and are welcome to stay and play as long as they
					like until the Museum closes.
				</p>
				<p className="text-cma-navy">
					Arrival windows help us manage capacity and create the best possible
					experience for all guests.
				</p>
				<p className="text-cma-navy">
					Guests who arrive earlier or later than their selected window may be
					asked to wait until space becomes available.
				</p>
			</>
		),
	},
	{
		question: "Can I leave and re-enter the Museum?",
		answer: (
			<>
				<p className="text-cma-navy">
					Your ticket is valid for the entire day after you enter the Museum.
					Guests may leave and return the same day, capacity permitting.
				</p>
				<p className="text-cma-navy">
					Before exiting, please stop by Security for a hand stamp. Re-entry
					may not be permitted without the proper stamp.
				</p>
				<p className="text-cma-navy">
					If the Museum reaches capacity, returning guests may be asked to
					wait until additional space becomes available.
				</p>
			</>
		),
	},
	{
		question: "Can I refund or reschedule my tickets?",
		answer: (
			<>
				<p className="text-cma-navy">
					Plans change — we get it! Tickets are non-refundable, but guests may
					reschedule for another available date or arrival window based on
					capacity.
				</p>
				<p className="text-cma-navy">
					Event and group tickets are non-refundable and cannot be
					rescheduled.
				</p>
			</>
		),
	},
	{ type: "subheading", label: "Special Ticket Types" },
	{
		question: "How do member tickets work?",
		answer: (
			<>
				<p className="text-cma-navy">
					Museum Members receive free admission based on their membership
					level. Members are encouraged to reserve tickets online during busy
					times, including weekends, holidays, and school breaks. Walk-up
					admission is available for Members as capacity permits.
				</p>
				<p className="text-cma-navy">
					To reserve tickets or access member discounts, log in using the
					email address associated with your membership account. Your member
					tickets and discounts will automatically appear during checkout.
				</p>
			</>
		),
	},
	{
		question: "I'm an ACM member. How do I use my reciprocal benefits?",
		answer: (
			<>
				<p className="text-cma-navy">
					If you are a member at another children's museum with{" "}
					<a
						href="https://findachildrensmuseum.org/reciprocal-network/"
						target="_blank"
						rel="noopener noreferrer"
						className="cma-text-link"
					>
						Association of Children's Museums (ACM) reciprocal benefits
					</a>
					, welcome to Atlanta! You are eligible to receive 50% off general
					admission for up to six people. A cardholding member must be
					present. To receive this discount, use promo code{" "}
					<strong>ACMTIX</strong> at checkout. A valid reciprocal membership
					card and picture ID will be required upon arrival.
				</p>
			</>
		),
	},
	{
		question: "How do SNAP EBT tickets work?",
		answer: (
			<>
				<p className="text-cma-navy">
					Through Museums for All, those receiving food assistance (SNAP
					benefits) can gain free or reduced admission to more than 1,000
					museums throughout the United States. At Children's Museum of
					Atlanta, SNAP EBT cardholders receive $5 general admission tickets
					for up to 4 individuals.
				</p>
				<p className="text-cma-navy">
					You must show your SNAP EBT card and a matching picture ID at time
					of entry. The SNAP EBT cardholder must be one of the adults visiting
					the Museum. Copies or images of cards are not valid.
				</p>
				<p className="text-cma-navy">
					The Museum accepts SNAP EBT cards from Georgia and other states. At
					this time, we do not accept P-EBT, WIC, or any other federal or
					state programs toward this discount.
				</p>
			</>
		),
	},
	{
		question: "Do you offer group discounts?",
		answer: (
			<>
				<p className="text-cma-navy">
					Yes! Discounted group tickets are available for non-school groups
					including family reunions, playdates, church groups, military
					groups, tour companies, and convention attendees.
				</p>
				<p className="text-cma-navy mt-[12px]">Group ticket requirements:</p>
				<ul className="flex flex-col gap-[6px]">
					<FaqBullet>
						11–30 guests (excluding children 11 months and younger)
					</FaqBullet>
					<FaqBullet>$2 off each ticket</FaqBullet>
					<FaqBullet>Reservations required at least one week in advance</FaqBullet>
					<FaqBullet>Full payment due at booking</FaqBullet>
					<FaqBullet>Group tickets are non-refundable</FaqBullet>
					<FaqBullet>Groups must arrive together for entry</FaqBullet>
				</ul>
				<p className="text-cma-navy mt-[12px]">
					Call Reservations at (404) 527-3693 to book your group visit.
				</p>
			</>
		),
	},
];

export default function PlanYourVisitFAQs({
	showWave = false,
}: {
	showWave?: boolean;
}) {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section
			id="faqs"
			className="bg-white w-full py-[80px] md:py-[120px] relative overflow-hidden"
		>
			<div className="cma-section-container flex flex-col gap-12 items-center">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Plan Your Visit FAQs
				</motion.h2>

				<div className="flex flex-col lg:flex-row gap-8 items-start w-full">
					{/* Accordion */}
					<motion.div
						className="flex-1 min-w-0 flex flex-col gap-[10px]"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					>
						{faqs.map((faq, i) =>
							"type" in faq && faq.type === "subheading" ? (
								<h3
									key={`sub-${i}`}
									className="text-cma-navy font-extrabold text-[clamp(18px,1.4vw,22px)] mt-[14px] mb-[2px] first:mt-0"
								>
									{faq.label}
								</h3>
							) : (
								(() => {
									const isOpen = open === i;
									return (
										<div
											key={`item-${i}`}
											className={`border-2 border-black/5 rounded-[24px] overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
										>
											<button
												className="w-full flex items-center justify-between px-6 py-8 text-left gap-4"
												onClick={() => setOpen(isOpen ? null : i)}
												aria-expanded={isOpen}
											>
												<h3
													className={`${isOpen ? "font-black" : "font-semibold"} text-cma-navy`}
												>
													{faq.question}
												</h3>
												<FontAwesomeIcon
													icon={isOpen ? faMinus : faPlus}
													className="shrink-0 text-cma-orange text-[12px]"
												/>
											</button>
											{isOpen && (
												<div className="px-6 pb-8 flex flex-col gap-2">
													{faq.answer}
												</div>
											)}
										</div>
									);
								})()
							),
						)}
					</motion.div>

					{/* Sidebar card */}
					<motion.div
						className="w-full lg:w-[380px] shrink-0 bg-white border-2 border-black/5 rounded-[24px] overflow-hidden"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
					>
						<div className="h-[266px] overflow-hidden rounded-t-[20px]">
							<img
								src={imgFaqPhoto}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="p-6 flex flex-col gap-6">
							<h3 className="text-cma-navy">Still have questions?</h3>
							<p className="text-cma-navy">
								Got questions? We've got answers! Find everything you need to
								know about visiting our museum.
							</p>
							<a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cma-text-link">
								Contact Us{" "}
								<FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			{showWave && (
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
			)}
		</section>
	);
}
