import { Link, Navigate, useParams } from "react-router-dom";
import { allArticles } from "../data/articles";
import AlertBanner from "../components/AlertBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PowerOfPlayMarquee from "../components/PowerOfPlayMarquee";
import ScrollProgress from "../components/ScrollProgress";

export default function ArticlePage() {
	const { slug } = useParams<{ slug: string }>();
	const article = allArticles.find((a) => a.slug === slug);

	if (!article) return <Navigate to="/news" replace />;

	const related = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

	return (
		<div className="size-full relative">
			<AlertBanner />
			<div className="lg:hidden"><MobileHeader /></div>
			<div className="hidden lg:block"><Header /></div>
			<div className="hidden lg:block"><ScrollProgress /></div>

			{/* Hero */}
			<section className="bg-cma-navy">
				<div className="shrink-0 h-0 lg:h-[120px] xl:h-[126px]" />
				<div className="cma-section-container py-[48px] md:py-[64px] flex flex-col gap-[20px] max-w-[860px]">
					<div className="flex flex-wrap gap-[8px]">
						{article.categories.map((cat) => (
							<span key={cat} className="bg-cma-orange text-cma-navy text-[11px] font-extrabold uppercase tracking-[1px] px-[10px] py-[4px] rounded-full">
								{cat}
							</span>
						))}
					</div>
					<h1 className="text-white">{article.title}</h1>
					<div className="flex flex-wrap items-center gap-[16px] text-white/60 text-[13px]">
						<span>{article.badge}</span>
						{article.author && <span>By {article.author}</span>}
					</div>
				</div>
			</section>

			{/* Hero image */}
			<div className="bg-white">
				<div className="cma-section-container max-w-[860px]">
					<div className="cma-card-img rounded-none rounded-b-[24px] overflow-hidden" style={{ aspectRatio: "16/6" }}>
						<img src={article.image} alt={article.title} className="w-full h-full object-cover" />
					</div>
				</div>
			</div>

			{/* Article body */}
			<section className="bg-white py-[64px] md:py-[80px]">
				<div className="cma-section-container">
					<div className="flex gap-[64px] items-start">

						{/* Main content */}
						<article className="flex-1 min-w-0">
							{article.content ? (
								<div
									className="cma-prose"
									dangerouslySetInnerHTML={{ __html: article.content }}
								/>
							) : (
								<div className="cma-prose flex flex-col gap-[0]">
									{article.paragraphs.map((p, i) => (
										<p key={i}>{p}</p>
									))}
								</div>
							)}
						</article>

						{/* Sidebar */}
						<aside className="hidden lg:flex flex-col gap-[24px] w-[260px] shrink-0 sticky top-[100px] self-start">
							<div className="bg-cma-cream rounded-[20px] p-[24px] flex flex-col gap-[16px]">
								<p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-cma-navy/40">About this post</p>
								<div className="flex flex-col gap-[8px] text-[13px] text-cma-navy/70">
									<p><span className="font-bold text-cma-navy">Published:</span> {article.badge.split("•")[1]?.trim() ?? article.badge}</p>
									{article.author && <p><span className="font-bold text-cma-navy">Author:</span> {article.author}</p>}
									<div className="flex flex-wrap gap-[6px] mt-[4px]">
										{article.categories.map((c) => (
											<span key={c} className="bg-white border border-black/10 text-cma-navy text-[11px] font-bold px-[8px] py-[3px] rounded-full">{c}</span>
										))}
									</div>
								</div>
							</div>

							<div className="bg-cma-navy rounded-[20px] p-[24px] flex flex-col gap-[12px]">
								<p className="font-extrabold text-[14px] text-white leading-[1.3]">Plan your next visit</p>
								<p className="text-white/60 text-[13px]">Open daily. Located in downtown Atlanta.</p>
								<a
									href="https://16707.blackbaudhosting.com/16707/page.aspx?pid=196&tab=2&txobjid=56fa665e-15d9-4500-9b27-c1c2c0b2c6bf"
									target="_blank"
									rel="noopener noreferrer"
									className="cma-btn bg-cma-orange text-cma-navy hover:bg-cma-orange-dark font-black text-[13px] !py-[10px]"
								>
									Buy Tickets
								</a>
							</div>
						</aside>
					</div>
				</div>
			</section>

			{/* Related articles */}
			{related.length > 0 && (
				<section className="bg-cma-cream py-[64px] md:py-[80px]">
					<div className="cma-section-container flex flex-col gap-[40px]">
						<h2 className="text-cma-navy">More from CMA</h2>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
							{related.map((a) => (
								<Link
									key={a.slug}
									to={`/news/${a.slug}`}
									className="bg-white rounded-[20px] overflow-hidden border border-black/5 hover:shadow-cma-card transition-shadow flex flex-col"
								>
									<div className="cma-card-img">
										<img src={a.image} alt={a.title} className="w-full h-full object-cover" />
									</div>
									<div className="p-[20px] flex flex-col gap-[8px] flex-1">
										<p className="text-[11px] text-cma-navy/40 font-bold">{a.badge}</p>
										<p className="font-extrabold text-cma-navy text-[15px] leading-[1.3]">{a.title}</p>
										<span className="cma-text-link text-[13px] mt-auto">Read more →</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			)}

			<PowerOfPlayMarquee />
			<Footer />
		</div>
	);
}
