import { motion } from "motion/react";
import imgGift from "../../assets/gift.webp";
import imgHours from "../../assets/hours.webp";
import imgShop from "../../assets/Shop.webp";

const sections = [
	{
		image: imgShop,
		imageAlt: "Museum Store interior",
		imageLeft: true,
		heading: "Shop the Museum Store!",
		body: "Visit our Museum Store and take a piece of Children's Museum of Atlanta home. We offer great gifts and souvenirs, including fun, educational toys and games and unique apparel. The Museum Store is the destination of choice for anyone visiting downtown Atlanta. Admission is not required to shop the Museum Store.",
		ctas: null,
	},
	{
		image: imgHours,
		imageAlt: "Museum Store hours",
		imageLeft: false,
		heading: "Hours Of Operation:",
		body: null,
		hours: true,
		ctas: null,
	},
	{
		image: imgGift,
		imageAlt: "Gift guides and merchandise",
		imageLeft: true,
		heading: "Gift Guides & Online Purchases",
		body: "We have the right gift for every child (and child-at-heart!) in your life. Organized by age and interest, our gift guides will help you make their day. Can't make it to downtown? Check out our online store for merch and toy delivery.",
		ctas: [
			{
				label: "Gift Guides",
				href: "#gift-guides",
				style: "cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark",
			},
			{
				label: "Purchase CMA Merch Online",
				href: "#merch",
				style:
					"cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:text-white",
			},
		],
	},
];

export default function MuseumStoreContent() {
	return (
		<section className="bg-white w-full py-[80px] md:py-[120px]">
			<div className="cma-section-container flex flex-col gap-[64px] md:gap-[80px]">
				{sections.map((section, i) => (
					<motion.div
						key={`item-${i}`}
						className={`flex flex-col ${section.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 items-center`}
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						{/* Image */}
						<div className="w-full lg:flex-1 rounded-[24px] overflow-hidden h-[280px] sm:h-[360px] lg:h-[470px] shrink-0">
							<img
								src={section.image}
								alt={section.imageAlt}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Text */}
						<div className="w-full lg:flex-1 flex flex-col gap-8 lg:px-[48px]">
							<h2 className="text-cma-navy leading-none tracking-[-1px]">
								{section.heading}
							</h2>

							{section.body && <p className="text-cma-navy">{section.body}</p>}

							{section.hours && (
								<div className="flex flex-col gap-1">
									<p className="text-cma-navy">
										The Museum Store is open when the Museum is open!
									</p>
									<p className="text-cma-navy font-black mt-2">
										Monday–Sunday: 10:00 AM – 5:00 PM
									</p>
								</div>
							)}

							{section.ctas && (
								<div className="flex flex-col sm:flex-row gap-3">
									{section.ctas.map((cta) => (
										<a key={cta.label} href={cta.href} className={cta.style}>
											{cta.label}
										</a>
									))}
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
