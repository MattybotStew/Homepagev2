import {
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ReactNode, useEffect, useState } from "react";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";
import Testimonials from "../components/Testimonials";
import imgCutCMA from "../../assets/cutCMA.png";

// ── Data ────────────────────────────────────────────────────────────────────

const RESERVATIONS_PHONE = "(404) 527-3693";
const RESERVATIONS_TEL = "4045273693";
const RESERVATIONS_EMAIL = "reservations@childrensmuseumatlanta.org";
// No dedicated booking platform URL was provided by the client — route booking
// CTAs through the contact page until a real booking link exists.
const BOOK_HREF = "#/contact";

const sections = [
	{ id: "party-information", label: "Overview" },
	{ id: "schedule-price", label: "Schedule & Price" },
	{ id: "booking", label: "Booking Your Party" },
	{ id: "party-room-capacity", label: "Party Room & Capacity" },
	{ id: "food-decorations", label: "Food & Decorations" },
	{ id: "policies", label: "Policies" },
	{ id: "faqs", label: "FAQs" },
];

type FaqItem = { question: string; answer: ReactNode };

const faqs: FaqItem[] = [
	{
		question: "What's included in a party?",
		answer: (
			<>
				<p className="text-cma-navy">
					Museum parties include free admission for up to 20 guests and 1 hour
					in a private party room.
				</p>
				<p className="text-cma-navy">
					The party room has tables and chairs and is decorated for a
					celebration, including colorful coverings for the tables.
				</p>
			</>
		),
	},
	{
		question: "What should I bring?",
		answer: (
			<>
				<p className="text-cma-navy">
					You may bring gifts for the birthday child, your own themed
					tablecloths, cake, cupcakes, and prepackaged individual snacks and
					drinks to your party.
				</p>
				<p className="text-cma-navy">
					You should also bring any other supplies you'll need, including a cake
					cutter, candles, lighter, plates, napkins, etc.
				</p>
			</>
		),
	},
	{
		question: "What shouldn't I bring?",
		answer: (
			<>
				<p className="text-cma-navy">Do not bring:</p>
				<ul className="flex flex-col gap-[6px] list-disc pl-5">
					<li className="text-cma-navy">
						Food deliveries, platters, or food items requiring refrigeration
					</li>
					<li className="text-cma-navy">Balloons of any kind</li>
					<li className="text-cma-navy">
						Messy or hazardous items including, but not limited to, glitter,
						confetti, piñatas
					</li>
					<li className="text-cma-navy">
						Glass or ceramic (breakable) items that could become hazardous
					</li>
					<li className="text-cma-navy">
						Decorations (aside from tablecloths), including table decor,
						backdrops, and items that hang from walls or ceilings
					</li>
					<li className="text-cma-navy">
						Heating devices or open flames (aside from cake candles)
					</li>
					<li className="text-cma-navy">
						Outside entertainment/vendors, such as performers, characters,
						professional photographers, or face painters
					</li>
					<li className="text-cma-navy">Alcohol</li>
				</ul>
			</>
		),
	},
	{
		question: "When should I book my party?",
		answer: (
			<p className="text-cma-navy">
				Book your party at least 14 days before your party date. We recommend
				making your reservation 4–6 weeks in advance.
			</p>
		),
	},
	{
		question: "Can children be dropped off at the party?",
		answer: (
			<p className="text-cma-navy">
				No. All children must be accompanied by an adult at all times.
			</p>
		),
	},
	{
		question: "I'm a Museum Member. Are there any perks?",
		answer: (
			<p className="text-cma-navy">
				Thank you for being a member! Yes, members get $100 off their party.
			</p>
		),
	},
	{
		question: "Can Museum Members come to my party for free?",
		answer: (
			<p className="text-cma-navy">
				Museum Membership provides one year of free general admission.
				Membership is not valid toward party admission.
			</p>
		),
	},
	{
		question: "If I cancel, will I be refunded?",
		answer: (
			<>
				<p className="text-cma-navy">Parties are not fully refundable.</p>
				<p className="text-cma-navy">
					Cancellations made more than 4 weeks in advance, via email, will be
					issued a 50% refund. All other cancellations will not be refunded.
				</p>
			</>
		),
	},
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 140;
	window.scrollTo({ top, behavior: "smooth" });
}

