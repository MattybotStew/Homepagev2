import { Link } from "react-router-dom";
import imgCutCMA from "../../assets/cutCMA.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function NotFoundPage() {
	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			<section className="relative bg-cma-navy overflow-hidden min-h-[70vh] flex items-center">
				<img
					src={imgCutCMA}
					alt=""
					aria-hidden
					className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-15 pointer-events-none select-none object-contain object-bottom"
				/>
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px] absolute top-0" />
				<div className="cma-section-container py-[120px] relative flex flex-col items-center text-center gap-[24px]">
					<p className="cma-eyebrow text-cma-teal">Children's Museum of Atlanta</p>
					<h1 className="text-white">Page Not Found</h1>
					<p className="text-white/75 max-w-[520px] text-[clamp(16px,1.5vw,20px)]">
						We couldn't find what you were looking for. The page may have moved or no longer exists.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 pt-[8px]">
						<Link
							to="/"
							className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
						>
							Back to Home
						</Link>
						<Link
							to="/search"
							className="cma-btn bg-white border-2 border-cma-teal-dark text-cma-teal-dark hover:bg-cma-teal-dark hover:border-cma-teal-dark hover:text-white hover:drop-shadow-[0px_3px_4px_rgba(0,0,0,0.12)] font-black"
						>
							Search the Site
						</Link>
					</div>
					<div className="flex flex-wrap gap-[12px] justify-center pt-[8px]">
						{[
							{ label: "Plan Your Visit", to: "/plan-your-visit" },
							{ label: "Exhibits", to: "/exhibits" },
							{ label: "Events", to: "/events" },
							{ label: "Memberships", to: "/memberships" },
							{ label: "Contact Us", to: "/contact" },
						].map(({ label, to }) => (
							<Link
								key={to}
								to={to}
								className="text-cma-teal-light text-[14px] font-bold hover:underline"
							>
								{label}
							</Link>
						))}
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
