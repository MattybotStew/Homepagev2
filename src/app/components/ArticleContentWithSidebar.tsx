import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
export type SidebarSection = {
	id: string;
	label: string;
	href?: string;
};

export type ContentBlock = string | { h3: string; id?: string };

type ArticleItem = {
	slug: string;
	title: string;
	badge: string;
	badgeColor: "teal-dark" | "navy";
	eyebrow: string;
	heroImage: string;
	cardImage: string;
	paragraphs: ContentBlock[];
};

type Props = {
	exhibit: ArticleItem;
	related: ArticleItem[];
	sections?: SidebarSection[];
	breadcrumb?: { label: string; href: string };
	relatedHrefBase?: string;
	relatedHeading?: string;
	relatedCta?: string;
};

const defaultSections: SidebarSection[] = [
	{ id: "overview", label: "Overview" },
	{ id: "related", label: "Related Exhibits" },
];

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	const top = el.getBoundingClientRect().top + window.scrollY - 140;
	window.scrollTo({ top, behavior: "smooth" });
}

export default function ArticleContentWithSidebar({
	exhibit,
	related,
	sections = defaultSections,
	breadcrumb = { label: "Exhibits", href: "#/exhibits" },
	relatedHrefBase = "#/exhibits",
	relatedHeading = "Related Exhibits",
	relatedCta = "See Exhibit",
}: Props) {
	const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
	const badgeBg =
		exhibit.badgeColor === "navy" ? "bg-cma-navy" : "bg-cma-teal-dark";

	useEffect(() => {
		const observers = sections.map((section) => {
			const el = document.getElementById(section.id);
			if (!el) return null;
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(section.id);
				},
				{ rootMargin: "-20% 0px -60% 0px", threshold: 0 },
			);
			observer.observe(el);
			return observer;
		});
		return () => observers.forEach((obs) => obs?.disconnect());
	}, [sections]);

	return (
		<section className="bg-cma-cream py-[60px] md:py-[80px]">
			<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />

			<div className="cma-section-container">
				{/* Breadcrumb + Social — full width above both columns */}
				<div className="flex items-center justify-between flex-wrap gap-[12px] mb-[24px]">
					<div className="flex items-center gap-[8px] flex-wrap text-[15px]">
						<a href={breadcrumb.href} className="text-cma-navy hover:underline">
							{breadcrumb.label}
						</a>
						<span className="text-cma-navy text-[18px]">›</span>
						<span className="text-cma-teal-dark">{exhibit.title}</span>
					</div>
					<div className="flex gap-[16px] items-center shrink-0">
						<a
							href="https://www.facebook.com/childrensmuseumofatlanta"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled shrink-0"
							aria-label="Share on Facebook"
						>
							<Facebook className="size-5 text-white" />
						</a>
						<a
							href="https://www.instagram.com/childrensmuseumofatlanta/"
							target="_blank"
							rel="noopener noreferrer"
							className="cma-social-btn-filled shrink-0"
							aria-label="Share on Instagram"
						>
							<Instagram className="size-5 text-white" />
						</a>
					</div>
				</div>

				{/* Mobile section nav — horizontal scroll pills */}
				<div className="lg:hidden mb-[24px]">
					<div className="cma-pill-scroll">
						{sections.map((section) =>
							section.href ? (
								<a
									key={section.id}
									href={section.href}
									className="cma-nav-pill cma-nav-pill-inactive"
								>
									{section.label}
								</a>
							) : (
								<button
									key={section.id}
									onClick={() => scrollToSection(section.id)}
									className={`cma-nav-pill ${activeSection === section.id ? "cma-nav-pill-active" : "cma-nav-pill-inactive"}`}
								>
									{section.label}
								</button>
							)
						)}
					</div>
				</div>

				{/* Two-column layout */}
				<div className="flex gap-[40px] xl:gap-[56px] items-start">
					{/* Sticky sidebar — desktop only */}
					<aside className="hidden lg:block w-[210px] shrink-0 sticky top-[140px] self-start">
						<div className="bg-white rounded-[20px] border border-[rgba(107,126,160,0.15)] p-[20px] flex flex-col gap-[4px]">
							<p className="cma-eyebrow text-cma-navy/80 text-[10px] mb-[12px]">
								Jump to
							</p>
							{sections.map((section) => {
								const itemClass = `flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left ${
									activeSection === section.id
										? "bg-cma-navy/5 text-cma-navy"
										: "text-cma-navy/80 hover:text-cma-navy hover:bg-cma-navy/5"
								}`;
								const dot = (
									<span
										className={`w-[6px] h-[6px] rounded-full shrink-0 transition-colors ${
											activeSection === section.id
												? "bg-cma-orange"
												: "bg-cma-navy/20"
										}`}
									/>
								);
								return section.href ? (
									<a
										key={section.id}
										href={section.href}
										className="flex items-center gap-[10px] py-[8px] px-[10px] rounded-[10px] text-[13px] font-bold leading-[1.3] transition-colors w-full text-left text-cma-teal-dark hover:text-cma-teal hover:bg-cma-teal-pale/50"
									>
										<span className="w-[6px] h-[6px] rounded-full shrink-0 bg-cma-teal" />
										{section.label}
									</a>
								) : (
									<button
										key={section.id}
										onClick={() => scrollToSection(section.id)}
										className={itemClass}
									>
										{dot}
										{section.label}
									</button>
								);
							})}
						</div>
					</aside>

					{/* Main content */}
					<div className="flex-1 min-w-0 flex flex-col gap-[24px]">
						<div className="bg-white rounded-[24px] border-2 border-black/5 p-[24px] md:p-[48px] flex flex-col gap-[32px] md:gap-[48px]">
							{/* Hero image */}
							<div id="overview" className="relative scroll-mt-[140px]">
								<img
									src={exhibit.heroImage}
									alt={exhibit.title}
									className="w-full h-[220px] sm:h-[300px] md:h-[380px] object-cover rounded-[24px]"
								/>
								<div
									className={`absolute top-[20px] left-[23px] ${badgeBg} rounded-[8px] px-[18px] py-[12px]`}
								>
									<p className="text-white text-[14px] font-bold leading-[1.5]">
										{exhibit.badge}
									</p>
								</div>
							</div>

							{/* Meta + Title */}
							<div className="flex flex-col gap-[24px]">
								{exhibit.eyebrow && (
									<p className="text-cma-teal-dark">{exhibit.eyebrow}</p>
								)}
								<h1 className="text-cma-navy !text-[clamp(28px,3.75vw,48px)] !leading-none !tracking-[-1px] !font-extrabold">
									{exhibit.title}
								</h1>
							</div>

							{/* Body */}
							{exhibit.paragraphs.map((block, i) =>
								typeof block === "string" ? (
									<p key={`item-${i}`} className="text-cma-navy">{block}</p>
								) : (
									<h3 key={`item-${i}`} id={block.id} className="text-cma-navy scroll-mt-[140px]">{block.h3}</h3>
								)
							)}

							{/* Divider */}
							<div className="bg-black/15 h-px w-full" />

							{/* Related Exhibits */}
							<div
								id="related"
								className="flex flex-col gap-[48px] scroll-mt-[140px]"
							>
								<h2 className="text-cma-navy">{relatedHeading}</h2>
								<div className="flex flex-col gap-[16px]">
									{related.map((rel, i) => (
										<motion.div
											key={rel.slug}
											className="bg-white border-2 border-black/5 rounded-[24px] p-[24px] flex flex-col md:flex-row gap-[32px] md:items-center"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: i * 0.1,
												ease: [0.16, 1, 0.3, 1],
											}}
										>
											<img
												src={rel.cardImage}
												alt={rel.title}
												className="w-full md:w-[266px] md:h-[220px] h-[180px] rounded-[24px] object-cover shrink-0"
											/>
											<div className="flex flex-col gap-[20px] md:gap-[32px] flex-1 min-w-0 md:justify-center">
												<div className="flex flex-col gap-[8px] md:gap-[24px]">
													{rel.eyebrow && (
														<p className="text-cma-teal-dark">{rel.eyebrow}</p>
													)}
													<h3 className="text-cma-navy">
														{rel.title}
													</h3>
												</div>
												<p className="text-cma-navy line-clamp-3">
													{typeof rel.paragraphs[0] === "string" ? rel.paragraphs[0] : null}
												</p>
												<a
													href={`${relatedHrefBase}/${rel.slug}`}
													className="cma-text-link"
												>
													{relatedCta}{" "}
													<FontAwesomeIcon
														icon={faArrowRight}
														className="text-[13px]"
													/>
												</a>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
