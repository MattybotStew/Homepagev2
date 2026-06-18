import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import imgPhoto0 from "../../assets/educators-img-0.webp";
import imgPhoto1 from "../../assets/educators-img-1.webp";
import imgPhoto2 from "../../assets/educators-img-2.webp";
import imgPhoto3 from "../../assets/educators-img-3.webp";
import type { Program } from "../data/programs";

type Props = {
	related: Program[];
};

const stats = [
	{ value: "14th", label: "Annual Tournament" },
	{ value: "$430K+", label: "Raised in 2026" },
	{ value: "30", label: "Foursomes" },
	{ value: "Aug 17, 2026", label: "Peachtree Golf Club" },
];

const schedule = [
	{ time: "8:30 am", activity: "Registration & Breakfast" },
	{ time: "9:00 am", activity: "Practice Range & Putting Green Open" },
	{ time: "9:45 am", activity: "Welcome Remarks & Player Instruction" },
	{ time: "10:00 am", activity: "Shotgun Start" },
	{ time: "3:30 pm", activity: "Awards Ceremony & Reception" },
];

const sponsorTiers = [
	{ name: "Presenting", featured: true, sponsors: ["PNC Bank"] },
	{ name: "Albatross", featured: false, sponsors: ["Mellow Mushroom"] },
	{ name: "Golf Cart", featured: false, sponsors: ["Osprey"] },
	{
		name: "Early Birdie",
		featured: false,
		sponsors: [
			"Anonymous",
			"Christopher Childs",
			"Coca-Cola Company",
			"Georgia Power",
			"Hawkins Parnell Young & Young LLP",
			"JVP Management",
			"KSM",
			"Lazlo 326 Corp",
			"Andy Sanford/Ameriprise",
			"Southern Company",
			"Stanton Barton/McBrayer/Mozley Finlayson Loggins",
			"Tokio Marine HCC",
		],
	},
];

const photos = [imgPhoto0, imgPhoto1, imgPhoto2, imgPhoto3];

const WAITLIST_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Waitlist";
const SPONSOR_HREF =
	"mailto:ebrooks@childrensmuseumatlanta.org?subject=Tournament%20For%20Play%20Sponsorship";

export default function TournamentForPlayContent({ related }: Props) {
	return (
		<>
			{/* Hero */}
			<section className="relative w-full bg-cma-navy overflow-hidden flex flex-col items-center justify-center py-[80px] md:py-[120px]">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container relative z-[1] flex flex-col items-center gap-8 text-center max-w-[800px] mx-auto">
					<p className="cma-eyebrow text-cma-teal">Annual Golf Fundraiser</p>
					<h1 className="text-white">Tournament For Play</h1>
					<p className="text-cma-blue-light font-semibold text-[clamp(16px,1.67vw,24px)] leading-[1.4] max-w-[620px]">
						The 14th Annual Tournament for Play tees off at Peachtree Golf
						Club on August 17, 2026. Foursomes are sold out — join the
						waitlist or ask about non-player sponsorship.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<a
							href={WAITLIST_HREF}
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Join Waitlist
						</a>
						<a
							href={SPONSOR_HREF}
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							Sponsorship Inquiry
						</a>
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
							<span className="text-cma-teal-dark">Tournament For Play</span>
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
						{stats.map((stat, i) => (
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
						<h2 className="text-cma-navy">Schedule</h2>
						<div className="flex flex-col border-t border-black/10">
							{schedule.map((row, i) => (
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
						<p className="text-cma-navy">
							Player bundles include a Par 3 Poker game card and 2
							mulligans — the best poker hand wins $500.
						</p>
					</div>
				</div>
			</section>

			{/* Sponsor tiers */}
			<section className="bg-white w-full py-[60px] md:py-[80px]">
				<div className="cma-section-container flex flex-col gap-8">
					<h2 className="text-cma-navy">Sponsors</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{sponsorTiers.map((tier, i) => (
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
									{tier.sponsors.map((sponsor) => (
										<div
											key={sponsor}
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
					<h2 className="text-cma-navy">From Past Tournaments</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{photos.map((photo, i) => (
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
		</>
	);
}
