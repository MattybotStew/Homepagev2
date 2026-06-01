import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { Navigate, useParams } from "react-router-dom";
import { allResources } from "../data/resources";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function ResourcePage() {
	const { slug } = useParams<{ slug: string }>();
	const resource = allResources.find((r) => r.slug === slug);

	if (!resource) return <Navigate to="/resources/playful-learning" replace />;

	const related = allResources.filter((r) => r.slug !== slug).slice(0, 3);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			<section className="bg-cma-cream py-[60px] md:py-[80px]">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

				<div className="cma-section-container">
					<div className="max-w-[1024px] mx-auto flex flex-col gap-[24px]">
						{/* Breadcrumb */}
						<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
							<a href="#/resources/playful-learning" className="text-cma-navy hover:underline">Playful Learning</a>
							<span className="text-cma-navy text-[18px]">›</span>
							<span className="text-cma-teal-dark">{resource.categories[0]}</span>
						</div>

						{/* White card */}
						<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px]">

							{/* Hero image */}
							<div className="relative rounded-[24px] overflow-hidden h-[240px] sm:h-[360px] md:h-[440px]">
								<img
									src={resource.image}
									alt={resource.title}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Meta + Title */}
							<div className="flex flex-col gap-[16px]">
								<p className="text-cma-teal-dark">{resource.badge}</p>
								<h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-none !tracking-[-1px] !font-extrabold">
									{resource.title}
								</h1>
							</div>

							{/* Body */}
							<div className="cma-prose flex flex-col">
								{resource.paragraphs.map((p, i) => (
									<p key={i}>{p}</p>
								))}
							</div>

							{/* Related */}
							{related.length > 0 && (
								<>
									<div className="bg-black/10 h-px w-full" />
									<div className="flex flex-col gap-[24px]">
										<p className="font-extrabold text-[22px] text-cma-navy">More Resources</p>
										<div className="flex flex-col gap-[16px]">
											{related.map((r, i) => (
												<motion.a
													key={r.slug}
													href={`#/resources/playful-learning/${r.slug}`}
													className="border-2 border-black/5 rounded-[20px] p-[20px] flex flex-col sm:flex-row gap-[20px] sm:items-center transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]"
													initial={{ opacity: 0, y: 20 }}
													whileInView={{ opacity: 1, y: 0 }}
													viewport={{ once: true }}
													transition={{ duration: 0.4, delay: i * 0.07 }}
												>
													<img
														src={r.image}
														alt={r.title}
														className="w-full sm:w-[120px] h-[120px] rounded-[14px] object-cover shrink-0"
													/>
													<div className="flex flex-col gap-[8px] flex-1 min-w-0">
														<p className="text-cma-teal-dark font-bold text-[12px]">{r.categories[0]}</p>
														<p className="font-extrabold text-cma-navy text-[16px] leading-[1.3]">{r.title}</p>
														<span className="cma-text-link text-[13px]">
															View Resource <FontAwesomeIcon icon={faArrowRight} className="text-[11px]" />
														</span>
													</div>
												</motion.a>
											))}
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
