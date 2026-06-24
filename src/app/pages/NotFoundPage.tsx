import { motion } from "motion/react";
import { Link } from "react-router-dom";
import imgCutCMA from "../../assets/cutCMA.png";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

const quickLinks = [
	{ label: "Plan Your Visit", to: "/plan-your-visit" },
	{ label: "Exhibits", to: "/exhibits" },
	{ label: "Events", to: "/events" },
	{ label: "Memberships", to: "/memberships" },
	{ label: "Donate", to: "/donate" },
	{ label: "Contact Us", to: "/contact" },
];

export default function NotFoundPage() {
	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			<section className="relative bg-cma-navy overflow-hidden min-h-[80vh] flex items-center">
				{/* Background illustration */}
				<img
					src={imgCutCMA}
					alt=""
					aria-hidden
					className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] opacity-10 pointer-events-none select-none object-contain object-bottom"
				/>

				{/* Decorative shapes */}
				<div
					aria-hidden
					className="absolute top-[20%] left-[5%] w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] rounded-full bg-cma-orange/10 pointer-events-none"
				/>
				<div
					aria-hidden
					className="absolute top-[15%] right-[10%] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-full bg-cma-teal/10 pointer-events-none"
				/>
				<div
					aria-hidden
					className="absolute bottom-[30%] right-[5%] w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] rounded-full bg-cma-teal-light/8 pointer-events-none"
				/>

				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px] absolute top-0" />

				<div className="cma-section-container py-[100px] md:py-[140px] relative flex flex-col items-center text-center gap-[28px]">
					{/* 404 badge */}
					<motion.div
						className="inline-flex items-center gap-[12px] bg-white/10 backdrop-blur-sm border border-white/10 rounded-[100px] px-[20px] py-[10px]"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<span className="w-[10px] h-[10px] rounded-full bg-cma-orange shrink-0" />
						<span className="cma-eyebrow text-cma-teal-light !text-[12px]">
							404
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.div
						className="flex flex-col gap-[12px]"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					>
						<h1 className="text-white text-[clamp(48px,8vw,120px)] font-black leading-[0.9] tracking-[-3px]">
							Oops!
						</h1>
						<p className="text-white/60 font-semibold text-[clamp(16px,1.8vw,24px)] leading-[1.3] max-w-[480px]">
							Looks like this page wandered off to explore the exhibits without us.
						</p>
					</motion.div>

					{/* CTAs */}
					<motion.div
						className="flex flex-col sm:flex-row gap-3"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
					>
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
					</motion.div>

					{/* Quick links */}
					<motion.div
						className="flex flex-col items-center gap-[12px]"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
					>
						<p className="text-white/40 font-bold text-[12px] uppercase tracking-[2px]">
							Maybe you were looking for...
						</p>
						<div className="flex flex-wrap gap-[10px] justify-center">
							{quickLinks.map(({ label, to }) => (
								<Link
									key={to}
									to={to}
									className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-[13px] px-[16px] py-[8px] rounded-full transition-colors"
								>
									{label}
								</Link>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}