function Divider() {
	return <div className="bg-black/10 h-px w-full" />;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function PartiesPage() {
	const [activeSection, setActiveSection] = useState("party-information");
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	useEffect(() => {
		const observers = sections.map((section) => {
			const el = document.getElementById(section.id);
			if (!el) return null;
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(section.id);
				},
				{ rootMargin: "-20% 0px -60% 0px", threshold: 0 },
			);
			observer.observe(el);
			return observer;
		});
		return () => observers.forEach((obs) => obs?.disconnect());
	}, []);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			{/* Hero */}
			<section className="relative overflow-hidden bg-cma-navy">
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[80px] md:py-[120px] relative flex flex-col items-center text-center">
					<p className="cma-eyebrow text-cma-teal mb-[16px]">Plan Your Visit</p>
					<h1 className="text-white mb-[16px]">Parties</h1>
					<p className="text-white/75 max-w-[600px]">
						A party at Children's Museum of Atlanta is the perfect way to
						celebrate your child in a fun & memorable way. Bring friends and
						family together for a celebration filled with play, discovery and
						hands-on fun!
					</p>
				</div>
			</section>

			{/* Party Information */}
			<section className="bg-cma-cream py-[60px] md:py-[80px]">
				<div className="cma-section-container">
					{/* Mobile pill nav */}
					<div className="lg:hidden mb-[24px]">
						<div className="cma-pill-scroll">
							{sections.map((s) => (
								<button
									key={s.id}
									onClick={() => scrollToSection(s.id)}
									className={`cma-nav-pill ${activeSection === s.id ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
								>
									{s.label}
								</button>
							))}
						</div>
					</div>

					<div className="flex gap-[40px] xl:gap-[56px] items-start">
						{/* Sticky sidebar */}
						<aside className="hidden lg:flex flex-col gap-[20px] w-[210px] shrink-0 sticky top-[140px] self-start">
							<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] p-[20px] flex flex-col gap-[4px]">
								<p className="cma-eyebrow text-cma-navy/80 text-[10px] mb-[12px]">Jump to</p>
								{sections.map((s) => (
									<button
										key={s.id}
										onClick={() => scrollToSection(s.id)}
										className={`flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left ${
											activeSection === s.id
												? "bg-cma-navy/5 text-cma-navy"
												: "text-cma-navy/80 hover:text-cma-navy hover:bg-cma-navy/5"
										}`}
									>
										<span className={`w-[6px] h-[6px] rounded-full shrink-0 transition-colors ${activeSection === s.id ? "bg-cma-orange" : "bg-cma-navy/20"}`} />
										{s.label}
									</button>
								))}
							</div>

							<div className="bg-cma-navy rounded-[20px] p-[20px] flex flex-col gap-[12px]">
								<p className="font-extrabold text-[14px] text-white leading-[1.3]">Ready to Celebrate?</p>
								<a href={BOOK_HREF} className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black text-[13px] !py-[10px] !px-[16px]">
									Book Your Party
								</a>
								<p className="text-white/60 text-[12px]">Or call our Reservations Team</p>
								<a href={`tel:${RESERVATIONS_TEL}`} className="font-extrabold text-[18px] text-cma-orange leading-none hover:text-cma-orange-dark transition-colors">
									{RESERVATIONS_PHONE}
								</a>
							</div>
						</aside>

						{/* Main content */}
						<div className="flex-1 min-w-0">
							<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">

								{/* ── Overview ── */}
								<div id="party-information" className="flex flex-col gap-[16px]">
									<p className="cma-eyebrow text-cma-teal-dark">Party Information</p>
									<h2 className="text-cma-navy">Party and Play</h2>
									<p className="text-cma-navy">
										Parties at the Museum are low-hassle so that you and your
										guests can focus on having fun celebrating and playing
										together! Recommended for children 2–8 years old.
									</p>
									<p className="text-cma-navy">
										Museum parties include free admission for up to 20 guests and
										1 hour in a private party room.
									</p>
									<div className="flex flex-col sm:flex-row gap-[12px] pt-[4px]">
										<a href={BOOK_HREF} className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black">
											Book Your Party
										</a>
										<a href={`tel:${RESERVATIONS_TEL}`} className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black">
											Request a Call
										</a>
									</div>
								</div>

								<Divider />

								{/* ── Schedule & Price ── */}
								<div id="schedule-price" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Schedule & Price</h2>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Schedule</h3>
										<p className="text-cma-navy">
											Parties are available Saturday and Sunday in the morning
											and afternoon.
										</p>
									</div>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Price</h3>
										<p className="text-cma-navy">
											Parties are $350 + tax for Museum Members and $450 + tax
											for non-members.
										</p>
										<p className="text-cma-navy">
											Museum parties include free admission for up to 20 guests.
											You may add up to 10 additional guests for an additional
											fee per guest.
										</p>
										<p className="text-cma-navy font-bold">
											Full payment is due at time of booking.
										</p>
									</div>
								</div>

								<Divider />

								{/* ── Booking Your Party ── */}
								<div id="booking" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Booking Your Party</h2>
									<p className="text-cma-navy">
										Book your party by selecting your desired date and party
										time. Dates are subject to availability.
									</p>
									<p className="text-cma-navy">
										The Party Agreement and Guest List Form will be sent via
										email.
									</p>
									<p className="text-cma-navy">
										Members must be signed in using the email associated with
										their membership to receive their discount.
									</p>
									<p className="text-cma-navy">
										For further assistance, call our Reservations Team at{" "}
										<a href={`tel:${RESERVATIONS_TEL}`} className="cma-text-link">{RESERVATIONS_PHONE}</a>{" "}
										or email{" "}
										<a href={`mailto:${RESERVATIONS_EMAIL}`} className="cma-text-link">{RESERVATIONS_EMAIL}</a>.
									</p>
									<p className="text-cma-navy">
										Reservations are required 14 days prior to the party date. We
										recommend making your reservation 4–6 weeks in advance. Full
										payment is due at the time of booking. See our cancellation
										policy for refund information.
									</p>
								</div>

								<Divider />

								{/* ── Party Room & Capacity ── */}
								<div id="party-room-capacity" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Party Room & Capacity</h2>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Party Room</h3>
										<p className="text-cma-navy">
											One hour in a private party room is included with your
											booking. The room is equipped with tables and chairs. The
											tables are provided with colorful coverings.
										</p>
										<p className="text-cma-navy">
											The host family is welcome to bring themed tablecloths.
											Additional decorations are not permitted.
										</p>
										<p className="text-cma-navy">
											The party room will be opened 15 minutes prior to the party
											time for the host family to set up.
										</p>
									</div>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Capacity</h3>
										<p className="text-cma-navy">
											Museum parties include free admission for up to 20 guests,
											including the party child and immediate family. Up to 10
											additional guests can be added at an additional fee per
											guest for a maximum of 30 total people.
										</p>
										<p className="text-cma-navy">
											Party rooms have a maximum capacity of 30 guests. If you
											wish to host a party with more than 30 guests, you may book
											a second party room for an additional fee.
										</p>
										<p className="text-cma-navy">
											Babies 11 months and younger are free and do not count
											towards the total number of guests.
										</p>
									</div>
								</div>

								<Divider />

								{/* ── Food & Decorations ── */}
								<div id="food-decorations" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Food & Decorations</h2>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Food</h3>
										<p className="text-cma-navy">
											You may bring cake, cupcakes, and prepackaged individual
											snacks and drinks to your party. Examples include boxed
											meals, prepackaged bags of chips, cookies, pretzels, go-go
											squeeze, goldfish, juice boxes and bottled water.
										</p>
										<p className="text-cma-navy">
											No other food is permitted on site. Food deliveries,
											platters, and items requiring refrigeration or a freezer
											are not permitted.
										</p>
									</div>
									<div className="flex flex-col gap-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Decorations</h3>
										<p className="text-cma-navy">
											Your party room is decorated for a celebration. You are
											welcome to bring your own themed tablecloths.
										</p>
										<p className="text-cma-navy">
											Additional decorations, including table decor and items
											that hang from the walls and ceiling, are not allowed. Due
											to choking hazard and latex allergies, all balloons are
											prohibited.
										</p>
									</div>
								</div>

								<Divider />

								{/* ── Policies ── */}
								<div id="policies" className="flex flex-col gap-[16px]">
									<h2 className="text-cma-navy">Cancellation & Refund Policy</h2>
									<p className="text-cma-navy">Parties are not fully refundable.</p>
									<p className="text-cma-navy">
										Cancellations made more than 4 weeks in advance, via email,
										will be issued a 50% refund. All other cancellations forfeit
										all monies paid.
									</p>
									<div className="flex flex-col gap-[8px] pt-[8px]">
										<h3 className="text-cma-navy !text-[16px] font-bold">Security Policy</h3>
										<p className="text-cma-navy">
											Child drop-offs are not permitted. Children must have an
											adult with them at all times throughout the Museum.
										</p>
									</div>
								</div>

								<Divider />

								{/* ── FAQs ── */}
								<div id="faqs" className="flex flex-col gap-[20px]">
									<h2 className="text-cma-navy">Party FAQs</h2>
									<div className="flex flex-col gap-[12px]">
										{faqs.map((faq, i) => {
											const isOpen = openFaq === i;
											return (
												<div
													key={faq.question}
													className={`rounded-[20px] border-2 border-black/5 overflow-hidden transition-colors ${isOpen ? "bg-cma-teal-pale" : "bg-white"}`}
												>
													<button
														onClick={() => setOpenFaq(isOpen ? null : i)}
														className="w-full flex items-center justify-between px-[24px] py-[20px] text-left gap-[16px]"
														aria-expanded={isOpen}
													>
														<span className={`text-cma-navy text-[15px] leading-[1.3] ${isOpen ? "font-black" : "font-semibold"}`}>
															{faq.question}
														</span>
														<FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-cma-orange text-[12px] shrink-0" />
													</button>
													{isOpen && (
														<div className="px-[24px] pb-[20px] flex flex-col gap-[8px]">
															{faq.answer}
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Museum Rental */}
			<PYVCallout
				eyebrow="Rent the Museum"
				heading="Looking for a more exclusive experience?"
				body="The Museum is available for private events. With over 16,000 square feet of interactive exhibits, we're sure to make a memorable impression on your guests. Rental options are available on weekdays, weekends, and after hours."
				cta={{ label: "Explore Private Events", href: "#/contact" }}
				secondaryCta={{ label: "Book Your Private Event", href: "#/contact" }}
				bg="bg-cma-navy"
				showCountdown={false}
				showRightCta={false}
			/>

			<Testimonials heading="What Families Are Saying" />

			{/* Closing CTA */}
			<PYVCallout
				eyebrow="Celebrate With Us"
				heading="Ready to Plan the Perfect Party?"
				body="Reserve your date and let us handle the rest, so you can focus on celebrating and playing together. Reservations are required at least 14 days in advance."
				cta={{ label: "Book Your Party", href: BOOK_HREF }}
				bg="bg-cma-teal-dark"
				showCountdown={false}
				showRightCta={true}
			/>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
