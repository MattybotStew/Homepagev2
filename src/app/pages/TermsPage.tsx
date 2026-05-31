import imgCutCMA from "../../assets/cutCMA.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function TermsPage() {
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
					<h1 className="text-white mb-[16px]">Terms of Use</h1>
					<p className="text-white/75 max-w-[560px]">Last updated: January 1, 2026</p>
				</div>
			</section>

			<section className="bg-cma-cream py-[80px] md:py-[120px]">
				<div className="cma-section-container">
					<div className="bg-white rounded-[24px] border-2 border-black/5 p-[32px] md:p-[64px] max-w-[860px] mx-auto flex flex-col gap-[40px]">
						{[
							{
								heading: "Acceptance of Terms",
								body: "By accessing and using the Children's Museum of Atlanta website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.",
							},
							{
								heading: "Use of the Website",
								body: "You may use our website for lawful purposes only. You agree not to use the site in any way that violates applicable local, state, national, or international law or regulation, or to transmit any unsolicited or unauthorized advertising or promotional material.",
							},
							{
								heading: "Ticket Purchases & Reservations",
								body: "All ticket purchases are subject to availability. Tickets are non-transferable and non-refundable unless otherwise stated at the time of purchase. The Museum reserves the right to refuse admission. Children under 1 year of age receive free admission. All guests must adhere to Museum policies during their visit.",
							},
							{
								heading: "Membership Terms",
								body: "Memberships are valid for 12 months from the date of purchase. Membership benefits are non-transferable and apply only to the named members on the account. The Museum reserves the right to modify membership benefits with reasonable notice.",
							},
							{
								heading: "Intellectual Property",
								body: "The content on this website, including text, graphics, logos, images, and software, is the property of the Children's Museum of Atlanta and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
							},
							{
								heading: "Disclaimer of Warranties",
								body: "This website is provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted or error-free.",
							},
							{
								heading: "Limitation of Liability",
								body: "To the fullest extent permitted by law, the Children's Museum of Atlanta shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any content contained herein.",
							},
							{
								heading: "Changes to These Terms",
								body: "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site following any changes constitutes your acceptance of the new terms.",
							},
							{
								heading: "Contact Us",
								body: "If you have any questions about these Terms of Use, please contact us at: Children's Museum of Atlanta, 275 Centennial Olympic Park Dr NW, Atlanta, GA 30313. Email: info@cmatlanta.org. Phone: 404.659.5437.",
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
