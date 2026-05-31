import imgCutCMA from "../../assets/cutCMA.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function PrivacyPage() {
	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			<section className="relative overflow-hidden bg-cma-navy">
				<img src={imgCutCMA} alt="" aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom" />
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[80px] md:py-[120px] relative flex flex-col items-center text-center">
					<p className="cma-eyebrow text-cma-teal mb-[16px]">Children's Museum of Atlanta</p>
					<h1 className="text-white mb-[16px]">Privacy Policy</h1>
					<p className="text-white/75 max-w-[560px]">Last updated: January 1, 2026</p>
				</div>
			</section>

			<section className="bg-cma-cream py-[80px] md:py-[120px]">
				<div className="cma-section-container">
					<div className="bg-white rounded-[24px] border-2 border-black/5 p-[32px] md:p-[64px] max-w-[860px] mx-auto flex flex-col gap-[40px]">
						{[
							{
								heading: "Information We Collect",
								body: "We collect information you provide directly to us, such as when you purchase tickets, create an account, sign up for our newsletter, or contact us for support. This may include your name, email address, postal address, phone number, and payment information. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and referring URLs.",
							},
							{
								heading: "How We Use Your Information",
								body: "We use the information we collect to process ticket purchases and memberships, send transactional and promotional communications, respond to your comments and questions, improve our website and services, comply with legal obligations, and protect the rights and safety of our visitors and staff. We do not sell your personal information to third parties.",
							},
							{
								heading: "Sharing of Information",
								body: "We may share your information with third-party vendors and service providers that perform services on our behalf, such as payment processing, email delivery, and analytics. We may also disclose your information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.",
							},
							{
								heading: "Cookies",
								body: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, you may not be able to use some portions of our website.",
							},
							{
								heading: "Data Retention",
								body: "We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.",
							},
							{
								heading: "Children's Privacy",
								body: "Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information promptly.",
							},
							{
								heading: "Your Choices",
								body: "You may update or correct information about yourself by contacting us at info@cmatlanta.org. You may opt out of receiving promotional communications from us by following the instructions in those messages or by contacting us directly.",
							},
							{
								heading: "Contact Us",
								body: "If you have any questions about this Privacy Policy, please contact us at: Children's Museum of Atlanta, 275 Centennial Olympic Park Dr NW, Atlanta, GA 30313. Email: info@cmatlanta.org. Phone: 404.659.5437.",
							},
						].map(({ heading, body }) => (
							<div key={heading} className="flex flex-col gap-[12px]">
								<h3 className="text-cma-navy">{heading}</h3>
								<p className="text-cma-navy/75">{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
