import { motion } from "motion/react";

const giftCards = [
	{
		bg: "bg-cma-cream",
		badge: {
			label: "Perfect Gift",
			textColor: "text-cma-orange-dark",
			badgeBg: "bg-white",
		},
		heading: "Gift Certificates",
		headingColor: "text-cma-navy",
		body: "Give the gift of choice! Gift certificates can be purchased over the phone at 404-527-3693 or in-person.",
		bodyColor: "text-cma-navy",
		cta: {
			label: "Call for a Gift Certificate",
			href: "#gift-cert",
			style: "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark",
		},
	},
	{
		bg: "bg-cma-teal-dark",
		badge: {
			label: "Best Value",
			textColor: "text-cma-orange-dark",
			badgeBg: "bg-cma-cream",
		},
		heading: "Gift Memberships",
		headingColor: "text-white",
		body: "Give a family unlimited wonder and fun when you gift a Museum membership.",
		bodyColor: "text-white",
		cta: {
			label: "Gift a Membership",
			href: "#gift-membership",
			style:
				"cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-white hover:text-white",
		},
	},
];

const navyCard = {
	bg: "bg-cma-navy",
	badge: {
		label: "Book Online",
		textColor: "text-cma-navy",
		badgeBg: "bg-cma-orange",
	},
	heading: "Group Visits",
	headingColor: "text-white",
	body: "Planning a group outing? We offer special rates for groups of 15 or more. Contact our reservations team to book your visit.",
	bodyColor: "text-white",
	cta: {
		label: "Book a Group Visit",
		href: "#/book-your-visit",
		style: "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark",
	},
};

export default function MuseumStoreGifts({
	showNavyCard = false,
}: {
	showNavyCard?: boolean;
}) {
	const cards = showNavyCard ? [...giftCards, navyCard] : giftCards;
	return (
		<section className="bg-white w-full pb-[80px] md:pb-[120px]">
			<div className="cma-section-container flex flex-col gap-12 items-center">
				<motion.h2
					className="text-cma-navy text-center"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
				>
					Looking for the perfect gift?
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
					{cards.map((card, i) => (
						<motion.div
							key={card.heading}
							className={`${card.bg} rounded-[24px] px-[40px] md:px-[60px] py-[64px] flex flex-col items-center gap-8`}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
								delay: i * 0.1,
							}}
						>
							<div className="flex flex-col gap-2 items-center">
								<span
									className={`${card.badge.badgeBg} ${card.badge.textColor} text-[10px] font-extrabold uppercase leading-none px-2 py-1 rounded-full tracking-wide`}
								>
									{card.badge.label}
								</span>
								<h2
									className={`${card.headingColor} text-center leading-none tracking-[-1px]`}
								>
									{card.heading}
								</h2>
							</div>
							<p className={`${card.bodyColor} text-center max-w-[400px]`}>
								{card.body}
							</p>
							<a href={card.cta.href} className={card.cta.style}>
								{card.cta.label}
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
