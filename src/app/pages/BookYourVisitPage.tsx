import AdmissionPricing from "../components/AdmissionPricing";
import AlertBanner from "../components/AlertBanner";
import BuyOnlineBenefits from "../components/BuyOnlineBenefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PlanYourVisitFAQs from "../components/PlanYourVisitFAQs";
import imgBYVHero from "../../assets/byv-hero.webp";
import PlanYourVisitHero from "../components/PlanYourVisitHero";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function BookYourVisitPage() {
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

			<PlanYourVisitHero
				bgImage={imgBYVHero}
				heading="Book Your Visit"
				subtitle="Reserve your tickets online and guarantee your family's spot. Advance purchase is highly encouraged — walk-up availability is limited."
			/>

			<AdmissionPricing showCtas={false} navyBottomWave />

			<BuyOnlineBenefits />

			{/* ACM Reciprocity */}
			<section className="bg-cma-cream w-full py-[48px]">
				<div className="cma-section-container">
					<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] px-[32px] py-[24px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
						<div className="flex-1 flex flex-col gap-[6px]">
							<p className="font-extrabold text-cma-navy text-[15px]">ACM Reciprocal Membership</p>
							<p className="text-cma-navy/70 text-[14px] leading-[1.5]">
								Member at another children's museum? Receive 50% off general admission for up to six people. Use promo code <strong className="text-cma-navy">ACMTIX</strong> at checkout. A valid reciprocal membership card and picture ID required upon arrival.
							</p>
						</div>
						<a
							href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black shrink-0"
						>
							Buy Tickets
						</a>
					</div>
				</div>
			</section>

			<PlanYourVisitFAQs showWave={false} />

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
