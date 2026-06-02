import { motion } from "motion/react";
import AlertBanner from "../components/AlertBanner";
import DonateDonors from "../components/DonateDonors";
import DonorRecognitionTiers from "../components/DonorRecognitionTiers";
import Footer from "../components/Footer";
import GivingHero from "../components/GivingHero";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import PYVCallout from "../components/PYVCallout";
import ScrollProgress from "../components/ScrollProgress";

export default function DonorRecognitionPage() {
	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden">
				<MobileHeader />
			</div>
			<div className="hidden lg:block">
				<Header />
			</div>
			<div className="hidden lg:block">
				<ScrollProgress />
			</div>
			<GivingHero
				eyebrow="our supporters"
				heading={"Thank You\nfor Believing"}
				subtitle="CMA's mission is made possible by the generosity of donors, foundations, and corporate partners who believe every child deserves the power of play."
				ctas={[
					{ label: "Donate Now", href: "https://16707.blackbaudhosting.com/16707/Annual-Fund", variant: "orange" },
					{ label: "Support CMA", href: "#/support", variant: "outline" },
				]}
			/>
			<DonateDonors />

			{/* Stats */}
			<section className="bg-white w-full py-[80px] md:py-[100px]">
				<div className="cma-section-container">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[32px] gap-y-[48px]">
						{[
							{ number: "180,000+", label: "Children Served", detail: "Annually through exhibits and programs", color: "text-cma-teal" },
							{ number: "1,200+", label: "Free Passes Granted", detail: "Making the museum accessible to all", color: "text-cma-orange" },
							{ number: "$2M+", label: "Raised Annually", detail: "Supporting CMA's mission and programs", color: "text-cma-navy" },
							{ number: "Hundreds", label: "of Generous Donors", detail: "Who make it all possible", color: "text-[#fbb040]" },
						].map((stat, i) => (
							<motion.div
								key={stat.label}
								className="flex flex-col gap-[10px] text-center items-center"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
							>
								<p className={`${stat.color} font-black text-[clamp(36px,4vw,56px)] leading-none`}>{stat.number}</p>
								<p className="font-extrabold text-[clamp(15px,1.25vw,18px)] text-cma-navy leading-[1.1]">{stat.label}</p>
								<p className="font-bold text-cma-navy/60 text-[14px] leading-[1.5]">{stat.detail}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<DonorRecognitionTiers />
			<PYVCallout
				eyebrow="Donor Recognition"
				heading="Join Our Community of Supporters"
				body="Every gift — at any level — is recognized and celebrated. Join the hundreds of donors who make CMA's mission possible for Atlanta's children and families."
				cta={{ label: "Make a Gift", href: "#/donate" }}
				bg="bg-cma-navy"
				showCountdown={false}
				showRightCta={false}
			/>
			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
