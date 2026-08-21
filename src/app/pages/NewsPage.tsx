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
	allArticles,
	articleFilters,
	articlesByCategory,
} from "../data/articles";

export default function NewsPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const articles =
		activeFilter === "All"
			? allArticles
			: (articlesByCategory[activeFilter] ?? []);

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
						<p className="cma-eyebrow text-cma-teal-dark">
							children's museum of atlanta
						</p>
						<h1 className="text-cma-navy">News &amp; Blog</h1>
						<p className="text-cma-navy max-w-[560px] font-semibold text-[clamp(16px,2.1vw,24px)] leading-[1.3] tracking-[-0.5px]">
							Stories, spotlights, and updates from inside Children's Museum of
							Atlanta.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								onClick={() => document.getElementById("articles-grid")?.scrollIntoView({ behavior: "smooth" })}
								className="cma-btn bg-cma-orange text-cma-navy-dark hover:bg-cma-orange-dark font-black"
							>
								Browse Articles
							</a>
							<a
								href="mailto:press@childrensmuseumatlanta.org"
								className="cma-btn bg-white border-2 border-cma-navy text-cma-navy hover:bg-cma-blue-light font-black"
							>
								Press &amp; Media
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Articles Grid */}
			<section
				id="articles-grid"
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
							{articleFilters.map((filter) => (
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
							{articles.length === 0 ? (
								<motion.p
									className="text-cma-navy col-span-full text-center py-[40px]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									No articles in this category right now. Check back soon!
								</motion.p>
							) : (
								articles.map((article, index) => (
									<motion.a
										key={article.slug}
										href={`#/news/${article.slug}`}
										className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col gap-[32px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.08, duration: 0.5 }}
									>
										<div className="cma-card-img">
											<img
												src={article.image}
												alt={article.title}
												className="absolute inset-0 w-full h-full object-cover"
											/>
										</div>

										<div className="flex flex-col gap-[8px]">
											<p className="text-cma-teal-dark font-bold text-[12px]">{article.categories[0]}</p>
											<p className="font-extrabold text-[22px] md:text-[30px] text-cma-navy leading-[1.3] tracking-[-1px]">
												{article.title}
											</p>
										</div>

										<p className="text-cma-navy">{article.description}</p>

										<span className="cma-text-link mt-auto">
											Read Article{" "}
											<FontAwesomeIcon
												icon={faArrowRight}
												className="text-[13px]"
											/>
										</span>
									</motion.a>
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
