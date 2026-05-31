import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";
import {
	allResources,
	resourceFilters,
	resourcesByCategory,
} from "../data/resources";

export default function PlayfulLearningPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const resources =
		activeFilter === "All"
			? allResources
			: (resourcesByCategory[activeFilter] ?? []);

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

			{/* Hero */}
			<section className="bg-white w-full pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container">
					<motion.div
						className="flex flex-col items-center gap-[24px] text-center"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className="cma-eyebrow text-cma-teal">
							children's museum of atlanta
						</p>
						<h1 className="text-cma-navy">Playful Learning Resources</h1>
						<p className="text-cma-navy max-w-[560px] font-semibold text-[clamp(16px,2.1vw,24px)] leading-[1.3] tracking-[-0.5px]">
							Free guides, activity ideas, and research for caregivers and
							educators who want to bring the power of play home.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								onClick={() => document.getElementById("resources-grid")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black"
							>
								Browse Resources
							</a>
							<a
								href="#/educators"
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								For Educators
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Resources Grid */}
			<section
				id="resources-grid"
				className="bg-white w-full pt-[32px] pb-[80px]"
			>
				<div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-[80px] flex flex-col gap-[48px]">
					{/* Filter pills */}
					<motion.div
						className="w-full"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="cma-pill-scroll">
							{resourceFilters.map((filter) => (
								<button
									key={filter}
									onClick={() => setActiveFilter(filter)}
									className={`cma-nav-pill ${filter === activeFilter ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
								>
									{filter}
								</button>
							))}
						</div>
					</motion.div>

					{/* Cards */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeFilter}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							{resources.length === 0 ? (
								<motion.p
									className="text-cma-navy col-span-full text-center py-[40px]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									No resources in this category right now. Check back soon!
								</motion.p>
							) : (
								resources.map((resource, index) => (
									<motion.div
										key={resource.slug}
										className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px]"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.08, duration: 0.5 }}
									>
										<div className="cma-card-img">
											<img
												src={resource.image}
												alt={resource.title}
												className="absolute inset-0 w-full h-full object-cover"
											/>
											<div className="absolute bottom-[10px] left-[10px] bg-cma-teal-dark px-[18px] py-[12px] rounded-[8px]">
												<p className="font-extrabold text-[14px] text-white leading-[1.5] whitespace-nowrap">
													{resource.badge}
												</p>
											</div>
										</div>

										<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
											{resource.title}
										</p>

										<p className="text-cma-navy">{resource.description}</p>

										<a
											href={`#/resources/playful-learning/${resource.slug}`}
											className="cma-text-link mt-auto"
										>
											View Resource{" "}
											<FontAwesomeIcon
												icon={faArrowRight}
												className="text-[13px]"
											/>
										</a>
									</motion.div>
								))
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
